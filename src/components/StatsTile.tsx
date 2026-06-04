'use client'

import { motion } from 'framer-motion'
import { Course } from '@/lib/supabase'

export default function StatsTile({ courses }: { courses: Course[] }) {
  const avg = courses.length
    ? Math.round(courses.reduce((a, c) => a + c.progress, 0) / courses.length)
    : 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.2 }}
      whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="h-full rounded-2xl bg-[#111111] border border-white/10 p-6 flex flex-col justify-between group relative overflow-hidden"
    >
      <div className="absolute inset-0 rounded-2xl border border-violet-500/0 group-hover:border-violet-500/30 transition-all duration-300 pointer-events-none" />

      <p className="text-white/50 text-xs uppercase tracking-widest">Avg Progress</p>
      <div>
        <p className="text-5xl font-bold text-white">
          {avg}<span className="text-violet-400">%</span>
        </p>
        <p className="text-white/40 text-sm mt-1">Across {courses.length} courses</p>
      </div>
      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${avg}%` }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        />
      </div>
    </motion.article>
  )
}