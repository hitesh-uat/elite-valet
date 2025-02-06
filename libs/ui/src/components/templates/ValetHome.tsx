import { IconCar, IconTruck } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Tab, TabPanel, Tabs } from '../molecules/Tabs'
import { ShowValetAllDropTrips } from '../organisms/ShowValetAllDropTrips'
import { ShowValetAllPickupTrips } from '../organisms/ShowValetAllPickupTrips'

export const ValetHome = () => {
  const [value, setValue] = useState<0 | 1>(0)

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Tabs
        value={value}
        onChange={(e, v) => setValue(v)}
        aria-label="bookings"
        className="bg-green-50 rounded-xl p-1 shadow-sm"
      >
        <Tab
          label={
            <div className="flex items-center gap-2">
              <IconTruck className="w-5 h-5" />
              <span>Pickup</span>
            </div>
          }
          className="px-6 py-3 rounded-lg data-[selected=true]:bg-green-600 data-[selected=true]:text-white transition-colors"
        />
        <Tab
          label={
            <div className="flex items-center gap-2">
              <IconCar className="w-5 h-5" />
              <span>Drop</span>
            </div>
          }
          className="px-6 py-3 rounded-lg data-[selected=true]:bg-green-600 data-[selected=true]:text-white transition-colors"
        />
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6"
      >
        <TabPanel value={value} index={0}>
          <ShowValetAllPickupTrips />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ShowValetAllDropTrips />
        </TabPanel>
      </motion.div>
    </div>
  )
}
