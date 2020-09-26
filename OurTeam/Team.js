import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import advokat from '../LastQuestions/advokat.png';

export default class Team extends Component {
	constructor() {
    	super(); 
    	this.state = {
    		countOfExecutors:0
    	}
  	}   
	async componentDidMount() { }
	render() {
		return(
			<div id="Team" className="col-12 col-md-10 col-lg-9 mx-auto">
				<div className="teamExecutor row m-0">
					<div className="executorStats col-12 col-md-8">
						<div className="col-8 col-md-7 pl-0 ml-auto pr-0">Петров Михаил Петрович</div>
						<div className="row m-0 ">
							<div className="col-12 col-md-5 text-center">
								<img className="executorPhoto" src={advokat} alt="" />
							</div>
							<div className="col-12 col-md-7 p-0 text-center text-md-left">
								<p className="stat">Рейтинг: 00.0</p>
								<p className="stat">Отзывов: 1000</p>
								<p className="stat">Ответов: 1000</p>
								<p className="stat">Комментариев: 1000</p>
								<p className="stat">Публикаций: 10</p>
								<span className="lastOnline">Заходил(а) сегодня в 11:55</span>
								<div className="btn">Личная консультация</div>
							</div>
						</div>	
					</div>
					<div className="col-12 col-md-4 executorMessage">
						<p>
							Эффективная помощь в сложных ситуациях. Составление притензий, договоров (в том числе купли-продажи бизнеса), судебных документов.
							Помощь должникам в спорах о взыскании кредитной задолжности. Защита прав потребителей. Решение юридических проблем малого и среднего предпринимательства.
							Услуги оказываются только на ПЛАТНОЙ ОСНОВЕ. Стоимость консультаций от 1000 руб.
						</p>
					</div>
				</div>
				<div className="teamExecutor row m-0">
					<div className="executorStats col-12 col-md-8">
						<div className="col-8 col-md-7 pl-0 ml-auto pr-0">Петров Михаил Петрович</div>
						<div className="row m-0 ">
							<div className="col-12 col-md-5 text-center">
								<img className="executorPhoto" src={advokat} alt="" />
							</div>
							<div className="col-12 col-md-7 p-0 text-center text-md-left">
								<p className="stat">Рейтинг: 00.0</p>
								<p className="stat">Отзывов: 1000</p>
								<p className="stat">Ответов: 1000</p>
								<p className="stat">Комментариев: 1000</p>
								<p className="stat">Публикаций: 10</p>
								<span className="lastOnline">Заходил(а) сегодня в 11:55</span>
								<div className="btn">Личная консультация</div>
							</div>
						</div>	
					</div>
					<div className="col-12 col-md-4 executorMessage">
						<p>
							Эффективная помощь в сложных ситуациях. Составление притензий, договоров (в том числе купли-продажи бизнеса), судебных документов.
							Помощь должникам в спорах о взыскании кредитной задолжности. Защита прав потребителей. Решение юридических проблем малого и среднего предпринимательства.
							Услуги оказываются только на ПЛАТНОЙ ОСНОВЕ. Стоимость консультаций от 1000 руб.
						</p>
					</div>
				</div>
			</div>
		)
	}
}