import React, { Component } from 'react';
import TextField  from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';

import adminPhoto from '../LastQuestions/advokat.png';

export default class MessagesPage extends Component {
	constructor() {
    	super();    	
  	}   
	async componentDidMount() {}
	render() {
		return(
			<div id="messages" className="mx-autocol-12 p-0">
		      <ListItem alignItems="flex-start" button>
		        <ListItemAvatar>
		          <Avatar alt="Фото администратора" src={adminPhoto} />
		        </ListItemAvatar>
		        <ListItemText
		          primary="Администратор"
		          secondary={
		            <React.Fragment>
		              <Typography
		                component="span"
		                variant="body2"
		                color="textPrimary"
		              >
		                Ali Connors
		              </Typography>
		              {" — I'll be in your neighborhood doing errands this…"}
		            </React.Fragment>
		          }
		        />
		      </ListItem>
		      <Divider variant="inset" component="li" />
		    </div>
		)
	}
}