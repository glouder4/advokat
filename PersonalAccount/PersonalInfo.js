import React, { Component } from 'react';

export default class PersonalInfo extends Component {
	constructor() {
    	super();
    	this.state = {
    		balance:0
    	}
  	}   
	async componentDidMount() {}
	render() {
		return(
			<div id="accountInfo" className="container">
				<div className="col-12 col-lg-9 row justify-content-between ml-auto">
					<div className="accountName">Иванов Иван Иванович</div>
					<div className="accountBalance">Баланс: {this.state.balance} рублей</div>
				</div>
			</div>
		)
	}
}