import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

type CheckBoxProps = {
  label: string
  checked?: boolean
}

export default function CheckBox({ label, checked = true }: CheckBoxProps) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked={checked} />}
        label={label}
      />
    </FormGroup>
  )
}
