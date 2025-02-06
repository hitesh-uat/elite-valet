import { FormTypeCreateGarage } from '@elitevalet/forms/src/createGarage'
import { SlotType } from '@elitevalet/network/src/gql/generated'
import { IconPlus, IconTrash } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import { Accordion } from '../atoms/Accordion'
import { Button } from '../atoms/Button'
import { HtmlInput } from '../atoms/HtmlInput'
import { HtmlLabel } from '../atoms/HtmlLabel'
import { HtmlSelect } from '../atoms/HtmlSelect'
import { ParkingIcon } from '../atoms/ParkingIcon'
import { Marker } from '../organisms/map/MapMarker'

// Animation configurations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export const AddSlots = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<FormTypeCreateGarage>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: `slotTypes`,
  })

  const { slotTypes } = useWatch<FormTypeCreateGarage>()
  return (
    <div className="space-y-6">
      {fields.map((item, slotIndex) => (
        <Accordion
          defaultOpen
          key={item.id}
          className="bg-gray-50 rounded-lg"
          title={
            <div className="font-semibold text-gray-700">
              {slotTypes?.[slotIndex]?.type} × {slotTypes?.[slotIndex]?.count}
            </div>
          }
        >
          <div className="p-4 space-y-4">
            <div className="flex justify-end">
              <Button
                size="sm"
                onClick={() => remove(slotIndex)}
                className="gap-1.5"
              >
                <IconTrash className="w-4 h-4" />
                Remove Slot Type
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <HtmlLabel
                title="Vehicle type"
                error={errors.slotTypes?.[slotIndex]?.type?.toString()}
                className="space-y-1"
              >
                <HtmlSelect
                  className="w-full px-3 py-2 border border-gray-300 rounded-md hover:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  {...register(`slotTypes.${slotIndex}.type`)}
                >
                  {Object.values(SlotType).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </HtmlSelect>
              </HtmlLabel>

              <HtmlLabel
                title="Price/hr (₹)"
                optional
                error={errors.slotTypes?.[slotIndex]?.pricePerHour?.message}
                className="space-y-1"
              >
                <HtmlInput
                  type="number"
                  placeholder="Enter price per hour"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md hover:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  {...register(`slotTypes.${slotIndex}.pricePerHour`, {
                    valueAsNumber: true,
                  })}
                />
              </HtmlLabel>

              <HtmlLabel
                title="Number of Slots"
                optional
                error={errors.slotTypes?.[slotIndex]?.count?.message}
                className="space-y-1"
              >
                <HtmlInput
                  type="number"
                  placeholder="Enter number of slots"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md hover:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  {...register(`slotTypes.${slotIndex}.count`, {
                    valueAsNumber: true,
                  })}
                />
              </HtmlLabel>

              {(
                ['length', 'width', 'height'] as Array<
                  'length' | 'width' | 'height'
                >
              ).map((dimension) => (
                <HtmlLabel
                  key={dimension}
                  title={`${
                    dimension.charAt(0).toUpperCase() + dimension.slice(1)
                  } (m)`}
                  optional
                  error={errors.slotTypes?.[slotIndex]?.[dimension]?.message}
                  className="space-y-1"
                >
                  <HtmlInput
                    type="number"
                    placeholder={`Enter ${dimension} in meters`}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md hover:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    {...register(`slotTypes.${slotIndex}.${dimension}`, {
                      valueAsNumber: true,
                    })}
                  />
                </HtmlLabel>
              ))}
            </div>
          </div>
        </Accordion>
      ))}

      <Button
        className="w-full py-3 border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-gray-50 transition-colors rounded-lg"
        variant="text"
        onClick={() => {
          append({
            length: 10,
            width: 10,
            height: 10,
            pricePerHour: 20,
            count: 5,
            type: SlotType.Car,
          })
        }}
      >
        <div className="flex items-center gap-2 text-sm font-medium">
          <IconPlus className="w-5 h-5" />
          Add Slot Type
        </div>
      </Button>
    </div>
  )
}

export const GarageMapMarker = () => {
  const { location } = useWatch<FormTypeCreateGarage>()
  const { setValue } = useFormContext<FormTypeCreateGarage>()

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileDrag={{ scale: 1.2 }}
    >
      <Marker
        pitchAlignment="auto"
        longitude={location?.lng || 0}
        latitude={location?.lat || 0}
        draggable
        onDragEnd={({ lngLat }) => {
          const { lat, lng } = lngLat
          setValue('location.lat', lat || 0)
          setValue('location.lng', lng || 0)
        }}
      >
        <ParkingIcon />
      </Marker>
    </motion.div>
  )
}

// Main Form Container
export const CreateGarageForm = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-gray-50 min-h-screen"
  >
    <motion.div
      className="space-y-6 bg-white p-6 rounded-xl shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Garage Details</h2>
      {children}
    </motion.div>

    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg sticky top-6 h-fit"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Location Setup</h2>
      {/* Your Map Component Here */}
      <div className="h-96 bg-gray-100 rounded-lg overflow-hidden">
        <GarageMapMarker />
      </div>
    </motion.div>
  </motion.div>
)
