'use client'
import { IsLoggedIn } from '@elitevalet/ui/src/components/organisms/IsLoggedIn'
import { IsValet } from '@elitevalet/ui/src/components/organisms/IsValet'
import { ValetHome } from '@elitevalet/ui/src/components/templates/ValetHome'

export default function Home() {
  return (
    <main>
      <IsLoggedIn>
        {(uid) => (
          <IsValet uid={uid}>
            <ValetHome />
          </IsValet>
        )}
      </IsLoggedIn>
    </main>
  )
}
