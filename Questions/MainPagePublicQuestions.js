import React, { Component } from 'react';
import './Questions.css';
export default class MainPagePublicQuestions extends Component {
	constructor() {
    	super();
  	}   
	async componentDidMount() { }
	render() {
		return(
			<div id="publicQuestions" className="col p-0 row m-0 ">
				<div id="publicQuestionsForm" className="container mx-auto row">
					<div className="col-12 col-md-4 col-lg-4">
						<h2>Задайте ваш вопрос</h2>
						<p>И получите ответ на него от одного из наших юристов совершенно бесплатно</p>
					</div>
					<div className="col-12 col-md-8 col-lg-8 row m-0 justify-content-between">
						<textarea className="col-12" placeholder="Ваш вопрос"></textarea>
						<input className="col-12 col-lg-5 col-xl-4" type="text" placeholder="Имя" /><input className="col-12 col-lg-5 col-xl-4" type="text" placeholder="Телефон" /><input className="btn col-lg-4 col-xl-3 mx-lg-auto ml-xl-0 mr-xl-0" id="mainPageSendMessage" type="submit" value="Отправить" />
					</div>
				</div>				
			</div>
		)
	}
}