'use client'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
        initial={{ translateY: "100%" }}
        animate={{ translateY: 0 }}
        transition={{ ease: 'easeInOut', duration: 2 }}
    >
      {children}
    </motion.div>
  )
}