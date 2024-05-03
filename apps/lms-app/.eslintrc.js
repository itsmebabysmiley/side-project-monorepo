module.exports = {
  extends: ['../../.eslintrc.js', 'next/core-web-vitals'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-restricted-imports': [
      'error',
      {
        name: '@mui/lab',
        importNames: ['LoadingButton'],
        message:
          'Please use Button from "app/components/Button.tsx" instead of LoadingButton from "@mui/lab".',
      },
      {
        name: '@mui/material',
        importNames: ['Button'],
        message:
          "We won't use MUI Button in this project. Please use LoadingButton from 'app/components/Button.tsx' instead.",
      },
    ],
  },
}
