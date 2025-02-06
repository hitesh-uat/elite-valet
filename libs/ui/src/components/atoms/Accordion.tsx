import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { IconChevronDown } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useRef } from 'react'

export interface IAccordionProps {
  title: ReactNode
  children: ReactNode
  className?: string
  defaultOpen?: boolean
}

const chevronVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
}

const panelVariants = {
  open: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
}

export const Accordion = ({
  title,
  children,
  className,
  defaultOpen = false,
}: IAccordionProps) => {
  const panelRef = useRef<HTMLDivElement>(null)

  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <div
          className={`border rounded-xl shadow-sm ${
            open ? 'border-primary-200 bg-gray-50' : 'border-transparent'
          } transition-colors duration-200 ${className}`}
        >
          <DisclosureButton
            className={`flex justify-between items-center w-full px-4 py-3 
              text-left hover:bg-primary-50/50 focus:outline-none focus-visible:ring-2 
              focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-[11px]
              transition-all duration-200 ${open ? 'bg-primary-50' : ''}`}
          >
            <motion.span
              initial={false}
              className={`text-base ${
                open
                  ? 'font-semibold text-gray-900'
                  : 'font-medium text-gray-700'
              }`}
            >
              {title}
            </motion.span>

            <motion.div
              initial={false}
              animate={open ? 'open' : 'closed'}
              variants={chevronVariants}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <IconChevronDown className="w-5 h-5 text-gray-500" />
            </motion.div>
          </DisclosureButton>

          <AnimatePresence initial={false}>
            {open && (
              <DisclosurePanel
                static
                as={motion.div}
                initial="closed"
                animate="open"
                exit="closed"
                variants={panelVariants}
                className="overflow-hidden"
                ref={panelRef}
              >
                <div className="px-4 pb-4 pt-2 text-gray-600 text-base">
                  {children}
                </div>
              </DisclosurePanel>
            )}
          </AnimatePresence>
        </div>
      )}
    </Disclosure>
  )
}
