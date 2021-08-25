import React, {useState} from 'react'
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Menu } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

type AppProps = {
  classes: string[];
}

const NavBar = (props: AppProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl((e.target as any).index);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" id="menu-title">
            trision.gg
          </Typography>
          <Button color="inherit" aria-label="new-build">New Build</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar