import { CompanyValetsQuery } from '@elitevalet/network/src/gql/generated'
import { format } from 'date-fns'
import Image from 'next/image'

export interface IValetCardProps {
  valet: CompanyValetsQuery['companyValets'][0]
}

export const ValetCard = ({ valet }: IValetCardProps) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <Image
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          width={400}
          height={400}
          src={valet.image || '/valet.jpeg'}
          alt={valet.displayName}
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900 font-sans">
            {valet.displayName}
          </h3>
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary-700">
            Professional Valet
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-primary/5 rounded-xl">
            <span className="text-sm font-medium text-gray-500">Valet ID</span>
            <span className="font-mono text-primary-800">{valet.uid}</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-primary/5 rounded-xl">
            <span className="text-sm font-medium text-gray-500">
              License No.
            </span>
            <span className="font-semibold text-gray-700">
              {valet.licenceID}
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-primary/5 rounded-xl">
            <span className="text-sm font-medium text-gray-500">
              Registered
            </span>
            <span className="text-sm text-gray-600">
              {format(new Date(valet.createdAt), 'PP')}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
