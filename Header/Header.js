import React, { Component } from 'react';
import logo from './col.png';
import { Link } from "react-router-dom";
import axios from 'axios';

import './Header.css';

let navigationItems = [];

export default class Header extends Component {
constructor(props) {
  super(props);
  // Не вызывайте здесь this.setState()!
  this.state = {
    one:'', 
    userUrl:'',
    isUserAuthorized:false
  };
}
componentDidMount(){
  navigationItems = [];

  navigationItems.push(
    <li className="nav-item active">
      <a className="nav-link" href="#">Образцы документов</a>
    </li>
  );
   navigationItems.push(
    <li className="nav-item">
      <Link className="nav-link" to='/OurTeam' > Наша команда</Link>
    </li>
  );
   if(this.state.isUserAuthorized == true){
    navigationItems.push(
      <li className="nav-item">
        <Link className="nav-link" to="/PersonalAccount">Личный кабинет</Link>
      </li>
    );
   }
   else{
    navigationItems.push(
      <li className="nav-item row">
        <Link className="nav-link" to="/Registration">Регистрация /</Link><Link className="nav-link pl-0" to="/Authorisation">Авторизация</Link>
      </li>
    );
   }
}


render() {
  return (
    <header>
      <div className="container mx-auto p-0">
        <div className="row col-lg-12 p-0 mx-auto">
          <img src={logo} className="col-sm-7 col-md-3 col-lg-1 img_logo mx-auto" onClick={() => { window.location.replace("/"); }}/>
          <div className="col-sm-5 col-md-3 col-lg-2 region text-center dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarRegion" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Ваш регион
            </a>
            <div className="dropdown-menu col text-center" aria-labelledby="navbarRegion">
              <a className="dropdown-item" href="#">Пункт 1</a>
              <a className="dropdown-item" href="#">Пункт 2</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Пункт 3</a>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 info_text text-center"> Бесплатная юридическая консультация юристов и адвокатов</div>
          <div className="col-md-12 col-lg-3 p-0">
            <div className="telefone_menu text-center text-lg-right">
              <a href="tel:+78001234567">8 800 123 45 67</a>
              <p onClick={function(){ document.getElementById('askCall').classList.remove('d-none'); }}>Заказать звонок</p>
            </div>            
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-between mb-0 col">
              {navigationItems}
            </ul>
            <div className="dropdown-divider d-lg-none"></div>
            <form className="col-lg-5 row m-0">
              <input className="form-control mr-sm-2 col" type="search" placeholder="Поиск" aria-label="Поиск" />
              <button className="btn btn-outline-success col-3 col-lg-2" type="submit">Поиск</button>
            </form>
          </div>
        </nav>
      </div>
    </header>
 );
 }
}