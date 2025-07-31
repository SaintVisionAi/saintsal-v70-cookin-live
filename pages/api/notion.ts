import { createNotionEntry } from "@/lib/actions/notion"

export default async function handler(req, res) {
  const { databaseId, content } = req.body
  try {
    const result = await createNotionEntry(databaseId, content)
    res.status(200).json({ ok: true, data: result })
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message })
  }
}
