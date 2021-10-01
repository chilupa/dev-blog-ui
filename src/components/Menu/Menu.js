import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import MicRoundedIcon from '@mui/icons-material/MicRounded';

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
