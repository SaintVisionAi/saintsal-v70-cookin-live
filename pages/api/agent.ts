import type { NextApiRequest, NextApiResponse } from "next"
import { createGhlContact, createGhlNote } from "@/lib/actions/ghl"
import { sendSlackMessage } from "@/lib/actions/slack"
import { createNotionEntry } from "@/lib/actions/notion"
import { OpenAI } from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_ENDPOINT
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method not allowed")

  // 🛡️ Admin Guard
  if (req.headers.authorization !== `Bearer ${process.env.OPENAI_ADMIN_KEY}`) {
    return res.status(401).json({ error: "Unauthorized" })
  }

  const { command, input, metadata } = req.body

  try {
    // 🌍 Translate
    if (command === "translate") {
      const completion = await openai.chat.completions.create({
        model: process.env.OPENAI_DEPLOYMENT,
        messages: [
          { role: "system", content: "Translate the user's message to professional Spanish." },
          { role: "user", content: input }
        ]
      })

      const output = completion.choices[0].message.content
      await createNotionEntry(metadata?.notionDbId, `Translated: ${output}`)
      return res.status(200).json({ result: output })
    }

    // ✍️ Rephrase
    if (command === "rephrase") {
      const completion = await openai.chat.completions.create({
        model: process.env.OPENAI_DEPLOYMENT,
        messages: [
          { role: "system", content: "Rephrase the user's input into a professional response." },
          { role: "user", content: input }
        ]
      })

      const output = completion.choices[0].message.content
      await createNotionEntry(metadata?.notionDbId, `Rephrased: ${output}`)
      return res.status(200).json({ result: output })
    }

    // 👥 Lead
    if (command === "lead") {
      const lead = await createGhlContact(input)
      await sendSlackMessage(`🚨 New Lead Captured: ${input.firstName} ${input.lastName}`)
      await createNotionEntry(metadata?.notionDbId, `New Lead: ${input.email}`)
      return res.status(200).json({ result: lead })
    }

    // 🧠 Summarize
    if (command === "summarize") {
      const completion = await openai.chat.completions.create({
        model: process.env.OPENAI_DEPLOYMENT,
        messages: [
          { role: "system", content: "Summarize the following input into key points." },
          { role: "user", content: input }
        ]
      })

      const summary = completion.choices[0].message.content
      await createNotionEntry(metadata?.notionDbId, `Summary: ${summary}`)
      return res.status(200).json({ result: summary })
    }

    // ❌ Unknown
    await sendSlackMessage(`❗ Unrecognized command: ${command}`)
    return res.status(400).json({ error: "Invalid command" })

  } catch (err) {
    console.error("❌ Agent error:", err)
    return res.status(500).json({ error: "Internal Server Error" })
  }
}
