import { Box } from '@mui/material'

export default function Template({ children }: { children: React.ReactNode }) {
  return <Box sx={{ width: { xs: '100%', sm: '500px' } }}>{children}</Box>
}
