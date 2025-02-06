import { AuthLayout } from '@elitevalet/ui/src/components/molecules/AuthLayout'
import { LoginForm } from '@elitevalet/ui/src/components/templates/LoginForm'

export default function Page() {
  return (
    <AuthLayout title={'Login'}>
      <LoginForm />
    </AuthLayout>
  )
}
