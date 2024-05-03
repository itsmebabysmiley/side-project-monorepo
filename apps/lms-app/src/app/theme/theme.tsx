'use client'

import { createTheme } from '@mui/material'
import type {} from '@mui/lab/themeAugmentation'

export const theme = createTheme({
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1200,
      xl: 1440,
    },
  },
  typography: {},
  palette: {
    primary: {
      main: '#3f51b5', // a calm, professional blue
    },
    secondary: {
      main: '#f50057', // a bright, energetic pink for accents
    },
    error: {
      main: '#f44336', // a strong red for errors
    },
    warning: {
      main: '#ff9800', // a noticeable orange for warnings
    },
    info: {
      main: '#2196f3', // a clear blue for informational messages
    },
    success: {
      main: '#4caf50', // a positive green for success messages
    },
    background: {
      default: '#f5f5f5', // a light grey for backgrounds
      paper: '#fff', // white for paper backgrounds
    },
    text: {
      primary: '#212121', // a dark grey for primary text
      secondary: '#757575', // a medium grey for secondary text
      disabled: '#bdbdbd', // a light grey for disabled text
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'h5',
          body2: 'h6',
          caption: 'span',
          overline: 'span',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: '#D32F2F',
          '&$error': {
            color: '#D32F2F',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'large',
      },
    },
    MuiLoadingButton: {
      defaultProps: {
        size: 'large',
      },
    },
  },
})
