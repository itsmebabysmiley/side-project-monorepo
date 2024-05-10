'use client'

import TextField, { TextFieldProps } from '@mui/material/TextField'
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form'

interface FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<TextFieldProps, 'name'> {
  name: TName
  control: ControllerProps<TFieldValues, TName>['control']
}

export function FormInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  label,
  control,
  onChange,
  ...props
}: FormInputProps<TFieldValues, TName>) {
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
          fullWidth
          {...field}
          {...props}
        />
      )}
    />
  )
}
