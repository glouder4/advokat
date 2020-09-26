import React, { Component } from 'react';

import Header from '../Header/Header.js';
import TeamCatalog from '../OurTeam/TeamCatalog.js';
import Team from '../OurTeam/Team.js';
import Footer from '../Footer/Footer.js';
import AskCall from '../popup/AskCall.js';

import './OurTeam.css';

export default class OurTeamPage extends Component {
	constructor() {
    	super();
  	}
	
	render() {
		return(
			<body>
				<Header />
				<TeamCatalog />
				<div className="container">
					<Team />
				</div>
				<Footer />
				<AskCall />
			</body>		
		);
	}
}