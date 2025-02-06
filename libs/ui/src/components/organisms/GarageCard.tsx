import { GaragesQuery } from '@elitevalet/network/src/gql/generated'
import { IconLocation } from '@tabler/icons-react'
import Link from 'next/link'
import { IconTypes } from '../molecules/IconTypes'
import { AutoImageChanger } from './AutoImageChanger'
import { CreateManySlotsDialog } from './CreateManySlotsDialog'

export interface IGarageCardProps {
  garage: GaragesQuery['garages'][number]
}

export const GarageCard = ({ garage }: IGarageCardProps) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <AutoImageChanger
          images={garage.images || []}
          durationPerImage={5000}
          // className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium shadow-sm">
          {garage.slotCounts.reduce((sum, st) => sum + (st.count ?? 0), 0)}{' '}
          slots
        </span>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">
            {garage.displayName}
          </h3>
          <Link
            href={{
              pathname: 'bookings',
              query: { garageId: garage.id },
            }}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm italic pt-2 flex items-center gap-1 transition-colors"
          >
            View Bookings
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {garage.description}
        </p>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <svg
            className="w-5 h-5 mr-2 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <IconLocation />
          </svg>
          <span className="truncate">{garage.address?.address}</span>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex gap-2 flex-nowrap">
              {garage.slotCounts.map((slotType) => (
                <div
                  key={slotType.type}
                  className="flex items-center px-3 py-1.5 bg-blue-50 rounded-lg text-sm font-medium text-blue-700 whitespace-nowrap flex-shrink-0"
                  title={`${slotType.type} slots`}
                >
                  <span className="mr-1.5">{IconTypes[slotType.type]}</span>
                  {slotType.count}
                </div>
              ))}
            </div>
            <CreateManySlotsDialog
              garageId={garage.id}
              className="ml-2 bg-primary-100-100 hover:bg-prima-200 rounded-lg p-2 transition-colors flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
