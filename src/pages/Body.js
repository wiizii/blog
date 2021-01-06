import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Contents from './Contents';

const Body = () => {
	const [view, setView] = useState('ALL');
	return (
		<div className='body'>
			<div className='banner_container'>
				<Route path='/' />
				<Link className='link_tit' to='/'>
					<span className='banner'>Portfolio</span>
				</Link>
			</div>
			<div className='category'>
				<span className='tag' onClick={() => setView('ALL')}>
					ALL
				</span>
				<span className='tag' onClick={() => setView('MODEL')}>
					MODEL
				</span>
				<span className='tag' onClick={() => setView('DESIGN')}>
					DESIGN
				</span>
				<span className='tag' onClick={() => setView('CANVAS')}>
					CANVAS
				</span>
				<span className='tag' onClick={() => setView('ABOUT')}>
					ABOUT
				</span>
			</div>
			<Contents view={view} />
		</div>
	);
};

export default Body;
