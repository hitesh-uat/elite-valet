'use client'
import { BookingStatus } from '@elitevalet/network/src/gql/generated'
import { IconClock, IconHistory } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Tab, TabPanel, Tabs } from '../molecules/Tabs'
import { ShowCustomerBookings } from '../organisms/ShowCustomerBookings'

export const ListCustomerBookings = () => {
  const [value, setValue] = useState<0 | 1>(1)

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Tabs
        value={value}
        onChange={(e, v) => setValue(v)}
        aria-label="bookings"
        className="bg-blue-50 rounded-xl p-1 shadow-inner"
      >
        <Tab
          label={
            <div className="flex items-center gap-2">
              <IconHistory className="w-5 h-5" />
              <span>Past Bookings</span>
            </div>
          }
          className="px-6 py-3 rounded-lg data-[selected=true]:bg-blue-600 data-[selected=true]:text-white transition-colors"
        />
        <Tab
          label={
            <div className="flex items-center gap-2">
              <IconClock className="w-5 h-5" />
              <span>Ongoing</span>
            </div>
          }
          className="px-6 py-3 rounded-lg data-[selected=true]:bg-blue-600 data-[selected=true]:text-white transition-colors"
        />
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6"
      >
        <TabPanel value={value} index={0}>
          <ShowCustomerBookings
            statuses={[BookingStatus.CheckedOut, BookingStatus.ValetReturned]}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ShowCustomerBookings
            statuses={[
              BookingStatus.Booked,
              BookingStatus.ValetPickedUp,
              BookingStatus.ValetAssignedForCheckIn,
              BookingStatus.CheckedIn,
              BookingStatus.ValetAssignedForCheckOut,
            ]}
          />
        </TabPanel>
      </motion.div>
    </div>
  )
}
