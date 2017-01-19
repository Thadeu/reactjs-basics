import React from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Stylesheets from './stylesheets/main.sass';

import {Root} from "./components/Root";
import {Notificacoes} from './components/Notificacoes';
import {Graficos} from './components/Graficos';
import {Login} from './components/Login';

class App extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<Router history={browserHistory}>
				<Route path={"/"} component={Root}>
					<IndexRoute component={Notificacoes} />
					<Route path={"notificacoes"} component={Notificacoes} />
					<Route path={"graficos"} component={Graficos} />
					<Route path={"login"} component={Login} />
				</Route>
			</Router>
		);
	}
}

render(
	<App />,
	document.querySelector("#app")
);
