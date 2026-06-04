'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Code, Database, FileCode, Palette, BookOpen } from 'lucide-react'
import { Course } from '@/lib/supabase'
import { useEffect, useState } from 'react'

const iconMap: Record<string, React.ElementType> = {
  Code,
  Database,
  FileCode,
  Palette,
  BookOpen,
}

export default function CourseCard({ course, index }: { course: Course; index: number }) {
  const Icon = iconMap[course.icon_name] || BookOpen
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(course.progress)
    }, 300 + index * 100)
    return () => clearTimeout(timer)
  }, [course.progress, index])

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="relative rounded-2xl bg-[#111111] border border-white/10 p-5 overflow-hidden group"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-transparent to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-2xl border border-violet-500/0 group-hover:border-violet-500/30 transition-all duration-300 pointer-events-none" />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center mb-4">
          <Icon size={20} className="text-violet-400" />
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-sm mb-1 leading-snug">
          {course.title}
        </h3>
        <p className="text-white/40 text-xs mb-4">{course.progress}% complete</p>

        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${width}%` }}
            transition={{ duration: 1, ease: 'easeOut', delay: index * 0.1 }}
          />
        </div>
      </div>
    </motion.article>
  )
}