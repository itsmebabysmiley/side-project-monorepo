import * as React from 'react'
import { Loader2 } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { ShadButton, ShadButtonProps } from './shad/button'

export interface ButtonProps extends ShadButtonProps {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      startIcon,
      endIcon,
      loading = false,
      ...props
    },
    ref,
  ) => {
    const StartIcon =
      startIcon && React.isValidElement(startIcon)
        ? React.cloneElement(startIcon as React.ReactElement, {
            className: twMerge(`mr-2 h-4 w-4`, startIcon?.props.className),
          })
        : null
    const EndIcon =
      endIcon && React.isValidElement(endIcon)
        ? React.cloneElement(endIcon as React.ReactElement, {
            className: twMerge(`ml-2 h-4 w-4`, endIcon?.props.className),
          })
        : null

    return (
      <ShadButton ref={ref} asChild={asChild} {...props}>
        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          StartIcon
        )}
        {props.children}
        {!loading && EndIcon}
      </ShadButton>
    )
  },
)

Button.displayName = 'ButtonWithIcon'

export { Button }
