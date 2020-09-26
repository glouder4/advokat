import React, { Component } from 'react';
import TextField  from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

import Header from '../Header/Header.js';
import PersonalInfo from '../PersonalAccount/PersonalInfo.js';
import LeftSidebar from '../LeftSidebar/LeftSidebar.js';
import Footer from '../Footer/Footer.js';
import AskCall from '../popup/AskCall.js';

import PrivateMessages from '../MessagesPage/PrivateMessages.js';

import adminPhoto from '../LastQuestions/advokat.png';

import '../MessagesPage/UserPageMessages.css';
let toState;

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

export default class UserPageMessages extends Component {
	constructor() {
    	super();
    	this.state = {
    		messagesListItem:[' '],
    		balance:0,
    		isExecutor:true,
    		activeElement:[],
    		targetID:'null'
    	}
    	this.handleOuterClick = this.handleOuterClick.bind(this);
  	}   
	async componentDidMount() {
		document.addEventListener('click', this.handleOuterClick);	
		let messagesBuffer = [];
		for(let i = 0 ; i < this.state.messagesListItem.length;i++){
			messagesBuffer.push(
				<ListItem alignItems="flex-start" button onClick={() => this.goToPrivateMassaging(i) }>
			        <ListItemAvatar>
			        	<StyledBadge overlap="circle" anchorOrigin={{vertical: 'bottom',horizontal: 'right'}} variant="dot">
	                        <Avatar alt="Администратор" src={adminPhoto} />
	                    </StyledBadge> 
			        </ListItemAvatar>
			        <ListItemText  primary="Администратор"
			          secondary={
			            <React.Fragment>
			            	<div className="row mr-0 ml-0">
			            		{"Обрывок последнего сообщения"}
					            <div className="ml-auto unread">
					              	{4}
					            </div>
			            	</div>		              
			            </React.Fragment>
			          }
			        />
			    </ListItem>
			);
		}		
		this.setState({
			messagesListItem:messagesBuffer,
			activeElement:''
		})
	}
	handleOuterClick = (e) =>{
		const updateElement = document.getElementById('toMessages');
		if(e.path.includes(updateElement)){
			this.setState({
				activeElement:'',
				targetID:'null'
			});
		}
	}
	goToPrivateMassaging = (targetID) =>{
		this.setState({targetID:targetID},function(){ console.log(this); })
	}

	render() {
		if(this.state.activeElement == ''){
			if(this.state.targetID == 'null'){
				return(
					<body>
						<Header />
						<PersonalInfo />
						<div className="container">
							<div className="row ml-0 mr-0">
								<LeftSidebar componentToUpdate={this} balance={this.state.balance} isExecutor={this.state.isExecutor} />
								<List id="myMessages" className="mx-auto col-lg-9 p-0">
							      {this.state.messagesListItem}
							    </List>
							</div>			
						</div>
						<Footer />
						<AskCall />
					</body>				
				)
			}
			else{
				return(
					<body>
						<Header />
						<PersonalInfo />
						<div className="container">
							<div className="row ml-0 mr-0">
								<LeftSidebar componentToUpdate={this} balance={this.state.balance} isExecutor={this.state.isExecutor} />
								<PrivateMessages target={this.state.targetID} />
							</div>			
						</div>
						<Footer />
						<AskCall />
					</body>	
				)
			}				
		}
		else{
			return(
				<body>
					<Header />
					<PersonalInfo />
					<div className="container">
						<div className="row ml-0 mr-0">
							<LeftSidebar componentToUpdate={this} balance={this.state.balance} isExecutor={this.state.isExecutor} />
							{this.state.activeElement}
						</div>			
					</div>
					<Footer />
					<AskCall />
				</body>				
			)					
		}		
	}
}