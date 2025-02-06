import { IsLoggedIn } from '@elitevalet/ui/src/components/organisms/IsLoggedIn'
import { ListCustomerBookings } from '@elitevalet/ui/src/components/templates/ListCustomerBookings'

export default function Page() {
  return (
    <IsLoggedIn>
      <ListCustomerBookings />
    </IsLoggedIn>
  )
}
