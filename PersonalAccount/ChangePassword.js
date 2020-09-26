import React, { Component } from 'react';
import TextField  from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';

export default class ChangePassword extends Component {
	constructor() {
    	super();
  	}   
	async componentDidMount() {}
	render() {
		return(
			<div className="mx-auto col-lg-9">
				<div id="changeEmail">
					<h2 className="col-12 p-0">Смена Email</h2>
					<form className="row ml-0 mr-0 justify-content-between" noValidate autoComplete="off">
					  <TextField label="Новый email" variant="outlined" className="col-5"/><TextField className="col-5" label="Текущий пароль" variant="outlined" />
					</form>
					<div className="row ml-0 mr-0 mt-3 justify-content-between">
						<Button id="changeMail" variant="contained">
				          Изменить email
				        </Button>
				        <Button id="rememmberPassword" variant="contained">
				          Напомнить пароль
				        </Button>
					</div>
				</div>
				<div id="ChangePassword" className="mt-5">
					<h2 className="col-12 p-0">Смена ароля</h2>
					<form className="row ml-0 mr-0 justify-content-between" noValidate autoComplete="off">
					  <TextField  label="Текущий пароль" variant="outlined" className="col-5"/>
					  <TextField className="col-5" label="Новый пароль" variant="outlined" />
					  <TextField className="col-5 ml-auto mt-2" label="Подтвердите пароль" variant="outlined" />
					</form>
					<div className="row ml-0 mr-0 mt-3 justify-content-center">
						<Button id="ChangePasswordBtn" variant="contained">
				          Изменить пароль
				        </Button>
					</div>
				</div>
			</div>
		)
	}
}