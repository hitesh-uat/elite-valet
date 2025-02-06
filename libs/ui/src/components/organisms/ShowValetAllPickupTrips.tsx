import { useQuery } from '@apollo/client'
import {
  BookingStatus,
  ValetPickupsDocument,
} from '@elitevalet/network/src/gql/generated'
import { useTakeSkip } from '@elitevalet/util/hooks/pagination'
import { AssignValetButton } from './AssignValetButton'
import { ShowData } from './ShowData'
import { ValetTripCard } from './ValetTripCard'

export const ShowValetAllPickupTrips = () => {
  const { loading, data } = useQuery(ValetPickupsDocument)
  const { setSkip, setTake, skip, take } = useTakeSkip()

  return (
    <ShowData
      loading={loading}
      childrenClassName="grid grid-cols-2 md:grid-cols-3 gap-6"
      pagination={{
        setSkip,
        setTake,
        skip,
        take,
        resultCount: data?.valetPickups.length || 0,
        totalCount: data?.valetPickupsTotal || 0,
      }}
    >
      {data?.valetPickups.map((booking) => (
        <ValetTripCard
          key={booking.id}
          booking={{
            id: booking.id,
            time: booking.startTime,
          }}
          start={{
            lat: booking.valetAssignment?.pickupLat,
            lng: booking.valetAssignment?.pickupLng,
          }}
          end={booking.slot.garage.address}
        >
          <AssignValetButton
            bookingId={booking.id}
            status={BookingStatus.ValetAssignedForCheckIn}
          >
            Accept
          </AssignValetButton>
        </ValetTripCard>
      ))}
    </ShowData>
  )
}
