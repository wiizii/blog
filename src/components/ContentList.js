import React from 'react';
import DUMMY from '../../assets/dummy';

const itemsToRender = [];
for (let x in DUMMY) {
	itemsToRender.push(
		<div key={x} className='image_container'>
			<img src={DUMMY[x]} alt='dummy' className='dummy_image'></img>
		</div>
	);
}

const Dummy = () => {
	return <div className='grid_container'>{itemsToRender}</div>;
};

export default Dummy;
