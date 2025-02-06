import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

export interface IAlertSectionProps {
  title?: ReactNode
  children: ReactNode
}

// Define animation variants for Framer Motion
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const childVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
}

export const AlertSection = ({ title, children }: IAlertSectionProps) => {
  return (
    <motion.div
      className="min-h-[calc(100vh-8rem)] mt-4 p-6 bg-gray-50 rounded-lg shadow-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {title ? (
        <motion.div
          className="mb-4 text-2xl font-bold text-gray-800"
          variants={childVariants}
        >
          {title}
        </motion.div>
      ) : null}
      <motion.div
        className="h-64 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center gap-6 p-6"
        variants={childVariants}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
