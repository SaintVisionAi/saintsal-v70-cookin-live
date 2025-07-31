'use client'

import { useEffect, useRef, useState } from 'react'
import { useHotkey } from '@/lib/hooks/use-hotkey'
import { useAppContext } from '@/context/context'
import DashboardLayout from '@/components/ui/dashboard'
import Brand from '@/components/ui/brand'
import { useSession } from 'next-auth/react'
import { getUserByEmail } from '@/db/users'

export default function ChatPage() {
  const { data: session } = useSession()
  const [plan, setPlan] = useState<string | null>(null)
  const chatRef = useRef<HTMLDivElement>(null)
  const { messages, sendMessage } = useAppContext()

  useEffect(() => {
    const fetchPlan = async () => {
      if (session?.user?.email) {
        const user = await getUserByEmail(session.user.email)
        setPlan(user?.plan ?? 'free')
      }
    }
    fetchPlan()
  }, [session])

  useHotkey('Enter', () => {
    if (chatRef.current) {
      const input = chatRef.current.querySelector('input') as HTMLInputElement
      if (input?.value) {
        sendMessage(input.value)
        input.value = ''
      }
    }
  })

  return (
    <DashboardLayout>
      <div className="mb-4">
        <Brand />
        <div className="text-gray-600 text-sm">Plan: {plan}</div>
      </div>
      <div ref={chatRef}>
        {messages.map((msg, i) => (
          <div key={i} className="my-2">
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
        <input
          type="text"
          className="w-full border p-2 mt-4 rounded"
          placeholder="Ask me anything..."
        />
      </div>
    </DashboardLayout>
  )
}
