import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'
import OpenAI from 'openai'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! })

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()

    const schema = z.object({
      topic: z.string(),
      category: z.string(),
      audience: z.string()
    })

    const { topic, category, audience } = schema.parse(body)

    const prompt = `You are SaintSal, a spiritually grounded, high-intellect AI assistant. Based on the following inputs, generate a compelling, short insight card to be shared with a ${audience}. It should be rooted in wisdom, clarity, and purpose.

Topic: ${topic}
Category: ${category}
Audience: ${audience}

Structure:
- Title (3-5 words)
- Summary (2-3 sentence insight)
- Tone: Bold, Clear, Uplifting`

    const chat = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    })

    const output = chat.choices[0].message.content?.trim()

    const { data, error } = await supabase.from('insight_cards').insert([
      {
        title: topic,
        category,
        content: output,
        user_email: session.user.email
      }
    ])

    if (error) {
      return NextResponse.json({ error: 'Database insert failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true, card: output })
  } catch (err) {
    console.error('Insight generation error:', err)
    return NextResponse.json({ error: 'Insight generation failed.' }, { status: 500 })
  }
}
