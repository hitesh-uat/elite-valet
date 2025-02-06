import { AuthLayout } from '@elitevalet/ui/src/components/molecules/AuthLayout'
import { RegisterForm } from '@elitevalet/ui/src/components/templates/RegisterForm'

export default function Page() {
  return (
    <AuthLayout title={'Register'}>
      <RegisterForm />
    </AuthLayout>
  )
}
