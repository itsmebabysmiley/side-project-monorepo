'use client'

import Button from '@/components/Button'
import { FormInput } from '@/components/form/formInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { Paper, Stack, Typography } from '@mui/material'
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
  const { control } = useForm<PreAuth>({
    defaultValues: defaultPreAuth,
    resolver: zodResolver(schema),
  })
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
        <Button>Continue with Email</Button>
      </Stack>
    </Paper>
  )
}
