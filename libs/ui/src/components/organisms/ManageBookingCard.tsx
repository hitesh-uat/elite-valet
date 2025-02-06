import { BookingsForGarageQuery } from '@elitevalet/network/src/gql/generated'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import { Accordion } from '../atoms/Accordion'
import { Reveal } from '../molecules/Reveal'
import { StartEndDateCard } from './DateCard'

export interface IManageBookingCardProps {
  booking: BookingsForGarageQuery['bookingsForGarage'][0]
}

export const ManageBookingCard = ({ booking }: IManageBookingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 space-y-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Header Section */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {booking.vehicleNumber}
          </h3>
          <p className="mt-1 text-sm text-gray-500">Vehicle Number</p>
        </div>
        <div className="px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800">
          Slot: {booking.slot.displayName}
        </div>
      </div>

      {/* Date Section */}
      <div className="p-4 rounded-lg">
        <StartEndDateCard
          startTime={booking.startTime}
          endTime={booking.endTime}
        />
      </div>

      {/* Access Code Section */}
      <div className="p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Access Code</span>
          <Reveal
            showIntruction={false}
            secret={booking.passcode || ''}
            className="font-mono font-semibold text-primary-600"
          />
        </div>
      </div>

      {/* Status Accordion */}
      <Accordion
        defaultOpen={false}
        title={
          <div className="flex items-center justify-between w-full py-3 transition-colors  rounded-lg hover:bg-primary-200">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">
                Current Status:
              </span>
              <span className="px-2 py-1 text-sm font-semibold rounded-full bg-primary-50 text-primary-700">
                {booking.status.split('_').join(' ')}
              </span>
            </div>
          </div>
        }
      >
        <div className="mt-4 space-y-4">
          {booking.bookingTimeline.map((timeline, index) => (
            <div
              key={timeline.timestamp}
              className="relative pl-6 border-l-2 border-gray-200"
            >
              {index < booking.bookingTimeline.length - 1 && (
                <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-[7px] top-4" />
              )}
              <div className="pb-4">
                <p className="text-sm font-medium text-gray-900">
                  {timeline.status.split('_').join(' ')}
                </p>
                <time className="text-sm text-gray-500">
                  {format(new Date(timeline.timestamp), 'PPp')}
                </time>
              </div>
            </div>
          ))}
        </div>
      </Accordion>
    </motion.div>
  )
}
