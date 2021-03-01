import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import MicRoundedIcon from '@material-ui/icons/MicRounded';

const menuItems = [
  { icon: <HomeRoundedIcon />, label: 'Home' },
  { icon: <LocalOfferRoundedIcon />, label: 'Tags' },
  { icon: <VideocamRoundedIcon />, label: 'Videos' },
  { icon: <MicRoundedIcon />, label: 'Podcasts' },
];

const Menu = () => (
  <List component="nav" aria-label="menu home">
    {menuItems.map((menuItem, index) => (
      <ListItem button key={index}>
        <ListItemIcon>{menuItem.icon}</ListItemIcon>
        <ListItemText primary={menuItem.label} />
      </ListItem>
    ))}
  </List>
);

export default Menu;
