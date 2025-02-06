'use client'
import { IsLoggedIn } from '@elitevalet/ui/src/components/organisms/IsLoggedIn'
import { IsManager } from '@elitevalet/ui/src/components/organisms/IsManager'
import { ListGarages } from '@elitevalet/ui/src/components/organisms/ListGarages'

export default function Home() {
  return (
    <IsLoggedIn>
      <IsManager>
        {(companyId) => <ListGarages companyId={companyId} />}
      </IsManager>
    </IsLoggedIn>
  )
}
