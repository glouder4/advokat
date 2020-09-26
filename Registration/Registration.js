import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

import TextField  from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';

import './Registration.css';

export default class Registration extends Component {
	constructor() {
	  super();
	  this.state = {
	  	password:'',
	  	passwordRepeat:'',
	  	isError:false,
	  	helperText:''
	  }

	  this.registration = this.registration.bind(this);
	  this.handleChangePassword = this.handleChangePassword.bind(this);
	  this.handleChangeRepeatPassword = this.handleChangeRepeatPassword.bind(this);
	}
	componentDidMount(){}
	registration = () =>{
		let username = document.getElementById('username').value;
		let email = document.getElementById('email').value;
		let password = this.state.passwordRepeat;
		if(this.state.isError == false){
			console.log('sendRegister');
		}
	}
	handleChangePassword(event) {
	  let password = document.getElementById('password').value;
	  this.setState({password: password},console.log(password))
	}
	handleChangeRepeatPassword(event) {
	  let repeatPassword = document.getElementById('passwordRepeat').value;
	  this.setState({passwordRepeat: repeatPassword},
	  	function(){
			if(this.state.passwordRepeat != this.state.password) this.setState({
			  	isError:true,
			  	helperText:'Пароли не совпадают'
			})	  
			else this.setState({
			  	isError:false,
			  	helperText:''
			})
	  	}
	  )	  
	  //this.setState({username: event.nativeEvent.text });
	}

	render() {
	  return (
	  	<body>
		  	<Header />
		  	<div id="Registration">
		  		<form className="col-12 col-md-5 mx-auto d-flex flex-column">
		  			<TextField autoFocus margin="dense" id="username" label="Имя пользователя" type="username" fullWidth />
		  			<TextField margin="dense" id="email" label="Email" type="email" fullWidth />
		  			<TextField margin="dense" id="password" label="Пароль" type="password" fullWidth onChange={this.handleChangePassword} />
		  			<TextField error={this.state.isError} helperText={this.state.helperText} margin="dense" id="passwordRepeat" label="Повторите пароль" type="password" fullWidth onChange={this.handleChangeRepeatPassword} />
		  			<Button id="RegisterMe" variant="contained" className="mx-auto" onClick={this.registration}>
			          Регистрация
			        </Button>
		  		</form>
		  	</div>
		  	<Footer />
	  	</body>
	  );
	}
}