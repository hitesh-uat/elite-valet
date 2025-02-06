'use client'
import { useMutation } from '@apollo/client'
import {
  FormProviderCreateGarage,
  FormTypeCreateGarage,
} from '@elitevalet/forms/src/createGarage'
import {
  CreateGarageDocument,
  namedOperations,
} from '@elitevalet/network/src/gql/generated'
import { initialViewState } from '@elitevalet/util/constants'
import { useCloudinaryUpload } from '@elitevalet/util/hooks/cloudinary'
import { ViewState } from '@elitevalet/util/types'
import { Controller, useFormContext } from 'react-hook-form'
import { Button } from '../atoms/Button'
import { Form } from '../atoms/Form'
import { HtmlInput } from '../atoms/HtmlInput'
import { HtmlLabel } from '../atoms/HtmlLabel'
import { HtmlTextArea } from '../atoms/HtmlTextArea'
import { ToastContainer, toast } from '../molecules/Toast'
import { AddSlots, GarageMapMarker } from '../organisms/CreateGarageComponents'
import { ImagePreview } from '../organisms/ImagePreview'
import { Map } from '../organisms/map/Map'
import { Panel } from '../organisms/map/Panel'
import { SearchPlaceBox } from '../organisms/map/SearchPlacesBox'
import { CenterOfMap, DefaultZoomControls } from '../organisms/map/ZoomControls'

const CreateGarageContent = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
    resetField,
    watch,
  } = useFormContext<FormTypeCreateGarage>()

  const { images } = watch()

  const { uploading, upload } = useCloudinaryUpload()

  const [createGarage, { data, error, loading }] = useMutation(
    CreateGarageDocument,
    {
      refetchQueries: [namedOperations.Query.Garages],
      onCompleted: () => {
        reset()
        toast('Garage created successfully.')
      },
      onError(error, clientOptions) {
        toast('Action failed.')
      },
    },
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  Create New Garage
                </h2>
                <p className="mt-1 text-gray-600">
                  Fill in the details to list your parking space
                </p>
              </div>

              <Form
                onSubmit={handleSubmit(
                  async ({
                    images,
                    description,
                    displayName,
                    location,
                    slotTypes,
                  }) => {
                    if (!images) {
                      return toast('Please upload images')
                    }
                    const uploadedImages = await upload(images)

                    const result = await createGarage({
                      variables: {
                        createGarageInput: {
                          Address: location,
                          images: uploadedImages,
                          Slots: slotTypes,
                          description,
                          displayName,
                        },
                      },
                    })
                  },
                )}
                className="space-y-6"
              >
                <div>
                  <HtmlLabel
                    error={errors.displayName?.message}
                    title="Display Name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <HtmlInput
                      {...register('displayName')}
                      placeholder="Garage name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </HtmlLabel>
                </div>

                <div>
                  <HtmlLabel
                    title="Description"
                    error={errors.description?.message}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <HtmlTextArea
                      cols={5}
                      {...register('description')}
                      placeholder="Describe your garage features and amenities..."
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </HtmlLabel>
                </div>

                <div>
                  <HtmlLabel
                    title="Address"
                    error={errors.location?.address?.message}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <HtmlTextArea
                      cols={5}
                      {...register('location.address')}
                      placeholder="Enter full address..."
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </HtmlLabel>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Photos
                  </label>
                  <ImagePreview
                    srcs={images}
                    clearImage={() => resetField('images')}
                    className="border-2 border-dashed border-gray-300 rounded-lg p-4"
                  >
                    <Controller
                      control={control}
                      name={`images`}
                      render={({ field }) => (
                        <div className="flex justify-center px-6 pt-5 pb-6 border-dotted border-2 border-gray-300 rounded-md">
                          <div className="text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="mt-1 text-sm text-gray-600">
                              <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">
                                <span>Upload images</span>
                                <HtmlInput
                                  type="file"
                                  accept="image/*"
                                  multiple={true}
                                  onChange={(e) =>
                                    field.onChange(e?.target?.files)
                                  }
                                  className="sr-only"
                                />
                              </label>
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    />
                  </ImagePreview>
                </div>

                <div className="pt-4">
                  <AddSlots />
                </div>

                <div className="pt-6">
                  <Button
                    loading={uploading || loading}
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
                  >
                    Create Garage
                  </Button>
                </div>
              </Form>
            </div>

            <div className="h-[600px] rounded-xl overflow-hidden shadow-lg">
              <Map
                initialViewState={initialViewState}
                onLoad={(e) => {
                  const { lat, lng } = e.target.getCenter()
                  setValue('location.lat', lat)
                  setValue('location.lng', lng)
                }}
              >
                <GarageMapMarker />
                <Panel position="left-top">
                  <SearchPlaceBox
                    onLocationChange={(location: ViewState) => {
                      setValue('location.lat', location.latitude)
                      setValue('location.lng', location.longitude)
                    }}
                    className="w-80"
                  />
                  <DefaultZoomControls>
                    <CenterOfMap
                      onClick={(latLng) => {
                        const lat = parseFloat(latLng.lat.toFixed(8))
                        const lng = parseFloat(latLng.lng.toFixed(8))

                        setValue('location.lat', lat, {
                          shouldValidate: true,
                        })
                        setValue('location.lng', lng, {
                          shouldValidate: true,
                        })
                      }}
                    />
                  </DefaultZoomControls>
                </Panel>
              </Map>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export const CreateGarage = () => {
  return (
    <FormProviderCreateGarage>
      <CreateGarageContent />
    </FormProviderCreateGarage>
  )
}
