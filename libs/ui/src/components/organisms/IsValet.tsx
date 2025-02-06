'use client'
import { useQuery } from '@apollo/client'
import { ValetMeDocument } from '@elitevalet/network/src/gql/generated'
import {
  IconClipboard,
  IconClipboardCheck,
  IconLifebuoy,
} from '@tabler/icons-react'
import { ReactNode, useEffect, useState } from 'react'
import { Button } from '../atoms/Button'
import { LoaderPanel } from '../molecules/Loader'

type RenderPropChild = (id: number) => ReactNode

export const IsValet = ({
  children,
  uid,
}: {
  children: RenderPropChild | ReactNode
  uid: string
}) => {
  const { data, loading } = useQuery(ValetMeDocument)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [copied])

  if (loading) {
    return <LoaderPanel text="Loading company..." />
  }

  if (!data?.valetMe?.companyId)
    return (
      <div className="max-w-2xl mx-auto mt-12 p-6 bg-yellow-50 rounded-lg shadow-sm">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-yellow-100 p-4 rounded-full">
              <IconLifebuoy className="w-12 h-12 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Valet Authorization Required
            </h2>
            <p className="text-gray-600">
              Your account is not currently associated with a valet service.
              Please contact your company administrator to get valet privileges.
            </p>
          </div>
          <div className="w-full space-y-4">
            <div className="p-3 bg-white rounded-md border border-yellow-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                  Your User ID:
                </span>
                <Button
                  variant="text"
                  size="none"
                  className="text-primary-600 hover:text-primary-700 text-sm transition-colors"
                  onClick={() => {
                    navigator.clipboard.writeText(uid)
                    setCopied(true)
                  }}
                >
                  {copied ? (
                    <IconClipboardCheck className="w-4 h-4 mr-1 text-green-600" />
                  ) : (
                    <IconClipboard className="w-4 h-4 mr-1" />
                  )}
                  {copied ? 'Copied!' : 'Copy ID'}
                </Button>
              </div>
              <code className="block mt-2 font-mono text-sm bg-primary-100 p-2 rounded">
                {uid}
              </code>
            </div>
          </div>
        </div>
      </div>
    )

  return (
    <>
      {typeof children === 'function'
        ? (children as RenderPropChild)(data.valetMe.companyId)
        : children}
    </>
  )
}
