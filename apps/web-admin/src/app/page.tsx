import { IsAdmin } from '@elitevalet/ui/src/components/organisms/IsAdmin'
import { IsLoggedIn } from '@elitevalet/ui/src/components/organisms/IsLoggedIn'
import { AdminHome } from '@elitevalet/ui/src/components/templates/AdminHome'

export default function Home() {
  return (
    <main>
      <IsLoggedIn>
        <IsAdmin>
          <AdminHome />
        </IsAdmin>
      </IsLoggedIn>
    </main>
  )
}
