'use client'
import { FormTypeBookSlot } from '@elitevalet/forms/src/bookSlot'
import {
  CreateBookingInput,
  SearchGaragesQuery,
} from '@elitevalet/network/src/gql/generated'
import { toLocalISOString } from '@elitevalet/util/date'
import { useTotalPrice } from '@elitevalet/util/hooks/price'
import { TotalPrice } from '@elitevalet/util/types'
import { Radio, RadioGroup } from '@headlessui/react'
import { loadStripe } from '@stripe/stripe-js'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { Controller, useFormContext, useWatch } from 'react-hook-form'
import { Badge } from '../atoms/Badge'
import { Button } from '../atoms/Button'
import { Form } from '../atoms/Form'
import { FormError } from '../atoms/FormError'
import { HtmlInput } from '../atoms/HtmlInput'
import { HtmlLabel } from '../atoms/HtmlLabel'
import { CostTitleValue } from '../molecules/CostTitleValue'
import { DateRangeBookingInfo } from '../molecules/DateRangeBookingInfo'
import { IconTypes } from '../molecules/IconTypes'
import { toast } from '../molecules/Toast'
import { AutoImageChanger } from './AutoImageChanger'
import { ManageValets } from './ManageValets'

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
}

export const BookSlotPopup = ({
  garage,
}: {
  garage: SearchGaragesQuery['searchGarages'][0]
}) => {
  const session = useSession()
  const uid = session.data?.user?.uid
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useFormContext<FormTypeBookSlot>()

  const { startTime, endTime, phoneNumber, type, valet, vehicleNumber } =
    useWatch<FormTypeBookSlot>()

  const pricePerHour = garage.availableSlots.find(
    (slot) => slot.type === type,
  )?.pricePerHour

  const totalPriceObj = useTotalPrice({
    pricePerHour,
  })

  const totalPrice =
    totalPriceObj.parkingCharge +
    totalPriceObj.valetChargeDropoff +
    totalPriceObj.valetChargePickup

  const [booking, setBooking] = useState(false)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="flex gap-4 p-6 text-left bg-white rounded-2xl shadow-xl backdrop-blur-sm ring-1 ring-black/5"
    >
      <Form
        className="w-full space-y-4"
        onSubmit={handleSubmit(async (data) => {
          console.log('data', data)
          if (!uid) {
            toast('You are not logged in.')
            return
          }
          const bookingData: CreateBookingInput = {
            phoneNumber: data.phoneNumber,
            customerId: uid,
            endTime: data.endTime,
            startTime: data.startTime,
            type: data.type,
            garageId: garage.id,
            vehicleNumber: data.vehicleNumber,
            totalPrice,
            pricePerHour,
            ...(data.valet?.pickupInfo && data.valet?.dropoffInfo
              ? {
                  valetAssignment: {
                    pickupLat: data.valet?.pickupInfo?.lat,
                    pickupLng: data.valet?.pickupInfo?.lng,
                    returnLat: data.valet?.dropoffInfo?.lat,
                    returnLng: data.valet?.dropoffInfo?.lng,
                  },
                }
              : null),
          }

          try {
            setBooking(true)
            // Create booking session
            const res = await createBookingSession(
              uid!,
              totalPriceObj,
              bookingData,
            )
          } catch (error) {
            toast('An error occurred while creating the booking session.')
          } finally {
            setBooking(false)
          }
        })}
      >
        <motion.div
          variants={fadeInVariants}
          className="flex items-start gap-2"
        >
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            {garage.displayName}
          </h2>
          {garage.verification?.verified ? (
            <Badge variant="green" size="sm" className="bg-primary-100">
              Verified
            </Badge>
          ) : (
            <Badge variant="gray" size="sm" className="bg-primary-100">
              Not verified
            </Badge>
          )}
        </motion.div>

        <motion.div variants={fadeInVariants} className="mb-4">
          <p className="text-lg text-gray-600">{garage.address?.address}</p>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          className="flex items-center justify-center"
        >
          <AutoImageChanger
            images={garage.images || []}
            durationPerImage={10000}
            aspectRatio="aspect-video"
            noAutoChange
          />
        </motion.div>

        <motion.div variants={fadeInVariants}>
          <DateRangeBookingInfo startTime={startTime} endTime={endTime} />
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          className="flex flex-wrap gap-4 mt-4"
        >
          <HtmlLabel title="Slot type" error={errors.type?.message}>
            <Controller
              name="type"
              control={control}
              render={({ field: { onChange, value } }) => (
                <RadioGroup
                  value={value || ''}
                  onChange={onChange}
                  className="grid grid-cols-2 gap-4 md:grid-cols-4"
                >
                  {garage.availableSlots.map((slot) => (
                    <Radio key={slot.type} value={slot.type}>
                      {({ checked }) => (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-4 transition-all cursor-pointer rounded-xl border-2 ${
                            checked
                              ? 'border-primary-500 bg-primary-50 shadow-md'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {slot.type ? (
                              <motion.div
                                animate={
                                  checked ? { scale: 1.1 } : { scale: 1 }
                                }
                              >
                                {IconTypes[slot.type]}
                              </motion.div>
                            ) : null}
                            <div>
                              <span className="text-xl font-bold text-primary-600">
                                ${slot.pricePerHour}
                              </span>
                              <span className="text-gray-500">/hr</span>
                            </div>
                          </div>
                          <div className="mt-2 text-sm font-medium text-gray-600">
                            {slot.count} spots available
                          </div>
                        </motion.div>
                      )}
                    </Radio>
                  ))}
                </RadioGroup>
              )}
            />
          </HtmlLabel>
        </motion.div>

        {!type && (
          <motion.div variants={fadeInVariants}>
            <FormError error="Please select a slot type" />
          </motion.div>
        )}

        <motion.div
          variants={fadeInVariants}
          className="grid gap-4 md:grid-cols-2"
        >
          <HtmlLabel title="Start time" error={errors.startTime?.message}>
            <HtmlInput
              type="datetime-local"
              min={toLocalISOString(new Date()).slice(0, 16)}
              {...register('startTime')}
              className="w-full p-3 transition-all border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </HtmlLabel>

          <HtmlLabel title="End time" error={errors.endTime?.message}>
            <HtmlInput
              type="datetime-local"
              min={toLocalISOString(new Date()).slice(0, 16)}
              {...register('endTime')}
              className="w-full p-3 transition-all border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </HtmlLabel>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          className="grid gap-4 md:grid-cols-2"
        >
          <HtmlLabel
            title="Vehicle number"
            error={errors.vehicleNumber?.message}
          >
            <HtmlInput
              placeholder="KA01AB1234"
              {...register('vehicleNumber')}
              className="p-3 transition-all border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </HtmlLabel>

          <HtmlLabel title="Phone number" error={errors.phoneNumber?.message}>
            <HtmlInput
              placeholder="+910000000000"
              {...register('phoneNumber')}
              className="p-3 transition-all border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </HtmlLabel>
        </motion.div>

        <motion.div variants={fadeInVariants}>
          <ManageValets garage={garage} />
        </motion.div>

        {totalPriceObj && (
          <motion.div
            variants={fadeInVariants}
            className="p-4 space-y-3 bg-primary-25 rounded-xl"
          >
            <CostTitleValue
              title="Parking"
              price={totalPriceObj.parkingCharge}
            />
            <CostTitleValue
              title="Valet Pickup"
              price={totalPriceObj.valetChargePickup}
            />
            <CostTitleValue
              title="Valet Dropoff"
              price={totalPriceObj.valetChargeDropoff}
            />
            <CostTitleValue title="Total" price={totalPrice} />
          </motion.div>
        )}

        <motion.div variants={fadeInVariants}>
          <Button
            loading={booking}
            type="submit"
            className="w-full py-4 mt-4 text-lg font-semibold transition-all hover:shadow-lg"
          >
            Book now
          </Button>
        </motion.div>
      </Form>
    </motion.div>
  )
}

export const createBookingSession = async (
  uid: string,
  totalPriceObj: TotalPrice,
  bookingData: CreateBookingInput,
) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        totalPriceObj,
        uid,
        bookingData,
      }),
    })
    const checkoutSession = await response.json()

    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

    const stripe = await loadStripe(publishableKey || '')
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.sessionId,
    })

    return result
  } catch (error) {
    console.error('Error creating booking session:', error)
    throw error
  }
}
