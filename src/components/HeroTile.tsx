'use client'

import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function HeroTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      whileHover={{ scale: 1.01 }}
      style={{ position: 'relative' }}
      className="rounded-2xl bg-gradient-to-br from-violet-900/40 via-[#0f0f0f] to-indigo-900/30 border border-white/10 p-8 overflow-hidden"
    >
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <p className="text-white/50 text-sm mb-1">Good morning 👋</p>
        <h1 className="text-3xl font-bold text-white mb-6">
          Welcome back, <span className="text-violet-400">Alex</span>
        </h1>

        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-fit">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-orange-500/20">
            <Flame size={20} className="text-orange-400" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">12 Day Streak</p>
            <p className="text-white/40 text-xs">Keep it going!</p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}