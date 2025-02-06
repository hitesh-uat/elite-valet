import { useQuery } from '@apollo/client'
import {
  BookingStatus,
  BookingsForCustomerDocument,
} from '@elitevalet/network/src/gql/generated'
import { useTakeSkip } from '@elitevalet/util/hooks/pagination'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import { CustomerBookingCard } from './CustomerBookingCard'
import { ShowData } from './ShowData'

export const ShowCustomerBookings = ({
  statuses,
}: {
  statuses: BookingStatus[]
}) => {
  const session = useSession()
  const uid = session.data?.user?.uid

  const { setSkip, setTake, skip, take } = useTakeSkip()

  const { loading, data, error } = useQuery(BookingsForCustomerDocument, {
    variables: {
      skip,
      take,
      where: {
        status: {
          in: statuses,
        },
      },
    },
  })

  return (
    <ShowData
      error={error?.message}
      loading={loading}
      childrenClassName="grid grid-cols-1 md:grid-cols-3 gap-6"
      pagination={{
        skip,
        take,
        resultCount: data?.bookingsForCustomer.length || 0,
        totalCount: data?.bookingsCount.count || 0,
        setSkip,
        setTake,
      }}
    >
      {data?.bookingsForCustomer.map((booking, index) => (
        <motion.div
          key={booking.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <CustomerBookingCard booking={booking} />
        </motion.div>
      ))}
    </ShowData>
  )
}
