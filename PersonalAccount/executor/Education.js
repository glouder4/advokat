import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button  from '@material-ui/core/Button';

export default class Education extends Component {
	constructor() {
    	super();
    	this.state = {
    		educationType:'',
    		educationForm:'',
    		country:'',
    		collegeName:'',
    		direction:'',
    		dateOfEnd:''
    	}
  	}   
	async componentDidMount() {}
	render() {
		return(
			<div id="education" className="mx-auto col-lg-9">
				<FormControl className="col-12">
			        <InputLabel>Тип образования</InputLabel>
			        <Select id="education-type" value={this.state.educationType}>
			          <MenuItem value={10}>1</MenuItem>
			          <MenuItem value={20}>2</MenuItem>
			          <MenuItem value={30}>3</MenuItem>
			        </Select>
			      </FormControl>
			      <FormControl className="col-12">
			        <InputLabel>Форма образования</InputLabel>
			        <Select id="education-form" value={this.state.educationForm}>
			          <MenuItem value={10}>Очная</MenuItem>
			          <MenuItem value={20}>Очно-заочная</MenuItem>
			          <MenuItem value={30}>Заочная</MenuItem>
			        </Select>
			      </FormControl>
			      <FormControl className="col-12">
			        <InputLabel>Страна где находится ВУЗ</InputLabel>
			        <Select id="education-form" value={this.state.country}>
			          <MenuItem value={10}>1</MenuItem>
			          <MenuItem value={20}>2</MenuItem>
			          <MenuItem value={30}>3</MenuItem>
			        </Select>
			      </FormControl>
			      <FormControl className="col-12">
			        <InputLabel>Название ВУЗа</InputLabel>
			        <Select id="education-form" value={this.state.collegeName}>
			          <MenuItem value={10}>1</MenuItem>
			          <MenuItem value={20}>2</MenuItem>
			          <MenuItem value={30}>3</MenuItem>
			        </Select>
			      </FormControl>
			      <FormControl className="col-12">
			        <InputLabel>Факультет/специальность</InputLabel>
			        <Select id="education-form" value={this.state.direction}>
			          <MenuItem value={10}>1</MenuItem>
			          <MenuItem value={20}>2</MenuItem>
			          <MenuItem value={30}>3</MenuItem>
			        </Select>
			      </FormControl>
			      <FormControl className="col-12">
			        <InputLabel>Год окончания</InputLabel>
			        <Select id="education-form" value={this.state.dateOfEnd}>
			          <MenuItem value={10}>1</MenuItem>
			          <MenuItem value={20}>2</MenuItem>
			          <MenuItem value={30}>3</MenuItem>
			        </Select>
			      </FormControl>
			        <Button id="saveEducation" variant="contained">
			          Сохранить изменения
			        </Button>
			</div>
		)
	}
}