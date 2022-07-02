import Header from 'components/Header/Header'
import { StyledLayoutChildren } from './styles'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <StyledLayoutChildren>{children}</StyledLayoutChildren>
    </>
  )
}

export default Layout
