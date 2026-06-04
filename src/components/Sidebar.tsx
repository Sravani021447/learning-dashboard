'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard, BookOpen, BarChart2,
  Settings, ChevronLeft, ChevronRight
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: BookOpen, label: 'Courses' },
  { icon: BarChart2, label: 'Progress' },
  { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('Dashboard')

  return (
    <>
      {/* Desktop & Tablet Sidebar */}
      <motion.nav
        animate={{ width: collapsed ? 64 : 220 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative hidden md:flex flex-col h-screen bg-[#0f0f0f] border-r border-white/10 py-6 px-2 overflow-hidden shrink-0"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center shrink-0">
            <BookOpen size={16} className="text-white" />
          </div>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white font-bold text-sm whitespace-nowrap"
            >
              LearnSpace
            </motion.span>
          )}
        </div>

        {/* Nav Items */}
        <ul className="flex flex-col gap-1 flex-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => setActive(item.label)}
                className="relative w-full flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm transition-colors"
              >
                {active === item.label && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-violet-600/20 rounded-lg border border-violet-500/30"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <item.icon
                  size={18}
                  className={active === item.label ? 'text-violet-400 shrink-0 relative z-10' : 'text-white/40 shrink-0 relative z-10'}
                />
                {!collapsed && (
                  <span className={`relative z-10 ${active === item.label ? 'text-violet-300' : 'text-white/40'}`}>
                    {item.label}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Collapse Button - desktop only */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 mx-auto mt-4 transition-colors"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0f0f0f] border-t border-white/10 px-2 py-2">
        <ul className="flex justify-around">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => setActive(item.label)}
                className="relative flex flex-col items-center gap-1 px-3 py-1 rounded-lg"
              >
                {active === item.label && (
                  <motion.div
                    layoutId="active-pill-mobile"
                    className="absolute inset-0 bg-violet-600/20 rounded-lg"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <item.icon
                  size={20}
                  className={active === item.label ? 'text-violet-400 relative z-10' : 'text-white/40 relative z-10'}
                />
                <span className={`text-[10px] relative z-10 ${active === item.label ? 'text-violet-300' : 'text-white/40'}`}>
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}