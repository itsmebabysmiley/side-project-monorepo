import { Box, Paper, Stack } from '@mui/material'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Box component={Paper} sx={{ width: { xs: '100%', sm: '500px' } }}>
      <Stack spacing={2} p={2}>
        {children}
      </Stack>
    </Box>
  )
}
