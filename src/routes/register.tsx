import { createFileRoute, Link, useRouter } from '@tanstack/react-router'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/Global/components/atoms'
import { RegisterForm } from '@/Global/components/molecules'

export const Route = createFileRoute('/register')({
  component: RegisterPage,
})

function RegisterPage() {
  const router = useRouter()
  const { authentication: auth } = Route.useRouteContext()

  const handleRegister = async (credentials: {
    email: string
    password: string
    firstName: string
    lastName: string
  }) => {
    try {
      await auth.register(credentials)
      router.navigate({ to: '/login' })
    } catch (err) {
      console.error('Registration failed:', err)
    }
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>Enter your details below to create your account</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm onSubmit={handleRegister} error={auth.error} isLoading={auth.isLoading} />
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="text-primary underline-offset-4 hover:underline">
              Sign in here
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
