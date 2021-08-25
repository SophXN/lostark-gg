import React from 'react'
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

type AppProps = {

}

const NavBar = (props: AppProps): JSX.Element => {

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h4">
            trision.gg
          </Typography>
          <Button color="inherit" aria-label="new-build">New Build</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar