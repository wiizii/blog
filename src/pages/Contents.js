import React from 'react';
import Categories from '../components/Categories';

const Contents = ({ match }) => {
	const category = match.params.category || 'ALL';
	return (
		<>
			<Categories />
		</>
	);
};

export default Contents;
