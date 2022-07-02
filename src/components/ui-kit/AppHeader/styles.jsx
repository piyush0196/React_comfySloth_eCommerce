import MuiAppBar from '@mui/material/AppBar'
import { styled, Toolbar } from '@mui/material'

export const AppBar = styled(MuiAppBar)(({ theme, open }) => ({
  color: theme.colors.black,
  backgroundColor: theme.colors.white,
  boxShadow: 'none',
  height: '5rem'
}))

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-evenly'
})
