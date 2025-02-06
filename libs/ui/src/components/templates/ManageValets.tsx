'use client'
import { motion } from 'framer-motion'
import { AddValet } from '../organisms/AddValet'
import { ListValets } from '../organisms/ListValets'

export const ManageValets = () => {
  return (
    <div className="min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-green-600 bg-clip-text text-transparent">
            Manage Valet Team
          </h1>
          <AddValet />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ListValets />
        </motion.div>
      </motion.div>
    </div>
  )
}
