import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export interface IBadgeProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'gray' | 'red' | 'yellow' | 'green'
  className?: string
}

export const Badge = ({
  children,
  size = 'md',
  variant = 'gray',
  className = '',
}: IBadgeProps) => {
  const sizeCls = {
    sm: 'px-2.5 text-xs h-6',
    md: 'px-3 py-1.5 text-sm h-7',
    lg: 'px-4 py-2 text-base h-8',
  }

  const variantCls = {
    primary:
      'bg-primary-100/80 backdrop-blur-sm ring-1 ring-primary-200 text-primary-800 hover:bg-primary-100',
    gray: 'bg-gray-100/80 backdrop-blur-sm ring-1 ring-gray-200 text-gray-800 hover:bg-gray-100',
    red: 'bg-red-100/80 backdrop-blur-sm ring-1 ring-red-200 text-red-800 hover:bg-red-100',
    yellow:
      'bg-yellow-100/80 backdrop-blur-sm ring-1 ring-yellow-200 text-yellow-800 hover:bg-yellow-100',
    green:
      'bg-green-100/80 backdrop-blur-sm ring-1 ring-green-200 text-green-800 hover:bg-green-100',
  }

  return (
    <motion.span
      initial={{ scale: 0.95, opacity: 0.8 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: { type: 'spring', stiffness: 300 },
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className={`
        inline-flex items-center justify-center
        rounded-full font-medium tracking-wide
        transition-all duration-300 ease-in-out
        hover:shadow-md active:scale-95
        ${sizeCls[size]}
        ${variantCls[variant]}
        ${className}
      `}
    >
      {children}
    </motion.span>
  )
}
