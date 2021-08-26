import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import ClassSelect from './ClassSelect';
import { AdvancedClass } from '../App';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Archetypes } from '../App';

interface NavProps {
  classes: Archetypes;
  chooseClass: (currentClass: AdvancedClass) => void;
}

const NavBar = (props: NavProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open: boolean = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(e.target as any);
  };

  const newBuildClick = (): void => {
    handleClose();
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
          <Button id="menu-title" aria-label="home" >
            <Link to="/">trision.gg</Link>
          </Button>
          <Button color="inherit" aria-label="builds" onClick={handleClick}>
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
              <Link to="/classes">New Build</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>My Builds</MenuItem>
            <MenuItem onClick={handleClose}>Community</MenuItem>
          </Menu>
          <Button color="inherit" aria-label="meta-builds">
            Meta
          </Button>
          <Button color="inherit" aria-label="skill-list">
            Skills
          </Button>
          <Button color="inherit" aria-label="engravings">
            Engravings
          </Button>
          <Button color="inherit" aria-label="statistics">
            Statistics
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
