import { ManageValets } from '@elitevalet/ui/src/components/templates/ManageValets'
import { IsLoggedIn } from '@elitevalet/ui/src/components/organisms/IsLoggedIn'

export default function Page() {
  return (
    <IsLoggedIn>
      <ManageValets />
    </IsLoggedIn>
  )
}
