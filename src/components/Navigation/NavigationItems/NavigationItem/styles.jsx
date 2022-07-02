import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

export const StyledListItem = styled('li')(
  ({ theme }) => ({
    listStyle: 'none'
  })
)

export const StyledNavLink = styled(NavLink)(
  ({ theme }) => ({
    color: '#333333',
    textDecoration: 'none'
  })
)
