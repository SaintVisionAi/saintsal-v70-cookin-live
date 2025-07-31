// 📦 app/ui/components/overlays/BossEscalationPanel.tsx — UI Overlay for SaintSal Boss Escalation
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Terminal, Sparkles, X } from "lucide-react"

export default function BossEscalationPanel() {
  const [visible, setVisible] = useState(false)

  const toggle = () => setVisible(!visible)

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button onClick={toggle} className="rounded-full shadow-xl px-4 py-2 text-white bg-gradient-to-r from-rose-500 to-purple-700 hover:opacity-90">
        <Sparkles className="mr-2 h-4 w-4" /> Boss Panel
      </Button>

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <Card className="w-[380px] rounded-2xl shadow-2xl border border-zinc-800 bg-zinc-950 text-white backdrop-blur-sm">
              <CardContent className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold">💼 SaintSal Executive Mode</h2>
                  <Button variant="ghost" onClick={toggle} size="icon">
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <p className="text-sm text-zinc-400">Activate real-time escalation, command execution, or override AI logic manually.</p>

                <div className="space-y-2">
                  <Button variant="secondary" className="w-full">
                    <Terminal className="h-4 w-4 mr-2" />
                    Enter Command
                  </Button>
                  <Button variant="destructive" className="w-full">
                    🔥 Global Reset / Override
                  </Button>
                </div>

                <div className="border-t border-zinc-800 pt-3">
                  <p className="text-xs text-zinc-500">
                    Powered by Cap & SaintSal™ — Covenant Ops Handler Protocol.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
