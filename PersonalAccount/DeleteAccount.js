import React, { Component } from 'react';
import TextField  from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';

export default class DeleteAccount extends Component {
	constructor() {
    	super();
  	}   
	async componentDidMount() {}
	render() {
		return(
			<div id="settings" className="mx-auto col-lg-9">
				<h2 className="col-12 p-0">Удалить анкету</h2>
				<p>Обращаем Ваше внимание, что после удаления анкеты Вы больше не сможете отвечать на вопросы, вести переписку с юристами и пользователями сайта, комментировать публикации, а также пользоваться другими функциями сайта, требующими регистрации.</p>
				<form className="d-flex flex-column settingsParam" noValidate autoComplete="off">
		          <TextField id="standard-basic" type="password" label="Для удаления введите пароль" />          
		        </form>
		        <Button id="deleteAccount" variant="contained">
		          Удалить анкету
		        </Button>
			</div>
		)
	}
}