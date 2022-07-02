import { StyledListItem, StyledNavLink } from './styles'

const NavigationItem = ({ link, children }) => {
  return (
    <StyledListItem>
      <StyledNavLink to={link}>{children}</StyledNavLink>
    </StyledListItem>
  )
}

export default NavigationItem
