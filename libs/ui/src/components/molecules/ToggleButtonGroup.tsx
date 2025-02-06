import ToggleButtonMui, { ToggleButtonProps } from '@mui/material/ToggleButton'
import ToggleButtonGroupMui, {
  ToggleButtonGroupProps,
} from '@mui/material/ToggleButtonGroup'
import { forwardRef } from 'react'

interface CustomToggleButtonProps extends ToggleButtonProps {
  selectedClassName?: string
}

export const ToggleButtonGroup = forwardRef<
  JSX.Element,
  ToggleButtonGroupProps
>((props, ref) => (
  <ToggleButtonGroupMui classes={{ root: 'block mt-2' }} ref={ref} {...props} />
))

ToggleButtonGroup.displayName = 'ToggleButtonGroup'

export const ToggleButton = ({
  selectedClassName,
  className,
  ...props
}: CustomToggleButtonProps) => (
  <ToggleButtonMui
    classes={{
      root: `rounded-lg transition-all border-2 border-gray-200  ${
        className || ''
      }`,
      selected: `!border-2 bg-opacity-10 ${selectedClassName || ''}`,
    }}
    disableRipple
    disableTouchRipple
    disableFocusRipple
    {...props}
  />
)
