'use client'

import { VisibilityOff, Visibility } from '@mui/icons-material'
import { InputAdornment, IconButton } from '@mui/material'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { useState } from 'react'
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form'

export function FormInputPassword<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  label,
  control,
  onChange,
  type,
  ...props
}: Pick<ControllerProps<TFieldValues, TName>, 'name' | 'control'> &
  Omit<TextFieldProps, 'name'>) {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          label={label}
          {...field}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...props}
        />
      )}
    />
  )
}
