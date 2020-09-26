import React, { Component } from 'react';

import Header from '../Header/Header.js';
import UserPageQuestions from '../Questions/UserPageQuestions.js';
import PersonalInfo from '../PersonalAccount/PersonalInfo.js';
import Footer from '../Footer/Footer.js';
import AskCall from '../popup/AskCall.js';
import LeftSidebar from '../LeftSidebar/LeftSidebar.js';

import './PersonalAccount.css';

export default class PersonalAccount extends Component {
	constructor() {
    	super();
    	this.state = {    		
    		balance:0,
    		isExecutor:true,
    		activeElement:[]
    	}
  	}   
  	async componentDidMount() {
  		this.setState({activeElement:(<UserPageQuestions />)})
  	}
	
	render() {
		return(
			<body>
				<Header />
				<PersonalInfo />
				<div className="container">
					<div className="row ml-0 mr-0">
						<LeftSidebar componentToUpdate={this} balance={this.state.balance} isExecutor={this.state.isExecutor} />
						{this.state.activeElement}		
					</div>			
				</div>
				<Footer />
				<AskCall />
			</body>		
		);
	}
}