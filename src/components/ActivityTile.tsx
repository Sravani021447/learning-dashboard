'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

const colorMap = [
  'bg-white/5',
  'bg-violet-900/60',
  'bg-violet-600/70',
  'bg-violet-400',
]

// Fixed data - no Math.random() to avoid hydration errors
const generateActivity = () => {
  const seed = [2,1,3,0,2,1,0,3,2,1,2,0,1,3,2,1,0,2,3,1,2,0,1,2,3,0,1,2,1,3,0,2,1,3,2,0,1,2,0,3,1,2,3,0,1,2,1,0,2,3,1,2]
  return Array.from({ length: 52 }, (_, wi) =>
    Array.from({ length: 7 }, (_, di) => seed[(wi * 7 + di) % seed.length])
  )
}

export default function ActivityTile() {
  const data = useMemo(() => generateActivity(), [])

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.3 }}
      whileHover={{ scale: 1.01, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="relative rounded-2xl bg-[#111111] border border-white/10 p-6 overflow-hidden group"
    >
      <div className="absolute inset-0 rounded-2xl border border-violet-500/0 group-hover:border-violet-500/30 transition-all duration-300 pointer-events-none" />

      <h3 className="text-white font-semibold text-sm mb-4">Learning Activity</h3>

      <div className="flex gap-1 overflow-x-auto pb-2">
        {data.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day, di) => (
              <motion.div
                key={di}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: wi * 0.01 + di * 0.005 }}
                className={`w-2.5 h-2.5 rounded-sm ${colorMap[day]}`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-3">
        <span className="text-white/30 text-xs">Less</span>
        {colorMap.map((c, i) => (
          <div key={i} className={`w-2.5 h-2.5 rounded-sm ${c}`} />
        ))}
        <span className="text-white/30 text-xs">More</span>
      </div>
    </motion.article>
  )
}