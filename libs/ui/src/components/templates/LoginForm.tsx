'use client'
import { useFormLogin } from '@elitevalet/forms/src/login'
import { IconEye, IconEyeOff } from '@tabler/icons-react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '../atoms/Button'
import { Form } from '../atoms/Form'
import { HtmlInput } from '../atoms/HtmlInput'
import { HtmlLabel } from '../atoms/HtmlLabel'
import { toast } from '../molecules/Toast'

export interface ILoginFormProps {
  className?: string
}
export const LoginForm = ({ className }: ILoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormLogin()

  const { replace } = useRouter()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Form
      onSubmit={handleSubmit(async (data) => {
        const { email, password } = data
        setLoading(true)

        const result = await signIn('credentials', {
          email,
          password,
          redirect: false,
        })
        setLoading(false)

        if (result?.ok) {
          replace('/')
        }
        if (result?.error) {
          toast.error('Login failed. Please check your credentials')
        }
      })}
      className="space-y-4"
    >
      {/* Email Input */}
      <div className="space-y-2">
        <HtmlLabel
          title="Email"
          error={errors.email?.message}
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
        <HtmlLabel
          title="Password"
          error={errors.password?.message}
          className="text-white/90"
        >
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

      {/* Forgot Password */}
      <div className="text-right">
        <Link
          href="/forgot-password"
          className="text-sm text-white/80 hover:text-white transition-colors"
        >
          Forgot password?
        </Link>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        loading={loading}
        className="w-full py-3 bg-white hover:bg-gray-100 text-primary-800 
                 border-2 border-white/30 hover:border-white/40
                 transition-all duration-200 font-bold"
      >
        Sign In
      </Button>

      {/* Registration Link */}
      <div className="text-center text-sm text-white/80">
        Don&apos;t have an account?{' '}
        <Link
          href="/register"
          className="font-semibold text-white hover:text-gray-200 transition-colors"
        >
          Create account
        </Link>
      </div>
    </Form>
  )
}
