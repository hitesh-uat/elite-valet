'use client'
import { useQuery } from '@apollo/client'
import { AdminsDocument } from '@elitevalet/network/src/gql/generated'
import { useTakeSkip } from '@elitevalet/util/hooks/pagination'
import { ShowData } from '../organisms/ShowData'
import { AdminCard } from '../organisms/admin/AdminCard'
import { CreateAdmin } from '../organisms/admin/CreateAdmin'
import { RemoveAdminButton } from '../organisms/admin/RemoveAdminButton'

export const ManageAdmins = () => {
  const { setSkip, setTake, skip, take } = useTakeSkip(0)

  const { data, loading } = useQuery(AdminsDocument, {
    variables: { skip, take },
  })

  return (
    <>
      <div className="flex justify-end mt-6">
        <CreateAdmin />
      </div>
      <ShowData
        loading={loading}
        pagination={{
          skip,
          take,
          resultCount: data?.admins.length,
          totalCount: data?.adminsCount,
          setSkip,
          setTake,
        }}
        childrenClassName="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
        title={'Manage admins'}
      >
        {data?.admins.map((admin) => (
          <div className="pt-12" key={admin.uid}>
            <div className="pl-0.5 border-l-2 border-primary">
              <AdminCard key={admin.uid} admin={admin}>
                <div className="flex justify-end">
                  <RemoveAdminButton uid={admin.uid} />
                </div>
              </AdminCard>
            </div>
          </div>
        ))}
      </ShowData>
    </>
  )
}
