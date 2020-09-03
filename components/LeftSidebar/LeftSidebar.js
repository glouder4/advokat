import React, { Component } from 'react';
import './LeftSidebar.css';
export default class LeftSidebar extends Component {
	constructor() {
    	super();
  	}   
	async componentDidMount() { }
	render() {
		return(
			<div className="col-md-3 info_form_buttons mx-auto">
				<span className="btn">Задайте Вопрос</span>
				<span className="btn">Найти юриста</span>
				<ul class="col-11 mx-auto">
					<li>Мои вопросы</li>
					<li>Мои сообщения</li>
					<li>Настройка анкеты</li>
					<li>Баланс</li>
					<li>Удалить анкету</li>
				</ul>
			</div>
		)
	}
}