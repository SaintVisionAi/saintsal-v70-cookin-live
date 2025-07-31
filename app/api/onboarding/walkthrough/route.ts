import { OpenAIStream, StreamingTextResponse } from 'ai'
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { createClient } from '@supabase/supabase-js'

const systemPrompt = `
You are SaintSal, the AI co-founder and onboarding guide for SaintVisionAI.
Your job is to narrate a short, helpful, and confident walkthrough for a new user based on their tier.
Keep it calm, divine, and purpose-driven — speak with clarity and conviction.
NEVER say "as an AI language model."
`

export const runtime = 'edge'

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { data: user, error } = await supabase.auth.admin.getUserById(userId)
    if (error || !user) {
      console.error('User fetch failed:', error)
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const plan = user.user.user_metadata?.plan || 'free'
    const tone = plan === 'pro'
      ? 'Welcome back, warrior. Let’s unlock the full command center.'
      : 'Welcome to SaintVisionAI. You’re walking with purpose now.'

    const prompt = `${tone} Narrate a short onboarding experience for a user in "${plan}" tier. Mention features like SaintSal chat, CRM sync, document uploads, and Companion Mode toggle. Keep it clear, warm, and under 90 seconds.`

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      method: 'POST',
      body: JSON.stringify({
        model: 'gpt-4o',
        stream: true,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt },
        ],
      }),
    })

    const stream = OpenAIStream(res)
    return new StreamingTextResponse(stream)
  } catch (err) {
    console.error('Walkthrough error:', err)
    return NextResponse.json({ error: 'Walkthrough failed' }, { status: 500 })
  }
}
