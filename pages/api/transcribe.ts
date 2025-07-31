import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

const ASSEMBLY_API_KEY = process.env.ASSEMBLYAI_API_KEY

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method not allowed")

  const { audioUrl } = req.body

  if (!audioUrl) return res.status(400).json({ error: "Missing audioUrl" })

  try {
    const response = await axios.post("https://api.assemblyai.com/v2/transcript", {
      audio_url: audioUrl
    }, {
      headers: {
        Authorization: ASSEMBLY_API_KEY,
        "Content-Type": "application/json"
      }
    })

    return res.status(200).json({ transcriptId: response.data.id })
  } catch (err) {
    console.error("❌ AssemblyAI error:", err.response?.data || err.message)
    return res.status(500).json({ error: "Failed to start transcription" })
  }
}
