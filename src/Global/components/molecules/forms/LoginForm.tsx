import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Alert,
  AlertDescription,
  Input,
} from '@/Global/components/atoms'
import { loginSchema } from '@/User/schemas/auth'

type FormData = z.infer<typeof loginSchema>

interface LoginFormProps {
  onSubmit: (credentials: FormData) => void
  error?: Error | null
  isLoading?: boolean
}

export function LoginForm({ onSubmit, error, isLoading }: LoginFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error.message || 'Invalid email or password'}</AlertDescription>
          </Alert>
        )}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  {...field}
                  onFocus={() => form.clearErrors('email')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="••••••"
                  {...field}
                  onFocus={() => form.clearErrors('password')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>
    </Form>
  )
}
