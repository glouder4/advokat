import React, { Component } from 'react';
import TextField  from '@material-ui/core/TextField';
import UserPageMessages from './UserPageMessages.js';
import { Link } from "react-router-dom";

import './Questions.css';

function responseQuestion(toState,questionNumber){
	toState.setState({numberOfQuestionForResponse:questionNumber});
	let enteringQuestion = document.getElementById('enteringQuestion').value;
	let name = (toState.state.name).toString(); let lastName = (toState.state.lastName).toString();
	if(enteringQuestion === '') toState.setState({questionDataEmpty:'questionEmpty'});
	else{
		toState.setState({questionDataEmpty:''});
		document.querySelector('#collapse'+questionNumber+'>.card-body>.conversations').innerHTML += `
			<article class="selfMessage row ml-0 mr-0">
	      		<div class="articleInfo row m-0 col-12 col-md-3">
	      			`+name+' '+lastName+`
	      			<span class="col-12 p-0">01.09.2020 15:00</span>
	      		</div>
	      		<div class="articleData col"><code>`+enteringQuestion+`</code></div>
	      	</article>
		`; 
	}
	document.getElementById('enteringQuestion').value = '';
}

function askQuestion(toState,questionNumber){
  		let questions = toState.state.selfQuestions;

  		let questionTheme = document.getElementById('questionTheme').value;
  		let enteringQuestion = document.getElementById('enteringQuestion').value;

  		if(questionTheme === '') toState.setState({questionThemeEmpty:'questionEmpty'});
  		if(enteringQuestion === '') toState.setState({questionDataEmpty:'questionEmpty'});
  		if( (questionTheme !== '')&&(enteringQuestion != '') ){
  			toState.setState({questionThemeEmpty:''});
  			toState.setState({questionDataEmpty:''});
  			questions.push(
				<div className="card last-question">
				    <div className="card-header" id={"lastQuestionHeading"+questions.length+1}>
				      <h5 className="mb-0">
				        <button className="btn btn-link" data-toggle="collapse" data-target={"#collapse"+questions.length+1} aria-expanded="false" aria-controls="collapse">
				          {questionTheme}
				        </button>
				      </h5>
				    </div>

				    <div id={"collapse"+questions.length+1} className="collapse" aria-labelledby={"lastQuestionHeading"+questions.length+1} data-parent="#last-questions">
				      <div className="card-body">
				      	<div className="card-body col-lg-10 mx-auto">
					      	<div className="conversations">
					      		<article className="advokatResponse row ml-0 mr-0">
						      		<div className="articleInfo row m-0 col-12 col-md-3">
						      			Алексей Фанкин
						      			<span className="col-12 p-0">01.09.2020 15:00</span>
						      		</div>
						      		<div className="articleData col">Сообщение</div>
						      	</article>
						      	<article className="selfMessage row ml-0 mr-0">
						      		<div className="articleInfo row m-0 col-12 col-md-3">
						      			{toState.state.name} {toState.state.lastName}
						      			<span className="col-12 p-0">01.09.2020 15:00</span>
						      		</div>
						      		<div className="articleData col">Сообщение</div>
						      	</article>
					      	</div>
					      	<div id={"questionData2"+questions.length+1} className="questionData row ml-0 mr-0">
					      		<div className="responseButton btn mx-auto" onClick={ function(){
					      				toState.setState({numberOfQuestionForResponse:questions.length+1});
					      				document.getElementById("last-questions").classList.add("hide"); 
			   							document.getElementById("enteringQuestion").classList.add("deploy"); 
					      			}
					      		}>Ответить</div>
					      		<div className="quitResponseButton btn mx-auto">Завершить вопрос</div>
					      	</div>			        
					      </div>			        
				      </div>
				    </div>
				</div>
			)
			toState.setState({selfQuestions:questions});
			document.getElementById('questionTheme').value = '';
  			document.getElementById('enteringQuestion').value = '';
  		}  		
}
let toState = '';
export default class UserPageQuestions extends Component {
	constructor() {
    	super();
    	this.state = {
      		ready:false,
      		name:'Андрей',
      		lastName:'Егоров',
      		selfQuestions:[],
      		questionThemeEmpty: '',
      		questionDataEmpty: '',
      		numberOfQuestionForResponse:0
    	};
    	this.questionEntering= this.questionEntering.bind(this);
    	this.handleOuterClick= this.handleOuterClick.bind(this);
  	}     	
	async componentDidMount() { 	
		toState = this;	   	
		document.addEventListener('click', this.handleOuterClick);
		let questions = [];
		questions.push(
			<div className="card last-question">
			    <div className="card-header" id="lastQuestionHeading1">
			      <h5 className="mb-0">
			        <button className="btn btn-link" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse">
			          Разворачиваемая панель #1
			        </button>
			      </h5>
			    </div>

			    <div id="collapse1" className="collapse" aria-labelledby="lastQuestionHeading1" data-parent="#last-questions">
			      <div className="card-body col-lg-10 mx-auto">
			      	<div className="conversations">
			      		<article className="advokatResponse row ml-0 mr-0">
				      		<div className="articleInfo row m-0 col-12 col-md-3">
				      			Алексей Фанкин
				      			<span className="col-12 p-0">01.09.2020 15:00</span>
				      		</div>
				      		<div className="articleData col">Сообщение</div>
				      	</article>
				      	<article className="selfMessage row ml-0 mr-0">
				      		<div className="articleInfo row m-0 col-12 col-md-3">
				      			{toState.state.name} {toState.state.lastName}
				      			<span className="col-12 p-0">01.09.2020 15:00</span>
				      		</div>
				      		<div className="articleData col">Сообщение</div>
				      	</article>
			      	</div>
			      	<div id="questionData1" className="questionData row ml-0 mr-0">
			      		<div className="responseButton btn mx-auto" onClick={ function(){
			      				toState.setState({numberOfQuestionForResponse:1});
			      				document.getElementById("last-questions").classList.add("hide"); 
	   							document.getElementById("enteringQuestion").classList.add("deploy"); 
			      			}
			      		}>Ответить</div>
			      		<div className="quitResponseButton btn mx-auto">Завершить вопрос</div>
			      	</div>			        
			      </div>
			    </div>
			  </div>
		)
		questions.push(
			<div className="card last-question">
			    <div className="card-header" id="lastQuestionHeading2">
			      <h5 className="mb-0">
			        <button className="btn btn-link" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse">
			          Разворачиваемая панель #1
			        </button>
			      </h5>
			    </div>

			    <div id="collapse2" className="collapse" aria-labelledby="lastQuestionHeading2" data-parent="#last-questions">
			      <div className="card-body col-lg-10 mx-auto">
			      	<div className="conversations">
			      		<article className="advokatResponse row ml-0 mr-0">
				      		<div className="articleInfo row m-0 col-12 col-md-3">
				      			Алексей Фанкин
				      			<span className="col-12 p-0">01.09.2020 15:00</span>
				      		</div>
				      		<div className="articleData col">Сообщение</div>
				      	</article>
				      	<article className="selfMessage row ml-0 mr-0">
				      		<div className="articleInfo row m-0 col-12 col-md-3">
				      			{toState.state.name} {toState.state.lastName}
				      			<span className="col-12 p-0">01.09.2020 15:00</span>
				      		</div>
				      		<div className="articleData col">Сообщение</div>
				      	</article>
			      	</div>			      		
			      	<div id="questionData2" className="questionData row ml-0 mr-0">
			      		<div className="responseButton btn mx-auto" onClick={ function(){
			      				toState.setState({numberOfQuestionForResponse:2});
			      				document.getElementById("last-questions").classList.add("hide"); 
	   							document.getElementById("enteringQuestion").classList.add("deploy"); 
			      			}
			      		}>Ответить</div>
			      		<div className="quitResponseButton btn mx-auto">Завершить вопрос</div>
			      	</div>		        
			      </div>
			    </div>
			  </div>
		)
		await this.setState({
			selfQuestions:questions,
			ready:true
		});
  	}  
  	handleOuterClick = (e) =>{
	    const questionsBlock = document.getElementById('enteringQuestion');
	   	if ((!e.path.includes(questionsBlock))&&(e.path[0].innerText !== 'Ответить')){
	   		if(document.getElementById('last-questions') != null) document.getElementById('last-questions').classList.remove("hide");
	   		if(document.getElementById('enteringQuestion') != null) document.getElementById('enteringQuestion').classList.remove("deploy");
	   	}
	   	if(e.path[0].innerText === 'Задайте Вопрос') toState.setState({numberOfQuestionForResponse:0});
	}
  	questionEntering = (e) =>{
	    document.getElementById("last-questions").classList.add("hide"); 
	    document.getElementById("enteringQuestion").classList.add("deploy"); 
	    toState.setState({questionDataEmpty:''});
	    toState.setState({questionThemeEmpty:''});
  	}
  	render() {  
  		if(!this.state.ready) return( 
  			<div className="container-fluid mx-auto">
				Пока пусто
			</div>
  		);	
  		if(this.state.numberOfQuestionForResponse !== 0){
  			return(
	  			<div id="MainPagePublicQuestions" className="container-fluid mx-auto col-lg-9">
					<div className="p-0 row mx-auto">					
						<div className="col-12">
							<div className="row ml-0 mr-0 justify-content-between">
								<h3>Мои вопросы</h3><h3><Link className="nav-link" id="toMessages" to="/Messages">Мои сообщения</Link></h3>
							</div>							
							<div id="last-questions">						  
							  {this.state.selfQuestions}
							</div>
							<div className="ui-items p-0">
								<form className={"d-none  "+this.state.questionThemeEmpty} noValidate autoComplete="off">
						          <TextField id="questionTheme" type="text" label="Тема" maxlength="75" className="col-9" />          
						        </form>
								<div className={""+this.state.questionDataEmpty}>
									<p>Ваш вопрос: </p> <textarea id="enteringQuestion" onClick={this.questionEntering} rows="1" className=" col-md-12 col-lg-12" name="Ваш запрос" placeholder="ваш вопрос"></textarea>
								</div>							
								<input type="submit" onClick={function(){ responseQuestion(toState,toState.state.numberOfQuestionForResponse) }} className="col-lg-4 col-md-4 text_form"/>
							</div>						
						</div>
					</div>
				</div>
	  		);
  		}  
  		else{
  			let questionDataOutput = []; let questionThemeOutput = [];
  			if(this.state.questionDataEmpty != '') questionDataOutput = (
  				<TextField
		          error
		          id="enteringQuestion"
		          label="Ошибка"
		          defaultValue=""
		          helperText="Incorrect entry."
		          variant="outlined"
		          multiline
		          className=" col-md-12 col-lg-12"
		          onClick={this.questionEntering}
		        />
  			);
  			else questionDataOutput = (
  				<TextField
		          id="enteringQuestion"
		          label="Ваш вопрос"
		          defaultValue=""
		          variant="outlined"
		          multiline
		          className=" col-md-12 col-lg-12"
		          onClick={this.questionEntering}
		        />
  			);
  			if(this.state.questionThemeEmpty != '') questionThemeOutput = (
  				<TextField error id="questionTheme" type="text" label="Ошибка" helperText="Incorrect entry." variant="outlined" maxlength="75" className="col-9" />
  				);
  			else questionThemeOutput =(
  				<TextField id="questionTheme" type="text" label="Тема" variant="outlined" maxlength="75" className="col-9" />
  			);
			return(
	  			<div id="MainPagePublicQuestions" className="container-fluid mx-auto col-lg-9">
					<div className="p-0 row mx-auto">					
						<div className="col-12">
							<div className="row ml-0 mr-0 justify-content-between">
								<h3 onClick={function(){ toState.setState({activeMessages:false}) }}>Мои вопросы</h3><h3><Link className="nav-link" id="toMessages" to="/Messages">Мои сообщения</Link></h3>
							</div>	
							<div id="last-questions">						  
							  {this.state.selfQuestions}
							</div>
							<div className="ui-items p-0">
								<form className={""+this.state.questionThemeEmpty} noValidate autoComplete="off">
						          {questionThemeOutput}         
						        </form>
								<div className={""+this.state.questionDataEmpty}>
									{questionDataOutput}
								</div>							
								<input type="submit" onClick={function(){ askQuestion(toState,toState.state.numberOfQuestionForResponse) }} className="col-lg-4 col-md-4 text_form"/>
							</div>						
						</div>
					</div>
				</div>
	  		);	
  		}		 
	}
}