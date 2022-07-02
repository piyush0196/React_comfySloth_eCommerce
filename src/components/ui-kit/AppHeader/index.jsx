import PropTypes from 'prop-types'
import { AppBar, StyledToolbar } from './styles'

const AppHeader = ({ left, center, right, openDrawer = true, handleDrawer = () => {} }) => {
  return (
    <AppBar
      position='fixed'
      color='default'
      open={openDrawer}
    >
      <StyledToolbar>
        <div>
          {left}
        </div>
        <div>
          {center}
        </div>
        <div>
          {right}
        </div>
      </StyledToolbar>
    </AppBar>
  )
}

export default AppHeader

AppHeader.defaultProps = {
  openDrawer: true,
  handleDrawer: () => {},
  left: 'null',
  right: 'null'

}

AppHeader.propTypes = {
  openDrawer: PropTypes.bool,
  handleDrawer: PropTypes.func,
  left: PropTypes.element,
  right: PropTypes.element
}
