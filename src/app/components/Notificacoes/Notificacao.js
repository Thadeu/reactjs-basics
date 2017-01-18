import React from 'react';
import moment from 'moment';
import _ from 'underscore';

export class Notificacao extends React.Component{
	constructor(props){
		super();
		this.state = {
			notificacoes: props.notificacoes
		};
	}

	parseJson(){
		const response = _.map(this.state.notificacoes, (item, key) => {
			return (
				<tr key={key}>
					<td>{item.id}</td>
					<td>{item.agravo}</td>
					<td>{item.unidade_saude}</td>
					<td>{moment(item.datahora).format('DD/MM/YYYY')}</td>
				</tr>
			);
		});

		return response;
	}

	render() {
		return (
			<table className="table table-bordered table-striped">
				<thead>
					<tr>
						<th colSpan="4" className="text-center">Últimas Notificações</th>
					</tr>

					<tr>
						<th>#</th>
						<th>Agravo</th>
						<th>Unidade de Saúde</th>
						<th>Data</th>
					</tr>
				</thead>

				<tbody>{this.parseJson()}</tbody>
			</table>
		);
	}
}

Notificacao.defaultProps = {}
Notificacao.propTypes = {}