import React from 'react';
import {Redirect} from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';

import './SendMessageToAdmin.css'

export default function SendMessageToAdmin() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };  

  return (
    <React.Fragment>
      <Button id="SendMessageToAdmin" onClick={toggleDrawer('bottom', true)}><Badge badgeContent={4} color="error" className="mr-3"><MailIcon /></Badge> Написать администратору</Button>
      <SwipeableDrawer anchor="bottom" open={state['bottom']} onClose={toggleDrawer('bottom', false)} onOpen={toggleDrawer('bottom', true)}>
        <div role="presentation" onClick={toggleDrawer('bottom', false)} onKeyDown={toggleDrawer('bottom', false)}>
          <List>
            <ListItem button>
              <ListItemIcon ><Badge badgeContent={4} color="error"><MailIcon /></Badge></ListItemIcon>
              <ListItemText primary="Администратор" onClick={() => { window.location.replace("/Messages"); }} />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </React.Fragment>
  );
}