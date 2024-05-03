import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme/theme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <body>{children}</body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  )
}
