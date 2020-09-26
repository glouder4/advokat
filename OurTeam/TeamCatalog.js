import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class TeamCatalog extends Component {
	constructor() {
    	super(); 
    	this.state = {
    		countOfExecutors:0
    	}
  	}   
	async componentDidMount() { }
	render() {
		return(
			<div id="teamCatalog" className="col p-0 row m-0 ">
				<div id="searchTeamForm" className="col-11 col-md-8 mx-auto">
					<div className="col-12 text-center">
						<h2>Задайте ваш вопрос</h2>
						<p>И получите ответ на него от одного из наших юристов совершенно бесплатно</p>
					</div>
					<div className="col-12 row m-0 justify-content-between">
						<FormControl className="col-12 col-md-4 col-lg-3" variant="outlined">
					        <InputLabel>Страна</InputLabel>
					        <Select label="Страна">
					          <MenuItem value={10}>Ten</MenuItem>
					          <MenuItem value={20}>Twenty</MenuItem>
					          <MenuItem value={30}>Thirty</MenuItem>
					        </Select>
					    </FormControl>
					    <FormControl className="col-12 mt-3 mt-md-0 col-md-4 col-lg-3" variant="outlined">
					        <InputLabel>Регион</InputLabel>
					        <Select label="Регион">
					          <MenuItem value={10}>Ten</MenuItem>
					          <MenuItem value={20}>Twenty</MenuItem>
					          <MenuItem value={30}>Thirty</MenuItem>
					        </Select>
					    </FormControl>
					    <FormControl className="col-12 mt-3 mt-md-0 col-md-4 col-lg-3" variant="outlined">
					        <InputLabel>Город</InputLabel>
					        <Select label="Город">
					          <MenuItem value={10}>Ten</MenuItem>
					          <MenuItem value={20}>Twenty</MenuItem>
					          <MenuItem value={30}>Thirty</MenuItem>
					        </Select>
					    </FormControl>
					    <FormControl className="col-12 mt-3" variant="outlined">
					        <InputLabel>Специализация</InputLabel>
					        <Select label="Специализация">
					          <MenuItem value={10}>Ten</MenuItem>
					          <MenuItem value={20}>Twenty</MenuItem>
					          <MenuItem value={30}>Thirty</MenuItem>
					        </Select>
					    </FormControl>
					    <form noValidate autoComplete="off" className="col-12 row m-0 p-0 justify-content-between mt-3">
						  <TextField label="ФИО юриста/адвоката или название фирмы" variant="outlined" className="col-9" />
						  <Button className="col-2" variant="contained">Найти</Button>
						</form>
					</div>
					<div className="col-12 text-center mt-3">
						<p>Сейчас на сайте зарегистрировано {this.state.countOfExecutors}</p>
					</div>
				</div>				
			</div>
		)
	}
}