import { IsLoggedIn } from '@elitevalet/ui/src/components/organisms/IsLoggedIn'
import { IsManager } from '@elitevalet/ui/src/components/organisms/IsManager'
import { ListGarageBookings } from '@elitevalet/ui/src/components/templates/ListGarageBookings'

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const garageId = Number(searchParams['garageId'])

  return (
    <main>
      <IsLoggedIn>
        <IsManager>
          <ListGarageBookings garageId={garageId} />
        </IsManager>
      </IsLoggedIn>
    </main>
  )
}
