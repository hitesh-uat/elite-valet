import { useQuery } from '@apollo/client'
import {
  GaragesDocument,
  MyCompanyQuery,
} from '@elitevalet/network/src/gql/generated'
import { Button } from '@elitevalet/ui/src/components/atoms/Button'
import { useTakeSkip } from '@elitevalet/util/hooks/pagination'
import { IconPlus } from '@tabler/icons-react'
import Link from 'next/link'
import { HtmlInput } from '../atoms/HtmlInput'
import { GarageCard } from './GarageCard'
import { ShowData } from './ShowData'

export const ListGarages = ({
  companyId,
}: {
  companyId: MyCompanyQuery['myCompany']['id']
}) => {
  const { setSkip, setTake, skip, take } = useTakeSkip()
  const { data, loading, error } = useQuery(GaragesDocument, {
    variables: {
      skip,
      take,
      where: { companyId: { equals: companyId } },
    },
  })

  return (
    <ShowData
      error={error?.message}
      loading={loading}
      pagination={{
        skip,
        take,
        resultCount: data?.garages.length,
        totalCount: data?.garagesCount.count,
        setSkip,
        setTake,
      }}
      childrenClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4"
      title={
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Garages
            </h1>
            <div className="flex flex-1 w-full md:w-auto max-w-xl">
              <div className="relative flex items-center w-full">
                <svg
                  className="absolute left-3 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <HtmlInput
                  type="text"
                  placeholder="Search garages..."
                  className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <Button
                  variant="contained"
                  className="ml-2 rounded-full px-6 py-2.5 shadow-sm hover:shadow-md transition-shadow"
                >
                  Search
                </Button>
              </div>
            </div>
            <Link
              href="/new-garage"
              className="flex items-center gap-2 px-6 py-2.5 bg-primary-200 rounded-full hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
            >
              <IconPlus className="w-5 h-5" />
              Add Garage
            </Link>
          </div>
        </div>
      }
    >
      {data?.garages.map((garage) => (
        <GarageCard key={garage.id} garage={garage} />
      ))}
    </ShowData>
  )
}
