import NavigationItem from './NavigationItem/NavigationItem'
import { StyledUnorderList } from './styles'

const NavigationItems = () => {
  return (
    <StyledUnorderList>
      <NavigationItem link='/'>Home</NavigationItem>
      <NavigationItem link='/about'>About</NavigationItem>
      <NavigationItem link='/products'>Products</NavigationItem>
    </StyledUnorderList>
  )
}

export default NavigationItems
