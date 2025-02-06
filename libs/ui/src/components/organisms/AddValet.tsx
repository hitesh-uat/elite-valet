import { useMutation } from '@apollo/client'
import { useFormCreateValet } from '@elitevalet/forms/src/createValet'
import {
  CreateValetDocument,
  namedOperations,
} from '@elitevalet/network/src/gql/generated'
import { useCloudinaryUpload } from '@elitevalet/util/hooks/cloudinary'
import { IconPlus } from '@tabler/icons-react'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Button } from '../atoms/Button'
import { Dialog } from '../atoms/Dialog'
import { Form } from '../atoms/Form'
import { HtmlInput } from '../atoms/HtmlInput'
import { HtmlLabel } from '../atoms/HtmlLabel'
import { toast } from '../molecules/Toast'
import { ImagePreview } from './ImagePreview'

export const AddValet = () => {
  const {
    register,
    resetField,
    control,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useFormCreateValet()
  const [open, setOpen] = useState(false)
  const { image } = watch()

  const [createValet, { data, loading, error }] = useMutation(
    CreateValetDocument,
    {
      onCompleted() {
        console.log('1, error', error)
        toast('Valet created.🎉')
        reset()
        setOpen(false)
      },
      onError(error) {
        toast(error.message, { type: 'error' })
      },
      awaitRefetchQueries: true,
      refetchQueries: [namedOperations.Query.companyValets],
    },
  )

  const { uploading, upload } = useCloudinaryUpload()

  console.log('2, error', error)

  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2"
      >
        <IconPlus className="w-5 h-5" />
        Add New Valet
      </Button>

      <Dialog
        widthClassName="max-w-2xl"
        open={open}
        setOpen={setOpen}
        title="Register New Valet"
      >
        <Form
          onSubmit={handleSubmit(async ({ image, ...data }) => {
            try {
              const images = await upload(image)
              await createValet({
                variables: {
                  createValetInput: {
                    ...data,
                    image: images[0],
                  },
                },
              })
            } catch (error) {
              toast(
                error instanceof Error
                  ? error.message
                  : 'Failed to create valet',
                { type: 'error' },
              )
            }
          })}
          className="space-y-6" // Added vertical spacing
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <HtmlLabel
                title="Valet UID"
                error={errors.uid?.message}
                className="space-y-1"
              >
                <HtmlInput
                  placeholder="Enter unique valet ID"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg hover:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  {...register('uid')}
                />
              </HtmlLabel>
              <HtmlLabel
                title="Display Name"
                error={errors.displayName?.message}
                className="space-y-1"
              >
                <HtmlInput
                  placeholder="Enter valet's full name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg hover:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  {...register('displayName')}
                />
              </HtmlLabel>
              <HtmlLabel
                title="License ID"
                error={errors.licenceID?.message}
                className="space-y-1"
              >
                <HtmlInput
                  placeholder="Enter license number"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg hover:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  {...register('licenceID')}
                />
              </HtmlLabel>
            </div>
            {/* Right Side */}
            <div className="space-y-2">
              <HtmlLabel
                title="Valet Photos"
                error={errors.image?.message?.toString()}
                className="block text-sm font-medium text-gray-700"
              >
                <ImagePreview
                  srcs={image}
                  clearImage={() => resetField('image')}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-4"
                >
                  <Controller
                    control={control}
                    name="image"
                    rules={{ required: 'At least one image is required' }}
                    render={({ field, fieldState }) => (
                      <div className="flex justify-center px-6 pt-5 pb-6 border-dotted border-2 border-gray-300 rounded-md">
                        <div className="text-center">
                          {/* ... svg remains same */}
                          <div className="mt-1 text-sm text-gray-600">
                            <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">
                              <span>Upload images</span>
                              <HtmlInput
                                type="file"
                                accept="image/*"
                                multiple={true}
                                required
                                onChange={(e) => {
                                  if (!e.target.files?.length) return
                                  field.onChange(e.target.files)
                                }}
                                className="sr-only"
                              />
                            </label>
                            {fieldState.error && (
                              <p className="text-red-500 text-xs mt-1">
                                {fieldState.error.message}
                              </p>
                            )}
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  />
                </ImagePreview>
              </HtmlLabel>
            </div>
          </div>
          <Button
            loading={uploading || loading}
            type="submit"
            className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg font-semibold"
            disabled={uploading || loading}
          >
            {uploading ? 'Uploading Image...' : 'Register Valet'}
          </Button>
        </Form>
      </Dialog>
    </div>
  )
}
