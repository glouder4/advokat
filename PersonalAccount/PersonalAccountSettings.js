import React, { Component } from 'react';
import accountDefaultPhoto from './accountDefaultPhoto.png';

export default class PersonalAccountSettings extends Component {
	constructor() {
    	super();
  	}   
	async componentDidMount() {}
	render() {
		return(
			<div id="settings" className="container-fluid mx-auto col-lg-9 justify-content-between row ml-0 mr-0">
				<h2 className="col-12 p-0">Конактные данные</h2>
				<form className="d-flex flex-column col-12 col-md-5">
					<div className="d-flex flex-column settingsParam">
						<label>Фамилия</label>
						<input type="lastname" placeholder="Фамилия"></input>
					</div>
					<div className="d-flex flex-column settingsParam">
						<label>Имя</label>
						<input type="name" placeholder="Имя"></input>
					</div>
					<div className="d-flex flex-column settingsParam">
						<label>Отчество</label>
						<input placeholder="Отчество"></input>
					</div>
					<div className="d-flex flex-column settingsParam">
						<label>Дата рождения</label>
						<input type="date" placeholder="день/месяц/год"></input>
					</div>
					<div className="d-flex flex-column settingsParam">
						<label>Телефон доступный всем</label>
						<input type="phone" placeholder="+7 (___) ___-__-__"></input>
						<label>Телефон для связи (доступен администратору)</label>
						<input type="phone" placeholder="+7 (___) ___-__-__"></input>
					</div>
					<div className="d-flex flex-column settingsParam">
						<label>Email</label>
						<input type="email" placeholder="example@mail.ru"></input>
					</div>
				</form>
				<div id="accountPhoto" className="col-12 col-md-5 d-flex flex-column">
					<img src={accountDefaultPhoto} />
					<div className="col-12 col-md-11 col-lg-9 mr-auto row ml-0 mr-0 d-flex justify-content-between">
						<input type="file" name="f" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
					</div>
					<div className="btn">Загрузить фотографию</div>
					<div id="photoRequirement">
						<label>Требования к фотографии:</label>
						<ul>
							<li>Формат файла - jpg,png,gif</li>
							<li>Минимальный размер - 200x200 пикселей</li>
							<li>На фотографии должно быть четко различимо Ваше лицо</li>
						</ul>
						<label>Не разрешается размещать фотографии:</label>
						<ul>
							<li>На которых отсутсвует изображение человека</li>
							<li>Содержащие изображения постороннего человека</li>
							<li>Содержащие рекламу, в том числе адреса других сайтов</li>
						</ul>
						<p>При нарушении эти правил фотография профиля будет удалена модератором!</p>
					</div>	
					<div className="btn" id="saveInfo">Сохранить</div>				
				</div>
			</div>
		)
	}
}