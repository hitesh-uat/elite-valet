import { BookingsForCustomerQuery } from '@elitevalet/network/src/gql/generated'
import { format } from 'date-fns'
import { Accordion } from '../atoms/Accordion'
import { MapLink } from '../molecules/MapLink'
import { Reveal } from '../molecules/Reveal'
import { StaticMapSimple } from './map/StaticMapSimple'

export interface IBookingCardProps {
  booking: NonNullable<BookingsForCustomerQuery['bookingsForCustomer']>[number]
}

import {
  IconCalendarEvent,
  IconCar,
  IconHistory,
  IconLock,
  IconMapPin,
  IconParking,
} from '@tabler/icons-react'

export const CustomerBookingCard = ({ booking }: IBookingCardProps) => {
  const lat = booking.slot.garage.address?.lat || 0
  const lng = booking.slot.garage.address?.lng || 0

  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Date & Status Header */}
      <div className="p-4 bg-blue-50 border-b border-blue-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-600">
            <IconCalendarEvent className="w-5 h-5" />
            <span className="font-medium">
              {format(new Date(booking.startTime), 'PP')}
            </span>
          </div>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
            {booking.status.split('_').join(' ')}
          </span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Map Section */}
        <div className="relative h-48 rounded-lg overflow-hidden">
          <MapLink waypoints={[{ lat, lng }]}>
            <StaticMapSimple
              position={{ lat, lng }}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
            <div className="absolute bottom-2 left-2 text-white text-sm flex items-center gap-1">
              <IconMapPin className="w-4 h-4" />
              <span>
                {lat.toFixed(2)}, {lng.toFixed(2)}
              </span>
            </div>
          </MapLink>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <IconParking className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Slot</p>
              <p className="font-medium">{booking.slot.displayName}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <IconCar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Vehicle</p>
              <p className="font-medium">{booking.vehicleNumber}</p>
            </div>
          </div>
        </div>

        {/* Access Code */}
        <div className="p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IconLock className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Access Code</span>
            </div>
            <Reveal
              secret={booking.passcode || ''}
              className="text-blue-600 font-mono"
            />
          </div>
        </div>

        {/* Timeline Accordion */}
        <Accordion
          defaultOpen={false}
          title={
            <div className="flex items-center gap-2 text-blue-600">
              <IconHistory className="w-5 h-5" />
              <span className="font-medium">Booking Timeline</span>
            </div>
          }
          className="border-t pt-4 bg-white"
        >
          <div className="space-y-3 mt-3">
            {booking.bookingTimeline.map((timeline) => (
              <div
                key={timeline.timestamp}
                className="flex items-center justify-between p-2 bg-white rounded-lg border"
              >
                <span className="text-sm">{timeline.status}</span>
                <span className="text-sm text-gray-500">
                  {format(new Date(timeline.timestamp), 'PPp')}
                </span>
              </div>
            ))}
          </div>
        </Accordion>
      </div>
    </div>
  )
}
