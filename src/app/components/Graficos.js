import React from 'react';
import {browserHistory} from 'react-router';

export class Graficos extends React.Component {
	constructor(props){
		super();
	}

	onNavigateHome(){
		browserHistory.push("/home");
	}

	render(){
		return (
			<div>
				<h1>Graficos!</h1>
				<hr />
			</div>
		);
	}
}

Graficos.defaultProps = {}
Graficos.propTypes = {}