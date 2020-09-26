import React, { Component } from 'react';
import { Link } from "react-router-dom";

import SendMessageToAdmin from '../SendMessageToAdmin/SendMessageToAdmin.js';

import './Footer.css';
export default class Footer extends Component {
	constructor() {
        super();
        var today = new Date(),
            date = today.getFullYear()

        this.state = {
            date: date
        };
    }
	render() {
		return(
			<footer className="col-12">
				<div className="container p-0 mx-auto">
					<nav className="navbar navbar-expand navbar-transparent col-12 p-0 flex-column flex-lg-row mx-auto">
			            <div className="col-12 col-lg-8 mx-auto" id="navbarSupportedContent">
				            <ul className="navbar-nav justify-content-between mb-0 col">
				              <li className="nav-item active">
				                <Link className="nav-link" to="#">Образцы документов</Link>
				              </li>
				              <li className="nav-item">
				                <Link className="nav-link" to='/OurTeam'>Наша команда</Link>
				              </li>
				              <li className="nav-item">
				                <Link className="nav-link" to="/PersonalAccount">Личный кабинет</Link>
				              </li>
				            </ul>
			            </div>
			            <div className="col-12 col-lg-3 p-0">
				            <div className="telefone_menu text-center text-lg-right">
				              <a href="tel:+78001234567">8 800 123 45 67</a>
				              <p onClick={function(){ document.getElementById('askCall').classList.remove('d-none'); }}>Заказать звонок</p>
				            </div>            
				        </div>
			        </nav>	
			        <div className="dropdown-divider container"></div>
			        <div className="footer-social row ml-0 mr-0">
			        	<div className="copirate col-12 col-md-7 col-lg-4 p-lg-0 mx-auto text-center text-lg-left">© 2000 - {this.state.date} virtualny-advokat.ru</div>
			        	<div className="social-links col-12 col-md-5 col-lg-4 mx-auto justify-content-between mt-3 mb-3 mt-md-0 mb-lg-0">
			        		<a className="footer-social-link col"><i class="fab fa-vk"></i></a>
			        		<a className="footer-social-link col"><i class="fab fa-instagram"></i></a>
			        		<a className="footer-social-link col"><i class="fab fa-facebook-f"></i></a>			        		
			        		<a className="footer-social-link col"><i class="fab fa-odnoklassniki"></i></a>
			        	</div>
			        	<div className="privacy-policy col-lg-3 p-lg-0 mx-auto m-lg-0 text-center text-lg-right"> <a to="">Политика конфиденциальности</a> </div>
			        </div>
		        </div>
		        <SendMessageToAdmin />
			</footer>
		);
	}
}