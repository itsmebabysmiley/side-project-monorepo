/* eslint-disable no-restricted-imports */
import { LoadingButton as MuiLoadingButton } from '@mui/lab'
import type { LoadingButtonProps } from '@mui/lab'

type ButtonProps = LoadingButtonProps
export default function Button({ ...props }: ButtonProps) {
  return (
    <MuiLoadingButton variant="contained" {...props}>
      {props.children}
    </MuiLoadingButton>
  )
}
