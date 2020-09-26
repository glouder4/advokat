import React, { Component } from 'react';
import TextField  from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
export default class PriceList extends Component {
	constructor() {
    	super();
  	}   
	async componentDidMount() {}
	render() {
		return(
			<div id="PriceList" className="mx-auto col-lg-9">
				<h2 className="col-12 p-0">Прайс-лист</h2>
				<div className="col-12 col-md-11 col-lg-9 mr-auto row ml-0 mr-0 d-flex justify-content-between">
					<p>Стоимость консультации от (руб)</p> <input type="number"></input>
				</div>
				<div className="col-12 col-md-11 col-lg-9 mr-auto row ml-0 mr-0 d-flex justify-content-between">
					<p>Скидка на консультацию автору VIP-вопроса (%)</p> <input type="number"></input>
				</div>
				<div className="col-12 col-md-12">
					<p>Скачать шаблон прайс-листа в <a href="#">excell</a> для последующей загрузки на сайт</p>
				</div>
				<div className="col-12 col-md-11 col-lg-9 mr-auto row ml-0 mr-0 d-flex justify-content-between">
					<p>Загрузить файл шаблона</p><input type="file" name="f" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
				</div>
				<div className="row ml-0 mr-0 d-flex justify-content-between">
					<Button id="savePriceList" variant="contained">
			          Сохранить изменения
			        </Button>
			        <Button id="importPriceList" variant="contained">
			          Импорт прайс-листа
			        </Button>
				</div>		
		        <div id="LegalAssistance">
		        	<h4>Правовая помощь гражданам по общим вопросам</h4>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Юридические консультации</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Составление письменных юридических заключений</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Анализ договоров</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Составление договоров</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Составление заявлений о расторжении браков, взыскание аллиментов</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Составление Прочих исковых заявлений, притензий, жалоб</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Составление апеляционных, кассационных, надзорных жалоб</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Составление заявлений в арбитражный суд</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Составление других деловых бумаг</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Юридическое сопровождение сделок с недвижимом имуществом</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Ведение дел в гражданских судах</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Ведение дел в арбитражных судах</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Ведение дел в уголовных судах</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <h4>Правовая помощь автовладельцам</h4>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Юридические консультации по спорам: о нарушении ПДД, о возмещение в результате ДТП, о привлечении к административной ответственности</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Анализ договоров ОСАГО,КАСКО,автокредитования</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Составление заявлений и жалоб</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Представление интересов в различных инстанциях и судах по делам об административных нарушениях</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <h4>Правовая помощь юридическим лицам и индивидуальным предпринимателем</h4>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Абонементное обслуживание по юридическому сопровождению бизнеса в месяц</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Консультации по вопросами предпринимательской деятельности</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Разработка локальных нормативных актов для организаций</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Составление притензий, жалоб и заявлений</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
			        <FormControl className="col-md-11 col-lg-10">
			          <InputLabel htmlFor="standard-adornment-amount">Ведение арбитражных дел</InputLabel>
			          <Input startAdornment={<InputAdornment position="start">от</InputAdornment>} endAdornment={<InputAdornment position="start">рублей</InputAdornment>}/>
			        </FormControl>
		        </div>
			</div>
		);
	}
}