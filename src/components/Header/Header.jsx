import AppHeader from 'components/ui-kit/AppHeader'
import CustomButton from 'components/ui-kit/Button/index'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { StyledMenuBox } from './styles'
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems'

const Header = ({ isSideNavOpen, handleDrawerToggle }) => {
  return (
    <AppHeader
      left={
        <Link to='/'> <img src='images/logo_comfysloth.png' alt='Comft sloth' /></Link>
      }
      center={
        <StyledMenuBox>
          <NavigationItems />
        </StyledMenuBox>
      }
      right={
        <>
          <div>
            <CustomButton
              type='button'
              variant='text'
              endIcon={<ShoppingCartIcon />}
              size='small'
            >
              Cart
            </CustomButton>
            <CustomButton
              type='button'
              variant='text'
              size='small'
            >
              Login
            </CustomButton>
          </div>
        </>
      }
    />
  )
}

export default Header
