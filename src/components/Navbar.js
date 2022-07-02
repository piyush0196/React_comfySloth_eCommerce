import AppHeader from 'components/ui-kit/AppHeader/index'
import { Link } from 'react-router-dom'
// import logo_comfySloth from '../../../../../public/images/logo_comfysloth';

const Navbar = () => {
  return (
    <AppHeader
      left={
        <Link to='/'>
          <img src='images/logo_comfySloth' alt='comfy sloth' />
        </Link>
      }
      right={<h2>Profile</h2>}
    />
  )
}

export default Navbar
