import clsx from 'clsx'
import { signIn } from 'next-auth/react'

export const GoogleButton = ({ className }: { className?: string }) => {
  return (
    <button
      onClick={() => {
        signIn('google', { callbackUrl: '/' })
      }}
      className={clsx(
        'text-lg hover:shadow-lg transition-shadow flex items-center justify-center w-8 h-8 border border-[#ea4335] rounded-full',
        className,
      )}
    >
      Google
    </button>
  )
}
