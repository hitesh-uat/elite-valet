/* eslint-disable @next/next/no-img-element */
import { useMutation } from '@apollo/client'
import {
  CreateVerificationDocument,
  GaragesQuery,
  namedOperations,
} from '@elitevalet/network/src/gql/generated'
import { IconCheckbox, IconMapPinFilled, IconX } from '@tabler/icons-react'
import Image from 'next/image'
import { useState } from 'react'
import { IconTypes } from '../molecules/IconTypes'
import { MapLink } from '../molecules/MapLink'

export const GarageAdminCard = ({
  garage,
}: {
  garage: GaragesQuery['garages'][0]
}) => {
  const [checked, setChecked] = useState(garage.verification?.verified || false)
  const [createVerification, { loading }] = useMutation(
    CreateVerificationDocument,
    {
      awaitRefetchQueries: true,
      refetchQueries: [namedOperations.Query.Garages],
    },
  )

  const handleCheck = async () => {
    await createVerification({
      variables: {
        createVerificationInput: {
          garageId: garage.id,
          verified: !checked,
        },
      },
    })
    setChecked(!checked)
  }

  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden">
      {/* Verification Ribbon */}

      {checked && (
        <div className="absolute top-4 -right-10 w-40 bg-primary/90 text-center text-white text-sm font-semibold rotate-45 z-10 px-2 py-1 flex items-center justify-center gap-1">
          <IconCheckbox className="w-4 h-4" />
          Verified
        </div>
      )}
      {!checked && (
        <div className="absolute top-4 -right-10 w-40 bg-red-300 text-center text-white text-sm font-semibold rotate-45 z-10 px-2 py-1 flex items-center justify-center gap-1">
          <IconX className="w-4 h-4" />
          Unverified
        </div>
      )}

      {/* Garage Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={garage.images?.[0] || '/placeholder.jpg'}
          alt="Garage Photo"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-4">
        {/* Title and Address */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 truncate">
            {garage.displayName}
          </h2>
          {garage.address && (
            <MapLink
              waypoints={[garage.address]}
              className="mt-1 inline-block hover:underline underline-offset-4"
            >
              <span className="text-sm text-gray-600 flex items-center gap-1">
                <IconMapPinFilled className="w-4 h-4 text-primary" />
                <span className="truncate">{garage.address?.address}</span>
              </span>
            </MapLink>
          )}
        </div>

        {/* Verification Toggle */}
        <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
          <span className="text-sm font-medium text-gray-600">
            Verification Status
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              defaultChecked={checked}
              onChange={handleCheck}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 peer-checked:before:translate-x-5 before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:border-gray-300 before:border before:rounded-full before:h-5 before:w-5 before:transition-all dark:border-gray-600"></div>
          </label>
        </div>

        {/* Slot Types */}
        <div className="border-t border-gray-100 pt-4">
          <h3 className="text-sm font-medium text-gray-600 mb-3">
            Parking Slots
          </h3>
          {garage.slotCounts.length === 0 ? (
            <div className="text-center text-sm text-gray-500 py-2">
              No slots available
            </div>
          ) : (
            <div className="flex flex-wrap gap-3">
              {garage.slotCounts.map((slot, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-primary/5 px-3 py-2 rounded-lg"
                >
                  {IconTypes[slot.type]}
                  <span className="text-sm font-medium text-gray-700">
                    {slot.count}
                  </span>
                  <span className="text-xs text-gray-500 capitalize">
                    {slot.type}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
