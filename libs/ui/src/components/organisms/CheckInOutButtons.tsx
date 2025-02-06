import {
  BookingStatus,
  CreateBookingTimelineDocument,
  namedOperations,
} from '@elitevalet/network/src/gql/generated'
import { useMutation } from '@apollo/client'
import { Button } from '../atoms/Button'

export const CheckInOutButton = ({
  bookingId,
  buttonText,
  status,
  className,
}: {
  bookingId: number
  status: BookingStatus
  buttonText: string
  className?: string
}) => {
  const [checkIn, { data, loading }] = useMutation(
    CreateBookingTimelineDocument,
  )
  return (
    <Button
      loading={loading}
      onClick={() => {
        checkIn({
          variables: {
            createBookingTimelineInput: {
              bookingId,
              status,
            },
          },
          awaitRefetchQueries: true,
          refetchQueries: [namedOperations.Query.BookingsForGarage],
        })
      }}
      color="white"
      className={`mt-1 ${className || ''}`}
      fullWidth
    >
      {buttonText}
    </Button>
  )
}
