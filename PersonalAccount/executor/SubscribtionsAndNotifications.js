import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default class SubscribtionsAndNotifications extends Component {
	constructor() {
    	super();
  	}   
	async componentDidMount() {}
	render() {
		return(
			<div id="SubscribtionsAndNotifications" className="mx-auto col-lg-9">
				<h2 className="col-12 p-0">Почтовые рассылки</h2>
				<FormControlLabel control={<Switch name="newThemes" inputProps={{ 'aria-label': 'secondary checkbox' }} />} label="Рассылки по новым темам на форуме"/>
				<FormControlLabel control={<Switch name="mostPop" inputProps={{ 'aria-label': 'secondary checkbox' }} />} label="Популярные темы на сайте"/>	
				<FormControlLabel control={<Switch name="lawyerWord" inputProps={{ 'aria-label': 'secondary checkbox' }} />} label="Рассылка 'Слово юристу'"/>			
				<h2 className="col-12 p-0">Уведомления</h2>
				<FormControlLabel control={<Switch name="additions" inputProps={{ 'aria-label': 'secondary checkbox' }} />} label="Уведомления об уточнениях к вопросам, на которые Вы отвечали"/>
				<FormControlLabel control={<Switch name="newMessages" inputProps={{ 'aria-label': 'secondary checkbox' }} />} label="Уведомления о новых личных сообщениях"/>
				<p>Получать уведомления на:</p>			
				<FormControlLabel control={<Switch name="eMail" inputProps={{ 'aria-label': 'secondary checkbox' }} />} label="Почта"/>
				<FormControlLabel control={<Switch name="SMS" inputProps={{ 'aria-label': 'secondary checkbox' }} />} label="СМС"/>
			</div>
		)
	}
}