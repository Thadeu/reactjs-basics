import React from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Stylesheets from './stylesheets/main.sass';

import {Root} from "./components/Root";
import {Notificacoes} from './components/Notificacoes';
import {Graficos} from './components/Graficos';

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
				</Route>
			</Router>
		);
	}
}

render(
	<App />,
	document.querySelector("#app")
);
