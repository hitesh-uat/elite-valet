'use client'
import { useQuery } from '@apollo/client'
import { GaragesDocument } from '@elitevalet/network/src/gql/generated'
import { useTakeSkip } from '@elitevalet/util/hooks/pagination'
import { motion } from 'framer-motion'
import { GarageAdminCard } from '../organisms/GarageAdminCard'
import { ShowData } from '../organisms/ShowData'

export const AdminHome = () => {
  return <ShowGarages />
}

export const ShowGarages = () => {
  const { setSkip, setTake, skip, take } = useTakeSkip()
  const { loading, data, error } = useQuery(GaragesDocument, {
    variables: { skip, take },
  })

  return (
    <div className="min-h-screen bg-white p-6">
      <ShowData
        error={error?.message}
        title="Garages"
        loading={loading}
        childrenClassName="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        pagination={{
          resultCount: data?.garages.length || 0,
          totalCount: data?.garagesCount.count || 0,
          setSkip,
          setTake,
          skip,
          take,
        }}
      >
        {data?.garages.map((garage, index) => (
          <motion.div
            key={garage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GarageAdminCard garage={garage} />
          </motion.div>
        ))}
      </ShowData>
    </div>
  )
}
