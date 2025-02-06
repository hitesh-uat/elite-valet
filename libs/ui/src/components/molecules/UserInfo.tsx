import { BaseComponent } from '@elitevalet/util/types'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { cn } from '../../lib/utils'

export interface UserInfoProps extends BaseComponent {
  showUID?: boolean
  compact?: boolean
  showDropdownTrigger?: boolean
}

export const UserInfo = ({
  children,
  className,
  showUID = true,
  compact = false,
  showDropdownTrigger = false,
}: UserInfoProps) => {
  const session = useSession()
  const image = session.data?.user?.image
  const name = session.data?.user?.name
  const uid = session.data?.user?.uid

  return (
    <div
      className={cn(
        'group relative flex items-center gap-4',
        compact
          ? 'py-1'
          : 'p-3 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors',
        className,
      )}
    >
      <div className="relative">
        <Image
          src={image || '/pp2.webp'}
          alt="User avatar"
          width={300}
          height={300}
          className={cn(
            'border-2 border-white rounded-full shadow-sm',
            compact ? 'w-8 h-8' : 'w-12 h-12',
          )}
        />
        {showDropdownTrigger && (
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
            <div className="w-4 h-4 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors" />
          </div>
        )}
      </div>

      {!compact && (
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-medium text-gray-900 truncate">{name}</p>
            {children}
          </div>
          {showUID && uid && (
            <p className="text-xs font-mono text-gray-500 truncate mt-0.5">
              ID: {uid}
            </p>
          )}
        </div>
      )}

      {compact && <div className="sr-only">User account information</div>}
    </div>
  )
}
