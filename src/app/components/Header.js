import React from 'react';
import {Link} from 'react-router';

export const Header = (props) => {
	return(
		<nav className="navbar navbar-default navbar-inverse navbar-static-top">
			<div className="container-fluid">
				<div className="navbar-header">
					<ul className="nav navbar-nav">
						<li className="navbar-brand">Monitoramento</li>
						<li><Link to={"/notificacoes"} activeStyle={{ color: '#f59' }}>Notificações</Link></li>
						<li><Link to={"/graficos"} activeStyle={{ color: '#f59' }}>Graficos</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}