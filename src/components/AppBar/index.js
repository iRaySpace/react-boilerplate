import React                   from 'react'
import PropTypes               from 'prop-types'
import { AppBar as MuiAppBar } from '@material-ui/core'
import Toolbar                 from '@material-ui/core/Toolbar'
import Typography              from '@material-ui/core/Typography'
import IconButton              from '@material-ui/core/IconButton'
import MenuIcon                from '@material-ui/icons/Menu'

/* component styles */
import { styles } from './styles.scss'

const AppBar = (props) => {
  const { children, onMenuClick } = props
  return (
    <div className={styles}>
      <MuiAppBar
        position="static"
        className="app-bar"
        color="secondary"
      >
        <Toolbar variant="dense">
          <IconButton
            className="menu-button"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            {children}
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </div>
  )
}

AppBar.propTypes = {
  children: PropTypes.node.isRequired,
  onMenuClick: PropTypes.func.isRequired
}

export default AppBar
