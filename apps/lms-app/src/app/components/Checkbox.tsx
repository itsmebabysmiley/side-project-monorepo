import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

type CheckBoxProps = {
  label: string
}

export default function CheckBox({ label }: CheckBoxProps) {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label={label} />
    </FormGroup>
  )
}
