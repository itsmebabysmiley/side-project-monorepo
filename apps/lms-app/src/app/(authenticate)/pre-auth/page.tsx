'use client'

import Button from '@/components/Button'
import { FormInput } from '@/components/form/formInput'
import { usePostRequest } from '@/hooks/useHttpRequest'
import { zodResolver } from '@hookform/resolvers/zod'
import { Paper, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const defaultPreAuth = {
  email: '',
}

type PreAuth = typeof defaultPreAuth
const schema = z.object({
  email: z.string().email('Invalid email format'),
})

export default function Page() {
  const router = useRouter()
  const [isFetchingEmail, setIsFetchingEmail] = useState(false)
  const { control, handleSubmit } = useForm<PreAuth>({
    defaultValues: defaultPreAuth,
    resolver: zodResolver(schema),
  })

  const { mutateAsync: fetchCheckEmail } = usePostRequest<boolean, PreAuth>(
    '/auth/check-email',
  )

  const handleContinueWithEmail = async ({ email }: PreAuth) => {
    setIsFetchingEmail(true)
    await fetchCheckEmail(
      {
        data: { email },
      },
      {
        onSuccess: (isEmailTaken) => {
          setIsFetchingEmail(false)
          if (isEmailTaken) {
            router.push(`/pre-auth/login?email=${encodeURIComponent(email)}`)
          } else {
            router.push(`/pre-auth/register?email=${encodeURIComponent(email)}`)
          }
        },
      },
    )
  }

  return (
    <Paper>
      <Stack spacing={2} p={2}>
        <Typography variant="h4">Welcome,</Typography>
        <Typography variant="h5">Please continue with you email</Typography>
        <FormInput
          control={control}
          name="email"
          label="Email"
          placeholder="example@email.com"
        />
        <Button
          loading={isFetchingEmail}
          onClick={handleSubmit((data) => handleContinueWithEmail(data))}
        >
          Continue with Email
        </Button>
      </Stack>
    </Paper>
  )
}
