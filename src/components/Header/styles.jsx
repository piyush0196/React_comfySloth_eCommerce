import { Box, styled } from '@mui/material'

export const StyledMenuBox = styled(Box)(
  ({ theme }) => ({
    display: 'flex',
    width: '300px',
    padding: '200px',
    justifyContent: 'space-between'
  })
)
