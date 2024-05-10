'use client'

import Button from '@/components/Button'
import { FormInput } from '@/components/form/formInput'
import { FormSelect } from '@/components/form/formSelect'
import { zodResolver } from '@hookform/resolvers/zod'
import { Paper, Stack, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { ZodType, z } from 'zod'

const formDefaultData = {
  firstName: '',
  lastName: '',
  phone: '',
  gender: '',
  dob: '',
  email: '',
  password: '',
  confirmPassword: '',
}
type FormData = typeof formDefaultData

const formSchema: ZodType<FormData> = z
  .object({
    firstName: z.string().min(1, 'First Name is required'),
    lastName: z.string().min(1, 'Last Name is required'),
    phone: z.string().min(1, 'Phone is required'),
    email: z.string().email('Invalid email format'),
    password: z.string().min(1, 'Password is required'),
    confirmPassword: z.string().min(1, 'Confirm Password is required'),
    gender: z.string(),
    dob: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password and Confirm Password must be the same',
    path: ['confirmPassword'],
  })

export default function Page() {
  const { control } = useForm<FormData>({
    defaultValues: formDefaultData,
    resolver: zodResolver(formSchema),
  })

  return (
    <Paper>
      <Stack spacing={2} p={2}>
        <Typography variant="h3" align="center">
          Register
        </Typography>
        <Stack direction="row" gap={2}>
          <FormInput
            name={'firstName'}
            label={'First Name'}
            control={control}
            required
          />
          <FormInput
            name={'lastName'}
            label={'Last Name'}
            control={control}
            required
          />
        </Stack>
        <FormInput
          name={'phone'}
          label={'Mobile Number'}
          control={control}
          required
        />
        <FormInput name={'email'} label={'Email'} control={control} required />
        <FormInput
          name={'password'}
          label={'Password'}
          control={control}
          type="password"
          required
        />
        <FormSelect
          name={'gender'}
          label="Gender"
          control={control}
          options={[
            { label: 'Perfer not to say', value: 'none' },
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
          ]}
        />
        <Button>Register</Button>
      </Stack>
    </Paper>
  )
}
