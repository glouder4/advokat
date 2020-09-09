import React, { Component } from 'react';
import './Uslugi.css';
import sudebnoe from './gavel.png'
import justice from './justice.png'
export default class Uslugi extends Component {
	constructor() {
    	super();
  	}   
	async componentDidMount() { }
	render() {
		return(
			<div className="container mx-auto">
				<div className="col-12 block_2_text">Услуги</div>
				<div className="col-12 row m-0 p-0">
					<div className="col-12 col-sm-5 col-lg-2 col-md-3 col-sm-5 d-flex flex-column align-items-center usluga mx-auto text-center">
						<img className="mx-auto" src={sudebnoe} />
						<p className="col-12">Судебное разбирательство</p>
					</div>
					<div className="col-12 col-sm-5 col-lg-2 col-md-3 d-flex flex-column align-items-center usluga mx-auto text-center">
						<img className="mx-auto" src={justice} />
						<p className="col-12">Административные споры</p>
					</div>
					<div className="col-12 col-sm-5 col-lg-2 col-md-3 d-flex flex-column align-items-center usluga mx-auto text-center">
						<img className="mx-auto" src={sudebnoe} />
						<p className="col-12">Судебное разбирательство</p>
					</div>
					<div className="col-12 col-sm-5 col-lg-2 col-md-3 d-flex flex-column align-items-center usluga mx-auto text-center">
						<img className="mx-auto" src={justice} />
						<p className="col-12">Административные споры</p>
					</div>
					<div className="col-12 col-sm-5 col-lg-2 col-md-3 d-flex flex-column align-items-center usluga mx-auto text-center">
						<img className="mx-auto" src={sudebnoe} />
						<p className="col-12">Судебное разбирательство</p>
					</div>
					<div className="col-12 col-sm-5 col-lg-2 col-md-3 d-flex flex-column align-items-center usluga mx-auto text-center">
						<img className="mx-auto" src={justice} />
						<p className="col-12">Административные споры</p>
					</div>
					<div className="col-12 col-sm-5 col-lg-2 col-md-3 d-flex flex-column align-items-center usluga mx-auto text-center">
						<img className="mx-auto" src={sudebnoe} />
						<p className="col-12">Судебное разбирательство</p>
					</div>
					<div className="col-12 col-sm-5 col-lg-2 col-md-3 d-flex flex-column align-items-center usluga mx-auto text-center">
						<img className="mx-auto" src={justice} />
						<p className="col-12">Административные споры</p>
					</div>
					<div className="col-12 col-sm-5 col-lg-2 col-md-3 d-flex flex-column align-items-center usluga mx-auto text-center">
						<img className="mx-auto" src={sudebnoe} />
						<p className="col-12">Судебное разбирательство</p>
					</div>
					<div className="col-12 col-sm-5 col-lg-2 col-md-3 d-flex flex-column align-items-center usluga mx-auto text-center">
						<img className="mx-auto" src={justice} />
						<p className="col-12">Административные споры</p>
					</div>
					<div className="col-12 col-sm-5 col-lg-2 col-md-3 d-flex flex-column align-items-center usluga mx-auto text-center">
						<img className="mx-auto" src={sudebnoe} />
						<p className="col-12">Судебное разбирательство</p>
					</div>
					<div className="col-12 col-sm-5 col-lg-2 col-md-3 d-flex flex-column align-items-center usluga mx-auto text-center">
						<img className="mx-auto" src={justice} />
						<p className="col-12">Административные споры</p>
					</div>
				</div>
			</div>
		)
	}
}