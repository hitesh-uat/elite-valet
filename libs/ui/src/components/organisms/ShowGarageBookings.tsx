import { useQuery } from '@apollo/client'
import {
  BookingStatus,
  BookingsForGarageDocument,
  QueryMode,
} from '@elitevalet/network/src/gql/generated'
import { useTakeSkip } from '@elitevalet/util/hooks/pagination'
import { IconSearch } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckInOutButton } from './CheckInOutButtons'
import { ManageBookingCard } from './ManageBookingCard'
import { ShowData } from './ShowData'

export const ShowGarageBookings = ({
  garageId,
  statuses,
  showCheckIn = false,
  showCheckOut = false,
}: {
  garageId: number
  statuses: BookingStatus[]
  showCheckIn?: boolean
  showCheckOut?: boolean
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const { take, setTake, skip, setSkip } = useTakeSkip()

  const { data, loading, error } = useQuery(BookingsForGarageDocument, {
    variables: {
      skip,
      take,
      where: {
        status: { in: statuses },
        Slot: {
          is: {
            garageId: { equals: garageId },
          },
        },
        ...(searchTerm && {
          vehicleNumber: {
            contains: searchTerm,
            mode: QueryMode.Insensitive,
          },
        }),
      },
    },
  })

  return (
    <div className="mt-4">
      <div className="flex justify-center mb-8">
        <div className="flex items-center w-full max-w-2xl gap-3 p-2 transition-all duration-300 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-400 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-200">
          <IconSearch className="ml-2 text-gray-400" />
          <input
            placeholder="Search by vehicle number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 bg-transparent outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      <ShowData
        loading={loading}
        childrenClassName="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-3"
        pagination={{
          skip,
          take,
          resultCount: data?.bookingsForGarage.length,
          totalCount: data?.bookingsCount.count,
          setSkip,
          setTake,
        }}
      >
        {data?.bookingsForGarage.map((booking) => (
          <motion.div
            key={booking.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <ManageBookingCard booking={booking} />

            {(showCheckIn || showCheckOut) && (
              <div className="p-4 bg-white border-t">
                {showCheckIn && (
                  <CheckInOutButton
                    status={BookingStatus.CheckedIn}
                    buttonText="Check In"
                    bookingId={booking.id}
                    className="w-full py-2 text-black transition-colors bg-green-400 rounded-lg hover:bg-green-500"
                  />
                )}
                {showCheckOut && (
                  <CheckInOutButton
                    status={BookingStatus.CheckedOut}
                    buttonText="Check Out"
                    bookingId={booking.id}
                    className="w-full py-2 text-black transition-colors bg-green-400 rounded-lg hover:bg-green-500"
                  />
                )}
              </div>
            )}
          </motion.div>
        ))}
      </ShowData>
    </div>
  )
}
