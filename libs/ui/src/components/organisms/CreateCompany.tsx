'use client'
import { useMutation } from '@apollo/client'
import { useFormCreateCompany } from '@elitevalet/forms/src/createCompany'
import {
  CreateCompanyDocument,
  namedOperations,
} from '@elitevalet/network/src/gql/generated'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Button } from '../atoms/Button'
import { Dialog } from '../atoms/Dialog'
import { Form } from '../atoms/Form'
import { HtmlInput } from '../atoms/HtmlInput'
import { HtmlLabel } from '../atoms/HtmlLabel'
import { HtmlTextArea } from '../atoms/HtmlTextArea'

export const CreateCompany = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useFormCreateCompany()

  const session = useSession()
  const uid = session.data?.user?.uid
  const managerName = session.data?.user?.name

  const [createCompany, { loading, data }] = useMutation(CreateCompanyDocument)

  useEffect(() => {
    if (uid) {
      setValue('managerId', uid)
    }
    setValue('managerName', managerName)
  }, [uid])

  const [open, setOpen] = useState(false)

  // Close dialog after successful submission
  useEffect(() => {
    if (data) {
      setOpen(false)
    }
  }, [data])

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Create Company</Button>
      <Dialog open={open} setOpen={setOpen} title="Create company">
        <Form
          onSubmit={handleSubmit(async (data) => {
            await createCompany({
              variables: {
                createCompanyInput: data,
              },
              awaitRefetchQueries: true,
              refetchQueries: [namedOperations.Query.myCompany],
            })
          })}
        >
          <div className="space-y-4">
            <HtmlLabel title="Company name" error={errors.displayName?.message}>
              <HtmlInput
                placeholder="Company name"
                {...register('displayName')}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </HtmlLabel>

            <HtmlLabel title="Description" error={errors.description?.message}>
              <HtmlTextArea
                placeholder="Describe your parking company"
                {...register('description')}
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </HtmlLabel>

            <HtmlLabel title="Manager ID" error={errors.managerId?.message}>
              <HtmlInput
                placeholder="Manager ID"
                {...register('managerId')}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
              />
            </HtmlLabel>

            <HtmlLabel title="Manager name" error={errors.managerName?.message}>
              <HtmlInput
                placeholder="Manager name"
                {...register('managerName')}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </HtmlLabel>

            <Button
              loading={loading}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-primary-900"
            >
              Create Company
            </Button>
          </div>
        </Form>
      </Dialog>
    </div>
  )
}
