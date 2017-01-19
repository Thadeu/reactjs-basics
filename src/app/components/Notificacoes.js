import React from 'react';
import axios from 'axios'
import _ from 'underscore';
import moment from 'moment';

import {Notificacao} from './Notificacao';
import {Agravo} from './Agravo';

import {NotificacoesService} from '../services/Notificacoes';

export class Notificacoes extends React.Component {
	constructor(props){
		super();
		this.state = {};
	}

	componentWillMount(){
		this.getData();
	}

	componentDidMount(){
		this.interval = setInterval(() => this.getData(), 5000);
	}

	componentWillUnMount(){
		clearInterval(this.interval);
	}

	getData() {
		NotificacoesService.dadosPorRegiao().then((response) => {
			this.setState({territorios: []});
			this.setState({
				count: response.data.count,
				territorios: response.data.territorios
			})
		});
	}

	renderTerritorios(){
		const content = _.map(this.state.territorios, (territorio, index) => {
			return (
				<div key={index}>
					<div className="col-md-12">
						<strong>Região: {territorio.regiao}</strong>
						<p>Total: {territorio.count}</p>
					</div>
					
					<div className="col-md-6">
						<Agravo agravos={territorio.agravos} />
					</div>
					
					<div className="col-md-6">
						<Notificacao notificacoes={territorio.notificacoes} />
					</div>

					<div className="col-md-12"><hr/></div>
				</div>
			)
		});

		return content;
	}

	renderComponent(){
		return(
			<section className="app-notificacoes">
				<div className="col-md-12 text-center">
					<h1>
						Qntd. Notificações
						<span className="text-danger"> {this.state.count}</span>
					</h1>
				</div>
				
				<div className="col-md-12"><hr/></div>
				
				<div className="content">
					{this.renderTerritorios()}
				</div>
			</section>
		);
	}

	renderLoading(){
		return(
			<div className="text-center">
				<i className="label label-danger">carregando...</i>
			</div>
		)
	}

	render(){
		return (this.state.count > 0) ? this.renderComponent() : this.renderLoading();
	}
}

Notificacoes.defaultProps = {}
Notificacoes.propTypes = {}