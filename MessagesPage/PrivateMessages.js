import React, { Component } from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import advokat from '../LastQuestions/advokat.png';

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

export default class PrivateMessages extends Component {
	constructor(props) {
        super(props);
        this.state = {
            messages:[],
            targetID:'',
            currentMessage:''
        }
        this.InputMessage = this.InputMessage.bind(this);
        this.sendPrivateMessage = this.sendPrivateMessage.bind(this);
    }
    InputMessage = (message) =>{
        this.setState({currentMessage:message.target.value})
    }
    sendPrivateMessage = () =>{        
        let currentMessage = this.state.currentMessage;
        if(currentMessage != ''){
            let messages = [];
            for(let i =0; i < this.state.messages.length;i++){
                messages.push(this.state.messages[i])
            }
            messages.push(
                <div className="executorMessage row m-0 pl-4">
                    <List>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <StyledBadge overlap="circle" anchorOrigin={{vertical: 'bottom',horizontal: 'right'}} variant="dot">
                                <Avatar>U</Avatar>
                            </StyledBadge>
                        </ListItemAvatar>
                        <ListItemText primary="Вы"
                          secondary={
                            <React.Fragment>
                                {currentMessage}
                            </React.Fragment>
                          }
                        />
                      </ListItem>    
                    </List>                                    
               </div>
            );
            this.setState({
                messages:messages,
                currentMessage:''
            },function(){
                document.getElementById('messageInput').value = '';
                document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
            })
        }        
    }
    async componentDidMount() {
        this.setState({targetID:this.props.target})
        let messages = [];
        messages.push(
            <div className="executorMessage row m-0 pl-4">
                <List>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <StyledBadge overlap="circle" anchorOrigin={{vertical: 'bottom',horizontal: 'right'}} variant="dot">
                            <Avatar alt="Администратор" src={advokat} />
                        </StyledBadge>
                    </ListItemAvatar>
                    <ListItemText primary="Администратор"
                      secondary={
                        <React.Fragment>
                            {"Здравствуйте! Я администратор этого сайта и здесь вы можете задать любой интересующий вас вопрос. Удачного использования сервиса!"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>    
                </List>                                    
           </div>
        );
        this.setState({
            messages:messages
        })
    }
	render() {
		return(
            <div id={"messages-"+this.state.targetID} className="mx-auto col-lg-9 pt-3">
                <div id="messages">{this.state.messages}</div>               
                <div id="sendUI" className="row m-0 col-12">
                    <TextField className="col-10" id="messageInput" placeholder="Ваше сообщение" multiline onChange={this.InputMessage } />
                    <IconButton className="col-2 sendButton" onClick={this.sendPrivateMessage}>
                        <SendIcon fontSize="large" />
                    </IconButton>
                </div>
            </div>
        )
    }
}