import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Gear from './components/Gear';
import BTT from './components/BTT';
import Categories from './components/Categories';

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

const Contents = styled.div``;

const App = () => {
	const [category, setCategory] = useState('ALL');
	const onSelect = useCallback((category) => setCategory(category), []);

	return (
		<Container>
			<Main>
				<Gear />
				<BTT />
				<Categories category={category} onSelect={onSelect} />
			</Main>
		</Container>
	);
};

export default App;
