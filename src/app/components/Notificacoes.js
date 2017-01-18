import React from 'react';
import axios from 'axios'
import _ from 'underscore';
import moment from 'moment';

import {Notificacao} from './Notificacoes/Notificacao';
import {Agravo} from './Agravos/Agravo';
import {HeaderPage} from './Notificacoes/HeaderPage';

import {NotificacoesService} from '../services/Notificacoes';

export class Notificacoes extends React.Component {
	constructor(props){
		super();
		this.state = {};
	}

	componentWillMount(){
		NotificacoesService.dadosPorRegiao().then((response) => {
			this.setState({
				count: response.data.count,
				territorios: response.data.territorios
			})
		});
	}

	render(){
		const content = _.map(this.state.territorios, (territorio, index) => {
			return (
				<div key={index}>
					<div className="col-md-12">
						<HeaderPage info={territorio} />
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

		const output = (this.state.count > 0) ? (
			<section className="app-notificacoes">
				<div className="col-md-12 text-center">
					<h1>
						Qntd. Notificações
						<span className="text-danger"> {this.state.count}</span>
					</h1>
				</div>
				
				<div className="col-md-12"><hr/></div>
				
				<div className="content">{content}</div>
			</section>
		) : (
			<div className="text-center">
				<i className="label label-danger">carregando...</i>
			</div>
		);
		
		return output;
	}
}

Notificacoes.defaultProps = {}
Notificacoes.propTypes = {}