import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField  from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button  from '@material-ui/core/Button';

import '../PersonalAccount.css';

export default class Adress extends Component {
	constructor() {
    	super();
    	this.state = {
    		coutries:['Россия'],//Сюда добавлять новые страны,дальше все работает автоматически
    		coutriesOutput:[],
    		states:['Московская область'],//Сюда добавлять новые области,дальше все работает автоматически
    		statesOutput:[],
    		cities:['г.Лобня','г.Москва'],//Сюда добавлять новые города,дальше все работает автоматически
    		citiesOutput:[],
    		adresa:[
    			{
					country:'Россия',
					state:'Московская область',
					city:'г.Лобня'
				},
				{
					country:'Россия',
					state:'Московская область',
					city:'г.Москва'
				}
    		],
    		addresOutput:[],
    		edittingID:0,
    		edittingCountry:'',
    		edittingState:'',
    		edittingCity:'',
    		addCountry:'',
    		addState:'',
    		addCity:'',
    	}
    	this.handleChangeAddData = this.handleChangeAddData.bind(this);
    	this.editAddres = this.editAddres.bind(this);
    	this.saveEdits = this.saveEdits.bind(this);
    	this.addNewAddres = this.addNewAddres.bind(this);
  	}   
	async componentDidMount() {
		let addresOutput = [];
		for(let i = 0; i < this.state.adresa.length;i++){
			addresOutput.push(
				<div id={"addresBlock-"+i}>
					<div className="addres">{this.state.adresa[i].country}, {this.state.adresa[i].state}, {this.state.adresa[i].city}</div>
					<div className="editAddres" onClick={() => { this.editAddres(i) }}>Редактировать</div>
				</div>
			)
		}				
		let coutriesOutput = [];
		for(let i = 0; i < this.state.coutries.length;i++) coutriesOutput.push(<MenuItem value={this.state.coutries[i]}>{this.state.coutries[i]}</MenuItem>)
		let statesOutput = [];
		for(let i = 0; i < this.state.states.length;i++) statesOutput.push(<MenuItem value={this.state.states[i]}>{this.state.states[i]}</MenuItem>)
		let citiesOutput = [];
		for(let i = 0; i < this.state.cities.length;i++) citiesOutput.push(<MenuItem value={this.state.cities[i]}>{this.state.cities[i]}</MenuItem>)
		this.setState({
			addresOutput:addresOutput,
			coutriesOutput:coutriesOutput,
			statesOutput:statesOutput,
			citiesOutput:citiesOutput
		});
	}
	editAddres = (id) =>{
		this.setState({	
			edittingID:id,
			edittingCountry:this.state.adresa[id].country,
			edittingState:this.state.adresa[id].state,
			edittingCity:this.state.adresa[id].city
		})
		document.getElementById('NewAdress').classList.add('d-none');
		document.getElementById('EditAddres').classList.remove('d-none');
		document.getElementById('EditAddres').classList.add('d-flex');
	}
	handleChangeEditData = (element,e) =>{
		if(element == 'edittingCountry') this.setState({edittingCountry:e.nativeEvent.target.innerText})
		if(element == 'edittingState') this.setState({edittingState:e.nativeEvent.target.innerText})
		if(element == 'edittingCity') this.setState({edittingCity:e.nativeEvent.target.innerText})
	}
	handleChangeAddData = (element,e) =>{
		if(element == 'addCountry') this.setState({addCountry:e.nativeEvent.target.innerText})
		if(element == 'addState') this.setState({addState:e.nativeEvent.target.innerText})
		if(element == 'addCity') this.setState({addCity:e.nativeEvent.target.innerText})
	}
	saveEdits = () =>{
		let newCoutry = this.state.edittingCountry;
		let newState = this.state.edittingState;
		let newCity = this.state.edittingCity;
		let newAdres = (
			<div id={"addresBlock-"+this.state.edittingID}>
				<div className="addres">{newCoutry}, {newState}, {newCity}</div>
				<div className="editAddres" onClick={() => { this.editAddres(this.state.edittingID) }}>Редактировать</div>
			</div>
		)
		let addresOutput = []; let newAdresa = [];
		for(let i = 0; i < this.state.adresa.length;i++){

			if(i == this.state.edittingID){
				newAdresa.push({
					country:newCoutry,
					state:newState,
					city:newCity
				})
				addresOutput.push(newAdres)
			}
			else{
				newAdresa.push({
					country:this.state.adresa[i].country,
					state:this.state.adresa[i].state,
					city:this.state.adresa[i].city
				})
				addresOutput.push(
					<div id={"addresBlock-"+i}>
						<div className="addres" >{this.state.adresa[i].country}, {this.state.adresa[i].state}, {this.state.adresa[i].city}</div>
						<div className="editAddres" onClick={() => { this.editAddres(i) }}>Редактировать</div>
					</div>
				)
			}			
		}
		if( (this.state.coutries.includes(newCoutry,0))&&(this.state.states.includes(newState,0))&&(this.state.cities.includes(newCity,0)) ){
			this.setState({
				adresa:newAdresa,
				addresOutput:addresOutput
			});	
		}
		document.getElementById('NewAdress').classList.remove('d-none');
		document.getElementById('EditAddres').classList.remove('d-flex');
		document.getElementById('EditAddres').classList.add('d-none');
	}
	addNewAddres = () =>{
		let AddCoutry = this.state.addCountry;
		let AddState = this.state.addState;
		let AddCity = this.state.addCity;

		let addresOutput = []; let newAdresa = [];
		console.log(AddCoutry,AddState,AddCity);
		if( (this.state.coutries.includes(AddCoutry,0))&&(this.state.states.includes(AddState,0))&&(this.state.cities.includes(AddCity,0)) ){
			for(let i = 0; i < this.state.adresa.length;i++){
				newAdresa.push({
					country:this.state.adresa[i].country,
					state:this.state.adresa[i].state,
					city:this.state.adresa[i].city
				})
				addresOutput.push(
					<div id={"addresBlock-"+i}>
						<div className="addres" >{this.state.adresa[i].country}, {this.state.adresa[i].state}, {this.state.adresa[i].city}</div>
						<div className="editAddres" onClick={() => { this.editAddres(i) }}>Редактировать</div>
					</div>
				)			
			}
			let ID = newAdresa.length;
			newAdresa.push({
				country:AddCoutry,
				state:AddState,
				city:AddCity
			})
			addresOutput.push(
				<div id={"addresBlock-"+ID}>
					<div className="addres">{AddCoutry}, {AddState}, {AddCity}</div>
					<div className="editAddres" onClick={() => { this.editAddres(ID) }}>Редактировать</div>
				</div>
			)			
			this.setState({
				adresa:newAdresa,
				addresOutput:addresOutput
			},console.log(this.state,newAdresa,addresOutput));	
		}
	}
	render() {
		return(
			<div id="Adress" className="mx-auto col-lg-9">
				<div id="EditAddres" className="d-none flex-column">
					<h2 className="col-12 p-0">Редактировать адрес</h2>
				    <FormControl className="col-12">
				        <InputLabel id="edit-country-label">Страна</InputLabel>
				        <Select labelId="country-label" id="edit-country" fullWidth value={this.state.edittingCountry} onChange={(e) => { this.handleChangeEditData('edittingCountry',e) }}>
				          {this.state.coutriesOutput}
				        </Select>
				    </FormControl>
				    <FormControl className="col-12">
				        <InputLabel id="edit-state-label">Область</InputLabel>
				        <Select labelId="state-label" fullWidth id="edit-state" value={this.state.edittingState} onChange={(e) => { this.handleChangeEditData('edittingState',e) }}>
				          {this.state.statesOutput}
				        </Select>
				    </FormControl>
				    <FormControl className="col-12">
				        <InputLabel id="edit-city-label">Город</InputLabel>
				        <Select labelId="city-label" fullWidth id="edit-city" value={this.state.edittingCity} onChange={(e) => { this.handleChangeEditData('edittingCity',e) }}>
				          {this.state.citiesOutput}
				        </Select>
				    </FormControl>
					<form noValidate autoComplete="off" className="d-flex flex-column mt-2">
						<TextField label="Населенный пункт" id="EditSetElement" variant="outlined" />
					</form>
					<form noValidate autoComplete="off" className="d-flex flex-row justify-content-between mt-2">
						<TextField label="№ дома" variant="outlined" />
						<TextField label="№ офиса"  variant="outlined" />
					</form>
					<Button id="saveEdits" variant="contained" className="col-12 col-md-5 mx-auto mt-4" onClick={this.saveEdits}>
			          Сохранить изменения
			        </Button>
				</div>
				<div id="NewAdress">
					<h2 className="col-12 p-0">Адреса</h2>
					{this.state.addresOutput}
					<div id="addNewAddres">
						<h2 className="col-12 p-0">Добавить адрес</h2>
					    <FormControl className="col-12">
					        <InputLabel id="country-label">Страна</InputLabel>
					        <Select labelId="country-label" fullWidth onChange={(e) => { this.handleChangeAddData('addCountry',e) }}>
					          {this.state.coutriesOutput}
					        </Select>
					    </FormControl>
					    <FormControl className="col-12">
					        <InputLabel id="state-label">Область</InputLabel>
					        <Select labelId="state-label" fullWidth onChange={(e) => { this.handleChangeAddData('addState',e) }}>
					          {this.state.statesOutput}
					        </Select>
					    </FormControl>
					    <FormControl className="col-12">
					        <InputLabel id="city-label">Город</InputLabel>
					        <Select labelId="city-label" fullWidth onChange={(e) => { this.handleChangeAddData('addCity',e) }}>
					          {this.state.citiesOutput}
					        </Select>
					    </FormControl>
						<form noValidate autoComplete="off" className="d-flex flex-column mt-2">
							<TextField label="Населенный пункт" id="setelement" variant="outlined" />
						</form>
						<form noValidate autoComplete="off" className="d-flex flex-row justify-content-between mt-2">
							<TextField label="№ дома" variant="outlined" />
							<TextField label="№ офиса"  variant="outlined" />
						</form>
						<Button id="addNewAddresButton" variant="contained" className="col-12 col-md-5 mx-auto mt-4" onClick={this.addNewAddres}>
				          Добавить адрес
				        </Button>
					</div>				
				</div>
			</div>
		);
	}
}