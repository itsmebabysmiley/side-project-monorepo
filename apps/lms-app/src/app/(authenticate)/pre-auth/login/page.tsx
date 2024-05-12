'use client'

import { Divider, Paper, Stack, Typography } from '@mui/material'
import { z } from 'zod'
import GoogleSignInButton from '@/components/signin/SignInGoogleButton'
import { useForm } from 'react-hook-form'
import { FormInput } from '@/components/form/formInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormInputPassword } from '@/components/form/formInputPassword'
import { useSearchParams } from 'next/navigation'
import CheckBox from '../../../../components/Checkbox'
import Button from '../../../../components/Button'

const defaultLoginValues = {
  username: '',
  password: '',
}
type LoginData = typeof defaultLoginValues

const LoginSchema = z.object({
  username: z.string().min(1, 'Username or Email is required'),
  password: z.string().min(1, 'Password is required'),
})

export default function Page() {
  const searchParams = useSearchParams()
  const { control } = useForm<LoginData>({
    defaultValues: {
      username: searchParams.get('email') ?? '',
      password: '',
    },
    resolver: zodResolver(LoginSchema),
  })

  return (
    <Paper>
      <Stack spacing={2} p={2}>
        <Typography variant="h3" align="center">
          Login
        </Typography>

        <FormInput
          control={control}
          name={'username'}
          label="Username or Email"
          placeholder="example@email.com"
          required
        />
        <FormInputPassword
          control={control}
          name={'password'}
          label="Password"
          placeholder="Password"
          type="password"
          required
        />
        <CheckBox label="Remember me" checked={false} />
        <Divider>
          <Typography variant="caption">OR</Typography>
        </Divider>
        <Stack display="row" alignItems="center">
          <GoogleSignInButton />
        </Stack>
        <Button variant="contained">Login</Button>
      </Stack>
    </Paper>
  )
}
