import React, { Component } from 'react';
import './LeftSidebar.css';
import Redirect from 'react-router-dom'

import advokat from '../LastQuestions/advokat.png';

import UserPageQuestions from '../Questions/UserPageQuestions.js';
import PersonalAccountSettings from '../PersonalAccount/PersonalAccountSettings.js';
import PersonalAccountBalance from '../PersonalAccount/PersonalAccountBalance.js';
import PriceList from '../PersonalAccount/executor/PriceList.js';
import Career from '../PersonalAccount/executor/Career.js';
import DeleteAccount from '../PersonalAccount/DeleteAccount.js';
import Education from '../PersonalAccount/executor/Education.js';
import Adress from '../PersonalAccount/executor/Adress.js';
import SubscribtionsAndNotifications from '../PersonalAccount/executor/SubscribtionsAndNotifications.js';
import ChangePassword from '../PersonalAccount/ChangePassword.js';

export default class LeftSidebar extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		lastActive:0,
    		balance:0,
    		isExecutor:false,
    		toUpdate:''
    	}
  	}   
	async componentDidMount() {
		document.addEventListener('click', this.handleOuterClick);	
		this.setState(
		{
			balance:this.props.balance,
			isExecutor:this.props.isExecutor,
			toUpdate:this.props.componentToUpdate
		},
		function(){
			document.querySelectorAll('#leftSidebar>ul>li')[0].classList.add('active');
			console.log('update',this.state.toUpdate);
		});
	}
	handleOuterClick = (e) =>{
	    const leftSidebar = document.getElementById('leftSidebar');
	   	if (e.path.includes(leftSidebar)){
	   		document.querySelectorAll('#leftSidebar>ul>li')[this.state.lastActive].classList.remove('active');
	   		if(this.state.isExecutor){
	   			if(e.path[0].innerText === 'Мои сообщения'){ this.state.toUpdate.setState({activeElement:(<UserPageQuestions />)}); this.setState({lastActive:0}); }
	   			if(e.path[0].innerText.split(' ')[0] === 'Баланс'){ this.state.toUpdate.setState({activeElement:(<PersonalAccountBalance balance={this.state.balance} isExecutor={this.state.isExecutor} />)} ); this.setState({lastActive:1}); }
	   			if(e.path[0].innerText === 'Контактные данные'){ this.state.toUpdate.setState({activeElement:(<PersonalAccountSettings />)}); this.setState({lastActive:2}); }
	   			if(e.path[0].innerText === 'Карьера'){ this.state.toUpdate.setState({activeElement:(<Career />)}); this.setState({lastActive:3}); }
	   			if(e.path[0].innerText === 'Образование'){ this.state.toUpdate.setState({activeElement:(<Education />)}); this.setState({lastActive:4}); }
	   			if(e.path[0].innerText === 'Прайс-лист'){ this.state.toUpdate.setState({activeElement:(<PriceList />)}); this.setState({lastActive:5}); }
	   			if(e.path[0].innerText === 'Адрес'){ this.state.toUpdate.setState({activeElement:(<Adress />)}); this.setState({lastActive:6}); }
	   			if(e.path[0].innerText === 'Подписки и уведомления'){ this.state.toUpdate.setState({activeElement:(<SubscribtionsAndNotifications />)}); this.setState({lastActive:7}); }
	   			if(e.path[0].innerText === 'Смена пароля'){ this.state.toUpdate.setState({activeElement:(<ChangePassword />)}); this.setState({lastActive:8}); }
	   			if(e.path[0].innerText === 'Социальные аккаунты'){ this.state.toUpdate.setState({activeElement:(<UserPageQuestions />)}); this.setState({lastActive:9}); }
	   			if(e.path[0].innerText === 'Черный список'){ this.state.toUpdate.setState({activeElement:(<UserPageQuestions />)}); this.setState({lastActive:10}); }
	   			if(e.path[0].innerText === 'Быстрые ответы'){ this.state.toUpdate.setState({activeElement:(<UserPageQuestions />)}); this.setState({lastActive:11}); }
	   			if(e.path[0].innerText === 'Удалить анкету'){ this.state.toUpdate.setState({activeElement:(<DeleteAccount />)}); this.setState({lastActive:9}); }
	   		}
	   		else{
		   		if(e.path[0].innerText === 'Мои сообщения'){ this.state.toUpdate.setState({activeElement:(<UserPageQuestions />)}); this.setState({lastActive:0}); }
		   		if(e.path[0].innerText === 'Настройка анкеты'){ this.state.toUpdate.setState({activeElement:(<PersonalAccountSettings />)}); this.setState({lastActive:1}); }
		   		if(e.path[0].innerText.split(' ')[0] === 'Баланс'){ this.state.toUpdate.setState({activeElement:(<PersonalAccountBalance />)}); this.setState({lastActive:2}); }
		   		if(e.path[0].innerText === 'Удалить анкету'){ this.state.toUpdate.setState({activeElement:(<DeleteAccount />)}); this.setState({lastActive:3}); }
		    }
		    document.querySelectorAll('#leftSidebar>ul>li')[this.state.lastActive].classList.add('active');
	   	}
	}
	render() {
		if(this.state.isExecutor){
			return(
				<div id="leftSidebar" className="col-md-3 executor info_form_buttons mx-auto">
					<img src={advokat} />
					<span className="btn" onClick={() => { window.location.replace("/Messages"); }}>Написать администратору</span>
					<span className="btn">Опубликовать статью</span>
					<ul className="col-11 mx-auto">
						<li>Мои сообщения</li>
						<li>Баланс ({this.state.balance} р.)</li>
						<li>Контактные данные</li>
						<li>Карьера</li>
						<li>Образование</li>
						<li>Прайс-лист</li>
						<li>Адрес</li>
						<li>Подписки и уведомления</li>
						<li>Смена пароля</li>
						{/*<li>Социальные аккаунты</li>
						<li>Черный список</li>
						<li>Быстрые ответы</li>*/}
						<li>Удалить анкету</li>
					</ul>
				</div>
			)
		}
		else{
			return(
				<div id="leftSidebar" className="col-md-3 info_form_buttons mx-auto">
					<span className="btn">Задайте Вопрос</span>
					<span className="btn">Найти юриста</span>
					<ul className="col-11 mx-auto">
						<li>Мои сообщения</li>
						<li>Настройка анкеты</li>
						<li>Баланс ({this.state.balance} р.)</li>
						<li>Удалить анкету</li>
					</ul>
				</div>
			)
		}		
	}
}