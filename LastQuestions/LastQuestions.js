import React, { Component } from 'react';
import './LastQuestions.css';
import advokat from './advokat.png'
export default class LastQuestions extends Component {
	constructor() {
    	super();
  	}   
	async componentDidMount() { }
	render() {
		return(
			<div id='LastQuestionsSlider' className="container-fluid mx-auto">
				<div className="col-12 block_2_text">Последние вопросы</div>
				<div id="LastQuestions" class="carousel slide" data-ride="carousel">
				  <div class="carousel-inner">
				    <div class="carousel-item active">
				      <div className="col-8 mx-auto p-0">Вопрос от Александра Иванова</div>
				      <div className="questionData col-8 mx-auto">
				      	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. In culpa qui officia deserunt mollit anim id est laborum.</p>
				      </div>
				      <div className="col-8 mx-auto row ml-0 mr-0 p-0">
				      	<div className="col-12 col-md-4 col-lg-3 p-0">
				      		<div class="col-11 mx-auto p-0 text-center">
				      			<img src={advokat} />
				      			<p style={{fontWeight:'bold'}}>Михаил Петров</p>
				      			<p>Юрист по семейным делам</p>
				      		</div>				      		
				      	</div>
				      	<div className="questionAnswer col-12 col-md-8 col-lg-9">
				      		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. In culpa qui officia deserunt mollit anim id est laborum.</p>
				      	</div>
				      </div>
				    </div>
				    <div class="carousel-item">
				      <div className="col-8 mx-auto p-0">Вопрос от Александра Иванова</div>
				      <div className="questionData col-8 mx-auto">
				      	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. In culpa qui officia deserunt mollit anim id est laborum.</p>
				      </div>
				      <div className="col-8 mx-auto row ml-0 mr-0 p-0">
				      	<div className="col-12 col-md-4 col-lg-3 p-0">
				      		<div class="col-11 mx-auto p-0 text-center">
				      			<img src={advokat} />
				      			<p style={{fontWeight:'bold'}}>Михаил Петров</p>
				      			<p>Юрист по семейным делам</p>
				      		</div>				      		
				      	</div>
				      	<div className="questionAnswer col-12 col-md-8 col-lg-9">
				      		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. In culpa qui officia deserunt mollit anim id est laborum.</p>
				      	</div>
				      </div>
				    </div>
				    <div class="carousel-item">
				      <div className="col-8 mx-auto p-0">Вопрос от Александра Иванова</div>
				      <div className="questionData col-8 mx-auto">
				      	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. In culpa qui officia deserunt mollit anim id est laborum.</p>
				      </div>
				      <div className="col-8 mx-auto row ml-0 mr-0 p-0">
				      	<div className="col-12 col-md-4 col-lg-3 p-0">
				      		<div class="col-11 mx-auto p-0 text-center">
				      			<img src={advokat} />
				      			<p style={{fontWeight:'bold'}}>Михаил Петров</p>
				      			<p>Юрист по семейным делам</p>
				      		</div>				      		
				      	</div>
				      	<div className="questionAnswer col-12 col-md-8 col-lg-9">
				      		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. In culpa qui officia deserunt mollit anim id est laborum.</p>
				      	</div>
				      </div>
				    </div>
				  </div>
				  <a class="carousel-control-prev" href="#LastQuestions" role="button" data-slide="prev">
				    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				    <span class="sr-only">Previous</span>
				  </a>
				  <a class="carousel-control-next" href="#LastQuestions" role="button" data-slide="next">
				    <span class="carousel-control-next-icon" aria-hidden="true"></span>
				    <span class="sr-only">Next</span>
				  </a>
				</div>
			</div>
		);
	}
}