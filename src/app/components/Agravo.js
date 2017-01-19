import React from 'react';
import moment from 'moment';
import _ from 'underscore';

export class Agravo extends React.Component{
	constructor(props){
		super();
		this.state = {
			agravos: props.agravos
		};
	}

 	parseJson(){
		const response = _.map(this.state.agravos, (item, key) => {
			return (
				<tr key={key}>
					<td>{item.agravo}</td>
					<td>{item.count}</td>
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
						<th colSpan="2" className="text-center">Top Agravos</th>
					</tr>

					<tr>
						<th>Nome</th>
						<th>Total</th>
					</tr>
				</thead>

				<tbody>{this.parseJson()}</tbody>
			</table>
		);
	}
}