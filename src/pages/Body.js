import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Contents from './Contents';

const navStyle = (weight, num) => {
	return weight[num] ? { fontWeight: 800 } : { fontWeight: 400 };
};

const Body = () => {
	const [view, setView] = useState('ALL');
	const [weight, setWeight] = useState([1, 0, 0, 0, 0]);
	return (
		<div id='body'>
			<div className='banner_container'>
				<Route path='/' />
				<Link className='link_tit' to='/'>
					<span className='banner'>Portfolio</span>
				</Link>
			</div>
			<div className='category'>
				<span
					className='tag'
					style={navStyle(weight, 0)}
					onClick={() => {
						setView('ALL');
						setWeight([1, 0, 0, 0, 0]);
					}}
				>
					ALL
				</span>
				<span
					className='tag'
					style={navStyle(weight, 2)}
					onClick={() => {
						setView('Design');
						setWeight([0, 0, 1, 0, 0]);
					}}
				>
					Design
				</span>
				<span
					className='tag'
					style={navStyle(weight, 3)}
					onClick={() => {
						setView('CANVAS');
						setWeight([0, 0, 0, 1, 0]);
					}}
				>
					CANVAS
				</span>
				<span
					className='tag'
					style={navStyle(weight, 1)}
					onClick={() => {
						setView('Game');
						setWeight([0, 1, 0, 0, 0]);
					}}
				>
					Game
				</span>
				<span
					className='tag'
					style={navStyle(weight, 4)}
					onClick={() => {
						setView('ABOUT');
						setWeight([0, 0, 0, 0, 1]);
					}}
				>
					ABOUT
				</span>
			</div>
			<Contents view={view} />
		</div>
	);
};

export default Body;
