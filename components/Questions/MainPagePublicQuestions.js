import React, { Component } from 'react';
import './Questions.css';
export default class MainPagePublicQuestions extends Component {
	constructor() {
    	super();
    	this.state = {
      		ready:false
    	};
    	this.questionEntering= this.questionEntering.bind(this);
    	this.handleOuterClick= this.handleOuterClick.bind(this);
  	}   
	async componentDidMount() {    	
		document.addEventListener('click', this.handleOuterClick);
   		await this.setState({ready:true});
  	}
  	handleOuterClick = (e) =>{
	    const questionsBlock = document.getElementById('enteringQuestion');
	    console.log(e.path);
	   	if (!e.path.includes(questionsBlock)) document.getElementById('last-questions').classList.remove("hide");
	}
  	questionEntering = (e) =>{
	    document.getElementById("last-questions").classList.add("hide"); 
  	}
  	render() {  
  		if(!this.state.ready) return( 
  			<div className="container-fluid mx-auto">
				Пока пусто
			</div>
  		);	
  		return(
  			<div id="MainPagePublicQuestions" className="container-fluid mx-auto">
				<div className="col-lg-10 p-0 col-md-8 row mx-auto">
					<div className="col-lg-3 col-md-3 info_form_buttons">
						<span className="btn">Задайте Вопрос</span>
					</div>
					<div className="col-lg-9 col-md-9">
						<div id="last-questions">
						  <div class="card last-question">
						    <div class="card-header" id="lastQuestionHeading1">
						      <h5 class="mb-0">
						        <button class="btn btn-link" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
						          Разворачиваемая панель #1
						        </button>
						      </h5>
						    </div>

						    <div id="collapse1" class="collapse" aria-labelledby="lastQuestionHeading1" data-parent="#last-questions">
						      <div class="card-body">
						        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
						      </div>
						    </div>
						  </div>
						  <div class="card last-question">
						    <div class="card-header" id="lastQuestionHeading2">
						      <h5 class="mb-0">
						        <button class="btn btn-link" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse1">
						          Разворачиваемая панель #1
						        </button>
						      </h5>
						    </div>

						    <div id="collapse2" class="collapse" aria-labelledby="lastQuestionHeading2" data-parent="#last-questions">
						      <div class="card-body">
						        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
						      </div>
						    </div>
						  </div>
						</div>
						<div className="ui-items p-0">
							<textarea id="enteringQuestion" onClick={this.questionEntering} rows="1" className=" col-md-12 col-lg-12" name="Ваш запрос" placeholder="ваш вопрос"></textarea>
							<input type="text" className="col-lg-4 col-md-4 text_form"/>
							<input type="text"  className="col-lg-4 col-md-4  text_form"/>
							<input type="submit"  className="col-lg-4 col-md-4 text_form"/>
						</div>						
					</div>
				</div>
			</div>
  		); 
	}
}