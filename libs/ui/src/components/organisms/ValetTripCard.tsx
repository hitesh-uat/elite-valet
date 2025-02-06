import { isLatLng } from '@elitevalet/util'
import { useMapboxDirections } from '@elitevalet/util/hooks/directions'
import { LatLng } from '@elitevalet/util/types'
import {
  IconArrowRight,
  IconCalendarEvent,
  IconMapPin,
} from '@tabler/icons-react'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { AlertSection } from '../molecules/AlertSection'
import { MapLink } from '../molecules/MapLink'
import { StaticMapDirections } from './map/StaticMapDirections'

export interface IValetTripCardProps {
  start?: Partial<LatLng> | null
  end?: Partial<LatLng> | null
  booking: {
    id: number
    time: string
  }
  children?: ReactNode
}

export const ValetTripCard = ({
  start,
  end,
  booking,
  children,
}: IValetTripCardProps) => {
  const { data, distance, error, loading } = useMapboxDirections(start, end)

  if (!isLatLng(start) || !isLatLng(end)) {
    return (
      <AlertSection>
        <div>Something went wrong.</div>
        <div className="text-xs">Start end locations not set.</div>
      </AlertSection>
    )
  }

  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <MapLink waypoints={[start, end]}>
          <motion.div className="relative h-48" whileHover={{ scale: 1.02 }}>
            <StaticMapDirections
              start={start}
              end={end}
              coordinates={data}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-start justify-end">
              <div className="bg-white/90 p-2 rounded-full shadow-sm">
                <IconArrowRight className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </motion.div>
        </MapLink>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <IconCalendarEvent className="w-5 h-5 text-green-600" />
            <div>
              <div className="font-semibold text-green-800">
                {format(new Date(booking.time), 'p')}
              </div>
              <div className="text-xs text-green-600">
                {format(new Date(booking.time), 'PP')}
              </div>
            </div>
          </div>
          <div className="bg-green-100 px-3 py-1 rounded-full text-sm font-medium text-green-700">
            {((distance || 0) / 1000).toFixed(2)} km
          </div>
        </div>

        {children && <div className="space-y-4 border-t pt-4">{children}</div>}

        <div className="flex gap-2 items-center text-sm text-green-700">
          <IconMapPin className="w-5 h-5" />
          <span className="font-medium">Pickup Location:</span>
          <MapLink waypoints={[start, end]}>
            <span className="truncate underline">Google map</span>
          </MapLink>
        </div>

        {error && (
          <div className="bg-red-50 p-3 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}
      </div>
    </div>
  )
}
