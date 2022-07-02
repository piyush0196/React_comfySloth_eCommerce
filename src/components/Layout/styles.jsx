import { styled } from '@mui/material'

export const Main = styled('main')(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: 0
}))

export const StyledLayoutChildren = styled('div')(
  ({ theme }) => ({
    marginTop: '50px',
    padding: '30px'
  })
)
