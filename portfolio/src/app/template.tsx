'use client'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y:40, opacity: 0 }}
      animate={{ y:0, opacity: 1 }}
        // initial={{ translateY: 0 }}
        // animate={{ translateY: 1 }}
        transition={{ ease: 'easeInOut', duration: 1.5 }}
    >
      {children}
    </motion.div>
  )
}