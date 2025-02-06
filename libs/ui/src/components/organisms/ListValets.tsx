import { useQuery } from '@apollo/client'
import { CompanyValetsDocument } from '@elitevalet/network/src/gql/generated'
import { useTakeSkip } from '@elitevalet/util/hooks/pagination'
import { ShowData } from './ShowData'
import { ValetCard } from './ValetCard'

export const ListValets = () => {
  const { take, skip, setSkip, setTake } = useTakeSkip()
  const { data, loading } = useQuery(CompanyValetsDocument)

  return (
    <ShowData
      loading={loading}
      pagination={{
        resultCount: data?.companyValets.length,
        totalCount: data?.companyValetsTotal,
        take,
        skip,
        setSkip,
        setTake,
      }}
      childrenClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {data?.companyValets.map((valet) => (
        <ValetCard key={valet.uid} valet={valet} />
      ))}
    </ShowData>
  )
}
