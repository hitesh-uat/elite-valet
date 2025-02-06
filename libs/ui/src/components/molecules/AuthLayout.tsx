'use client'
import { IconArrowBack } from '@tabler/icons-react'
import Link from 'next/link'
import { ReactNode } from 'react'
import { BrandIcon } from '../atoms/BrandIcon'
import { GoogleButton } from './GoogleButton'

export interface IAuthLayoutProps {
  children: ReactNode
  title: string
}

export const AuthLayout = ({ title, children }: IAuthLayoutProps) => {
  return (
    <div className="relative h-[calc(100vh-4rem)] bg-primary-900">
      <div className="flex flex-col justify-center items-center absolute top-0 backdrop-blur-sm bottom-0 w-full">
        <div className="p-4 w-full max-w-lg mx-auto">
          <div className="bg-primary-500/20 rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-primary-100/30">
            <header className="mb-8 text-center">
              <BrandIcon className="mx-auto mb-4 text-white" />
              <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
              <p className="text-white/80">
                Sign in to your EliteValet account
              </p>
            </header>

            {children}

            <div className="mt-6 text-center">
              <GoogleButton className="w-full bg-white hover:bg-gray-100 text-red-400" />
              <Link
                href="/"
                className="inline-flex items-center gap-2 mt-6 text-white/80 hover:text-white transition-colors"
              >
                <IconArrowBack className="w-4 h-4" />
                Return to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
