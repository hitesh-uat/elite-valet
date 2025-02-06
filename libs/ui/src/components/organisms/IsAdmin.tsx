'use client'
import { useQuery } from '@apollo/client'
import { AdminMeDocument } from '@elitevalet/network/src/gql/generated'
import { IconLifebuoy } from '@tabler/icons-react'
import { ReactNode } from 'react'
import { AlertSection } from '../molecules/AlertSection'
import { LoaderPanel } from '../molecules/Loader'

export const IsAdmin = ({ children }: { children: ReactNode }) => {
  const { data, loading } = useQuery(AdminMeDocument)

  if (loading) {
    return <LoaderPanel text="Loading company..." />
  }

  if (!data?.adminMe?.uid)
    return (
      <AlertSection>
        <div className="max-w-2xl mx-auto mt-12 p-6 bg-yellow-50 rounded-lg shadow-sm pb-16">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-yellow-100 p-4 rounded-full">
                <IconLifebuoy className="w-12 h-12 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Admin Authorization Required
              </h2>
              <p className="text-gray-600">
                Your account is not currently has admin privileges. Please
                contact your company administrator to get valet privileges.
              </p>
            </div>
          </div>
        </div>
      </AlertSection>
    )

  return <>{children}</>
}
