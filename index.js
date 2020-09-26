import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {render} from 'react-dom';
import App from './App';
//import Registration from './Registartion.js';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import OurTeam from './components/OurTeam/OurTeamPage.js';
import Registration from './components/Registration/Registration.js';
import Authorisation from './components/Authorisation/Authorisation.js';
import UserPageMessages from './components/Questions/UserPageMessages.js';

import PersonalAccount from './components/PersonalAccount/PersonalAccount.js';


render(
  <BrowserRouter>
  	<Route path="/Registration" component={Registration}/>
    <Route path="/Authorisation" component={Authorisation}/> 
    <Route exact path="/" component={App} /> 
    <Route exact path="/OurTeam" component={OurTeam} /> 
    <Route exact path="/messages" component={UserPageMessages} />
    <Route exact path="/personalAccount" component={PersonalAccount} /> 
  </BrowserRouter>,
  document.getElementById('root')
)




