import React, { Component } from 'react';
import './AskedQuestions.css';
export default class AskedQuestions extends Component {
	constructor() {
    	super();
  	}   
	async componentDidMount() { }
	render() {
		return(
			<div className="container" id="AskedQuestions">
				<div className="col-12 block_2_text">Задано 1023 вопросов</div>
				<div className="row col-lg-12">					
					<ul className="col-lg-6">	
						<p className="text-right">Бесплатных</p>
					    <li>
					    	<span>сегодня</span>
					    	<p>как оспорить неазаконный выписанный штраф за парковку</p>
					    	<span>1 ответ</span>
					    </li> 
					    <li>
					    	<span>сегодня</span>
					    	<p>как оспорить неазаконный выписанный штраф за парковку</p>
					    	<span>2 ответа</span>
					    </li> 
					    <li>
					    	<span>вчера</span>
					    	<p>как оспорить неазаконный выписанный штраф за парковку</p>
					    	<span>4 ответа</span>
					    </li> 
					</ul>					
					<ul className="col-lg-6">
						<p className="text-left">Платных</p>	
						<li>
					    	<span className="text-right">вчера</span>
					    	<p className="text-right">как оспорить неазаконный выписанный штраф за парковку</p>
					    	<span className="text-right">9 ответов</span>
					    </li> 
					     <li>
					    	<span className="text-right">7 октября 2019</span>
					    	<p className="text-right">как оспорить неазаконный выписанный штраф за парковку</p>
					    	<span className="text-right">12 ответов</span>
					    </li> 
					</ul>
					<div className="col-8 col-md-4 mx-auto btn" onClick={function(){ document.getElementById('askCall').classList.remove('d-none'); }}>Заказать Консультацию</div>
				</div>
			</div>
		);
	}
}