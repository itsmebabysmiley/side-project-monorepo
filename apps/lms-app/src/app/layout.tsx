import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { Box, ThemeProvider } from '@mui/material'
import { theme } from '../theme/theme'
import Navbar from './_components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <body>
            <Navbar />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt={3}
            >
              {children}
            </Box>
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  )
}
