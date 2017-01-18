import React from 'react';
import {Header} from './Header';
import {Footer} from './Footer';

export class Root extends React.Component{
	render(){
		return(
			<div className="main">
				<Header />

				<div className="container-fluid">
					{this.props.children}
				</div>
			</div>
		);
	}
}