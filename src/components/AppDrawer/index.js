import React         from 'react'
import PropTypes     from 'prop-types'
import List          from '@material-ui/core/List'
import ListItem      from '@material-ui/core/ListItem'
import ListItemText  from '@material-ui/core/ListItemText'
import Drawer        from '@material-ui/core/Drawer'

/* component styles */
import { styles } from './styles.scss'

const DrawerList = [
  'Item 1',
  'Item 2',
  'Item 3'
]

const AppDrawer = props => (
  <Drawer
    className={styles}
    open={props.drawerOpen}
    onClose={props.onDrawerClose}
  >
    <div className="app-drawer">
      <List>
        {DrawerList.map(item => (
          <ListItem button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </div>
  </Drawer>
)

AppDrawer.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  onDrawerClose: PropTypes.func.isRequired
}

export default AppDrawer
