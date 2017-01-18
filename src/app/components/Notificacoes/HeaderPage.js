import React from 'react';

//stateless component
export const HeaderPage = (props) => {
	return (
		<div>
			<strong>Região: {props.info.regiao}</strong>
			<p>Total: {props.info.count}</p>
		</div>
	);
}