import {
  Select,
  MenuItem,
  SelectProps,
  FormControl,
  InputLabel,
} from '@mui/material'
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form'

type FormSelectOption = {
  label: string
  value: string | number
}

type FormSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<SelectProps, 'name'> & {
  name: TName
  control: ControllerProps<TFieldValues, TName>['control']
  options: FormSelectOption[]
}

export function FormSelect<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  label,
  control,
  onChange,
  options,
  fullWidth = true,
  ...props
}: FormSelectProps<TFieldValues, TName>) {
  const id = `form-select-${name}`
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl fullWidth={fullWidth}>
          <InputLabel id={id}>{label}</InputLabel>
          <Select
            labelId={id}
            label={label}
            error={!!fieldState.error}
            inputProps={{ 'aria-label': fieldState.error?.message }}
            {...field}
            {...props}
          >
            {options.map((option, index) => (
              <MenuItem key={`${option.value}-${index}`} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  )
}
