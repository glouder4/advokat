import React, { Component } from 'react';
import visa from './visa.png';
import sberbank from './sberbank.png';
import yandex from './yandex.png';
import qiwi from './qiwi.png';

import Button  from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name, summ) {
  return { name, summ };
}
const rows = [
  createData('Консультации', 0),
  createData('Публикации', 0),
  createData('VIP-запросы', 0),
  createData('Прочее', 0),
];

export default class PersonalAccountBalance extends Component {
	constructor() {
    	super();
    	this.state = {
    		balance:0,
    		isExecutor:false
    	}
  	}   
	async componentDidMount() {
		this.setState({balance:this.props.balance});
		this.setState({isExecutor:this.props.isExecutor});
	}
	render() {
		if(this.state.isExecutor){
			return(
				<div id="balance" className="mx-auto col-lg-9">
					<div id="viewAmount" className="row">
						<div className="col-12 col-md-3">
							Анкету посетили:
						</div>
						<div className="col-12 col-md-3">
							За все время: 0
						</div>
						<div className="col-12 col-md-3">
							За месяц: 0
						</div>
						<div className="col-12 col-md-3">
							За сутки: 0
						</div>
					</div>
					<div id="myBalance">
						<h2>Мой баланс: {this.state.balance} рублей</h2>
					</div>
					<div className="row ml-0 mr-0">
						<div className="col-12 col-md-7">
							<TableContainer component={Paper}>
						      <Table aria-label="simple table">
						        <TableHead>
						          <TableRow>
						            <TableCell>Источник пополнения счета</TableCell>
						            <TableCell align="right">Сумма</TableCell>
						          </TableRow>
						        </TableHead>
						        <TableBody>
						          {rows.map((row) => (
						            <TableRow key={row.name}>
						              <TableCell component="th" scope="row">
						                {row.name}
						              </TableCell>
						              <TableCell align="right">{row.summ}</TableCell>
						            </TableRow>
						          ))}
						        </TableBody>
						      </Table>
						    </TableContainer>
						</div>
						<div className="col-12 col-md-5 text-center">
							<Button id="withdraw" variant="contained">
					          Вывести средства
					        </Button>
					        <Button id="withdrawHistory" variant="contained">
					          История операций
					        </Button>
						</div>
						<div id="rules" className="col-12">
							<a href="#">Правила оказания платных услуг</a>
						</div>
						<div id="myStats" className="col-12">
							<p>Мои публикации: 0</p>
							<p>Мои комментарии: 0</p>
							<p>Мои подписчики: 0</p>
							<p>Я подписан: 0</p>
						</div>
					</div>
				</div>
			);
		}
		else{
			return(
				<div id="balance" className="mx-auto col-lg-9">
					<h2 className="col-12 p-0">Пополнение счета</h2>
					<div className="d-flex flex-column settingsParam">
						<label>Введите сумму для пополнения</label>
						<input id="amount" type="number" placeholder="3000"></input>
					</div>
					<div id="variants" className="row m-0 d-flex justify-content-between">
						<div className="col-12 col-md-5 text-center">
							<img src={visa} />
							Банковская карта
						</div>
						<div className="col-12 col-md-5 text-center">
							<img src={sberbank} />
							Сбербанк Онлайн
						</div>
						<div className="col-12 col-md-5 text-center">
							<img src={yandex} />
							Яндекс деньги
						</div>
						<div className="col-12 col-md-5 text-center">
							<img src={qiwi} />
							Киви кошелек
						</div>
					</div>
				</div>
			)
		}
	}
}