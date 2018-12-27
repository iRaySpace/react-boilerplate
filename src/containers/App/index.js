import React, { Component }   from 'react'
import { connect }                          from 'react-redux'
import PropTypes                            from 'prop-types'
import { MuiThemeProvider }                 from '@material-ui/core/styles'
import theme                                from 'configs/config-theme'
import AppBar                               from 'components/AppBar'
import AppDrawer                            from 'components/AppDrawer'
import Home                                 from 'containers/Home'
import { appConfig }                        from 'configs/config-main'
import { openLeftDrawer, closeLeftDrawer }  from 'core/actions/actions-ui'

// global styles for entire app
import './styles.scss'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <AppBar onMenuClick={this.props.openLeftDrawer}>
            {appConfig.name}
          </AppBar>
          <AppDrawer
            drawerOpen={this.props.leftDrawerIsOpen}
            onDrawerClose={this.props.closeLeftDrawer}
          />
          <Home />
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  leftDrawerIsOpen: state.ui.leftDrawerIsOpen
})

const mapDispatchToProps = dispatch => ({
  openLeftDrawer: () => dispatch(openLeftDrawer()),
  closeLeftDrawer: () => dispatch(closeLeftDrawer())
})

App.propTypes = {
  openLeftDrawer: PropTypes.func.isRequired,
  closeLeftDrawer: PropTypes.func.isRequired,
  leftDrawerIsOpen: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
