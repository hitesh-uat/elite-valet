import { Role } from '@elitevalet/util/types'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import { BrandIcon } from './BrandIcon'

export interface IBrandProps {
  className?: string
  shortForm?: boolean
  type?: Role
}

export const Brand = ({
  shortForm = false,
  className,
  type = undefined,
}: IBrandProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'grid place-items-center z-50 transition-all duration-300',
        className,
      )}
    >
      <div className="text-xl ">
        {shortForm ? (
          <motion.div
            className="flex gap-1 items-center"
            whileHover={{ scale: 1.1 }}
          >
            <BrandIcon className="w-6 h-6" />
            <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EV.
            </span>
          </motion.div>
        ) : (
          <motion.div
            className="flex items-center gap-3 font-medium tracking-tight group"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <BrandIcon className="w-8 h-8 transition-colors duration-300 group-hover:text-primary" />
            </motion.div>
            <div>
              <div className="flex items-center gap-2">
                <motion.div
                  className="text-2xl font-playfair "
                  whileHover={{ letterSpacing: '1px' }}
                >
                  EliteValet
                </motion.div>
                {type && (
                  <motion.span
                    className="px-2 py-1 text-xs rounded-full bg-accents/20 text-foreground"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    {type}
                  </motion.span>
                )}
              </div>
              <motion.div
                className="text-xs tracking-wider text-gray-500 transition-colors duration-300 group-hover:text-foreground/80"
                whileHover={{ x: 5 }}
              >
                Your Parking Partner
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
