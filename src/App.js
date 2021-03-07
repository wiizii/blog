import React, { useState, useCallback } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Gear from './components/Gear';
import BTT from './components/BTT';
import Contents from './pages/Contents';
//import Categories from './components/Categories';

const Container = styled.div`
	background-color: white;
	text-align: center;
	font-family: 'Anton', sans-serif;
	-ms-user-select: none;
	-moz-user-select: -moz-none;
	-khtml-user-select: none;
	-webkit-user-select: none;
	user-select: none;
`;
const Main = styled.div`
	margin: auto;
	background-color: white;
	box-shadow: 0 0 25px #ddd;
	@media (min-width: 1200px) {
		width: 1200px;
	}
`;

const App = () => {
	return (
		<Container>
			<Main>
				<Gear />
				<BTT />
				<Route path='/:category?' component={Contents} />
			</Main>
		</Container>
	);
};

export default App;
