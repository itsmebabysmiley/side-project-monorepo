import { Avatar, Paper, Stack, Typography } from '@mui/material'

export default async function Page() {
  return (
    <Paper>
      <Stack spacing={2} p={2}>
        <Avatar sx={{ width: 56, height: 56 }}>S</Avatar>
        <Typography variant="h5">Profile</Typography>
        <Stack>
          <Typography variant="body1">Full Name: </Typography>
          <Typography variant="body2">Sam Smith</Typography>
        </Stack>
        <Stack>
          <Typography variant="body1">UserName: </Typography>
          <Typography variant="body2">SamTheSinger</Typography>
        </Stack>
        <Stack>
          <Typography variant="body1">Email: </Typography>
          <Typography variant="body2">samsmith@vevo.com</Typography>
        </Stack>
        <Stack>
          <Typography variant="body1">Phone: </Typography>
          <Typography variant="body2">1-899-0199-1</Typography>
        </Stack>
        <Stack>
          <Typography variant="body1">Birth of date: </Typography>
          <Typography variant="body2">01 May, 1997</Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}
