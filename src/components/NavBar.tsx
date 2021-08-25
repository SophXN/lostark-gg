import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Menu } from '@material-ui/core'
import { MenuItem } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

type AppProps = {
  classes: object;
}

const NavBar = (props: AppProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open: boolean = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(e.target as any);
  };

  const newBuildClick = (): void => {
    handleClose()
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" id="menu-title">
              trision.gg
            </Typography>
            <Button color="inherit" aria-label="builds" onClick={handleClick} >
              Builds
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={newBuildClick}>
                <Link to="/class-select">New Build</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>My Builds</MenuItem>
              <MenuItem onClick={handleClose}>Community</MenuItem>
            </Menu>
            <Button color="inherit" aria-label="meta-builds" >
              Meta
            </Button>
            <Button color="inherit" aria-label="meta-builds" >
              Skills
            </Button>
            <Button color="inherit" aria-label="meta-builds" >
              Engravings
            </Button>
            <Button color="inherit" aria-label="meta-builds" >
              Statistics
            </Button>
          </Toolbar>
        </AppBar>
      </Router>
    </>
  )
}

export default NavBar