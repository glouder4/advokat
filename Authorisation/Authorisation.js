import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

import TextField  from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';

export default class Registration extends Component {
	constructor() {
	  super();
	  this.state = {
	  	isError:false,
	  	helperText:''
	  }

	  this.autrorize = this.autrorize.bind(this);
	}
	componentDidMount(){}
	autrorize = () =>{
		let username = document.getElementById('username').value;
		let password = document.getElementById('password').value;
		if(password != ''){
			console.log('sendAutorise');
			this.setState({
				isError:false,
				helperText:''
			})
		}
		else{
			this.setState({
				isError:true,
				helperText:'Не правильный логин или пароль'
			})
		}
	}

	render() {
	  return (
	  	<body>
		  	<Header />
		  	<div id="Registration">
		  		<form className="col-12 col-md-5 mx-auto d-flex flex-column">
		  			<TextField error={this.state.isError} helperText={this.state.helperText} autoFocus margin="dense" id="username" label="Имя пользователя" type="username" fullWidth />
		  			<TextField margin="dense" id="password" label="Пароль" type="password" fullWidth onChange={this.handleChangePassword} />
		  			<Button id="RegisterMe" variant="contained" className="mx-auto" onClick={this.autrorize}>
			          Вход
			        </Button>
		  		</form>
		  	</div>
		  	<Footer />
	  	</body>
	  );
	}
}