import { AdminsQuery } from '@elitevalet/network/src/gql/generated'
import { format } from 'date-fns'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { ReactNode } from 'react'

type AdminCardProps = {
  admin: AdminsQuery['admins'][number]
  children?: ReactNode
}

export const AdminCard = ({ admin, children }: AdminCardProps) => {
  const session = useSession()
  const isCurrentUser = session.data?.user?.uid === admin.uid

  console.log('AdminCard', admin)

  return (
    <div className="relative bg-white rounded-xl shadow-lg p-6 w-80 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-purple-50 to-blue-50">
      {isCurrentUser && (
        <span className="absolute top-4 right-4 bg-green-200 text-green-700 text-xs font-bold py-1 px-3 rounded-full shadow-sm">
          This is you
        </span>
      )}
      {/* Profile Image */}
      <div className="flex items-center justify-center -mt-12 mb-4">
        <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-400 shadow-md">
          <Image
            src={admin.user?.image || '/pp2.webp'} // Placeholder image or dynamic src if available
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      {/* Name */}
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-1">
        {admin.user?.name || 'JOHN DOE'}
      </h2>
      {/* Unique User ID */}
      <p className=" text-gray-500 text-sm mb-4">UID: {admin.uid}</p>
      {/* Join Date */}
      <p className=" text-sm text-gray-500 mb-4">
        Since {format(new Date(admin.createdAt), 'PP')}
      </p>
      {/* Verification Count */}
      <div className="flex">
        <div className=" py-2 bg-blue-500 rounded-full text-sm font-medium shadow-sm">
          {admin.verificationsCount} Verifications
        </div>
      </div>
      {/* Animated Background Element */}
      <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
      <div className="absolute -top-3 -left-3 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
      <div className="mt-2">{children}</div>
    </div>
  )
}
