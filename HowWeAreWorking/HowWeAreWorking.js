import React, { Component } from 'react';
import './HowWeAreWorking.css';

import arrow from './arrow.svg'
export default class HowWeAreWorking extends Component {
	constructor() {
    	super();
  	}   
	async componentDidMount() { }
	render() {
		return(
			<div class="container">
				<div class="row">
					<div className="col-12 block_2_text">Как мы работаем</div>
					<div class="col-lg-12 row ml-0 mr-0 d-flex align-items-center">
						<div className="workPoint row m-0 d-flex align-items-center mx-auto">
							<span className="col-2">1</span>
							<p className="col-10">Вы заполняете заявку на сайте</p>
						</div>
						<object type="image/svg+xml" data={arrow} className="d-none d-lg-block">
						  <img src={arrow} />
						</object>
						<div className="workPoint row m-0 d-flex align-items-center mx-auto">
							<span className="col-2">2</span>
							<p className="col-10">Вам через 10 минут звонит юрист</p>
						</div>
						<object type="image/svg+xml" data={arrow} className="d-none d-lg-block">
						  <img src={arrow} />
						</object>
						<div className="workPoint row m-0 d-flex align-items-center mx-auto">
							<span className="col-2">3</span>
							<p className="col-10">Вас консультирует профессиональный юрист</p>
						</div>
						<object type="image/svg+xml" data={arrow} className="d-none d-lg-block">
						  <img src={arrow} />
						</object>
						<div className="workPoint row m-0 d-flex align-items-center mx-auto">
							<span className="col-2">4</span>
							<p className="col-10">Вы получаете ответ на свой вопрос</p>
						</div>
					</div>
					<div  class="col-8 col-md-4 mx-auto">
						<div id="getConsult" className="btn">Получить бесплатную консультацию</div>
					</div>
				</div>
			</div>
		);
	}
}