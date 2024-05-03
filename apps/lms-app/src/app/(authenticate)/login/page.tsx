'use client'

import {
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useState } from 'react'
import GoogleSignInButton from '@/components/signin/SignInGoogleButton'
import CheckBox from '../../../components/Checkbox'
import Button from '../../../components/Button'

export default function Page() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleLogin = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }
  return (
    <>
      <Typography variant="h3" align="center">
        Login
      </Typography>
      <TextField label="Username or Email" required />
      <TextField
        label="Password"
        type={showPassword ? 'text' : 'password'}
        required
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
      />
      <CheckBox label="Remember me" />
      <Divider>
        <Typography variant="caption">OR</Typography>
      </Divider>
      <Stack display="row" alignItems="center">
        <GoogleSignInButton />
      </Stack>
      <Button variant="contained" onClick={handleLogin} loading={loading}>
        Login
      </Button>
    </>
  )
}
