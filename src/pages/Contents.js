import React from 'react';
import Categories from '../components/Categories';
import Dummy from './Contents/Dummy';

const Contents = ({ match }) => {
	const category = match.params.category || 'ALL';
	return (
		<>
			<Categories />
			<Dummy />
		</>
	);
};

export default Contents;
