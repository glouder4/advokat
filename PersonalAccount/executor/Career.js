import React, { Component } from 'react';
import TextField  from '@material-ui/core/TextField';

import '../PersonalAccount.css';

export default class Career extends Component {
	constructor() {
    	super();
  	}   
	async componentDidMount() {
	}
	render() {
		return(
			<div id="Career" className="mx-auto col-lg-9">
				<h2 className="col-12 p-0">Карьера</h2>
				<form noValidate autoComplete="off" className="d-flex flex-column">
					<TextField label="Место работы" className="careerData" variant="outlined" />
					<TextField label="Должность" className="careerData" variant="outlined" />
				</form>				
				<div className="row ml-0 mr-0 d-flex justify-content-between">
					<TextField label="Стаж работы в данной должности,лет" className="col-12 col-md-5 careerData" variant="outlined" />
					<TextField label="Стаж работы по юридической специальности,лет" className="col-12 col-md-5 careerData" variant="outlined" />
				</div>
				<form noValidate autoComplete="off" className="d-flex flex-column">
					<TextField label="Юридическое образование" className="careerData" variant="outlined" />
					<TextField label="№ в реестре адвокатов" className="careerData" variant="outlined" />
				</form>	
			</div>
		);
	}
}