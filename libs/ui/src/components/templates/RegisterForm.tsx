'use client'
import { useMutation } from '@apollo/client'
import { useFormRegister } from '@elitevalet/forms/src/register'
import { RegisterWithCredentialsDocument } from '@elitevalet/network/src/gql/generated'
import { Role } from '@elitevalet/util/types'
import { IconEye, IconEyeOff } from '@tabler/icons-react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../atoms/Button'
import { Form } from '../atoms/Form'
import { HtmlInput } from '../atoms/HtmlInput'
import { HtmlLabel } from '../atoms/HtmlLabel'
import { toast } from '../molecules/Toast'

export interface ISignupFormProps {
  className?: string
  role?: Role
}
export const RegisterForm = ({ className, role }: ISignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormRegister()
  const [showPassword, setShowPassword] = useState(false)

  const [registerWithCredentials, { loading, data }] = useMutation(
    RegisterWithCredentialsDocument,
  )

  return (
    <Form
      onSubmit={handleSubmit(async (formData) => {
        try {
          const { data, errors } = await registerWithCredentials({
            variables: {
              registerWithCredentialsInput: formData,
            },
          })

          if (errors) {
            toast(
              `Error creating user. Please try again. \n ${errors?.toString()}`,
            )
          }

          if (data) {
            toast.success(
              `User ${data.registerWithCredentials.uid} created. 🎉`,
            )
            signIn('credentials', {
              email: formData.email,
              password: formData.password,
              callbackUrl: '/',
            })
          }
        } catch (error: any) {
          toast(
            `Error creating user. Please try again. \n ${error?.message?.toString()}`,
          )
        }
      })}
      className="space-y-4"
    >
      {/* Name Input */}
      <div className="space-y-2">
        <HtmlLabel title="Display name" className="text-white/90">
          <HtmlInput
            {...register('name')}
            placeholder="Enter your name"
            className="w-full p-3 bg-white/5 border-2 border-white/20 text-white placeholder-white/60
                      focus:border-primary-300 focus:ring-2 focus:ring-primary-200/30"
            disabled={loading}
          />
        </HtmlLabel>
        {errors.name && (
          <p className="text-red-400 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Email Input */}
      <div className="space-y-2">
        <HtmlLabel
          title="Email"
          // error={errors.email?.message}
          className="text-white/90"
        >
          <HtmlInput
            {...register('email')}
            placeholder="Enter your email"
            className="w-full p-3 bg-white/5 border-2 border-white/20 text-white placeholder-white/60
                      focus:border-primary-300 focus:ring-2 focus:ring-primary-200/30"
            disabled={loading}
          />
        </HtmlLabel>
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Password Input */}
      <div className="space-y-2">
        <HtmlLabel title="Password" className="text-white/90">
          <div className="relative">
            <HtmlInput
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              placeholder="••••••••"
              className="w-full p-3 bg-white/5 border-2 border-white/20 text-white placeholder-white/60 pr-10
                        focus:border-primary-300 focus:ring-2 focus:ring-primary-200/30"
              disabled={loading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white/90"
            >
              {showPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
            </button>
          </div>
        </HtmlLabel>
        {errors.password && (
          <p className="text-red-400 text-sm">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        loading={loading}
        className="w-full py-3 bg-white hover:bg-gray-100 text-primary-800 
                 border-2 border-white/30 hover:border-white/40
                 transition-all duration-200 font-bold"
      >
        Register
      </Button>

      {/* Registration Link */}
      <div className="text-center text-sm text-white/80">
        Already have an EliteValet account?
        <Link
          href="/login"
          className="font-semibold text-white hover:text-gray-200 transition-colors"
        >
          Login
        </Link>
      </div>
    </Form>
  )
}
