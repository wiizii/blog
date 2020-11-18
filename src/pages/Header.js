import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../App.css';

const Header = () => {
	return (
		<div class='header_grid'>
			<div></div>
			<div className='acenter'>
				<Route path='/' />
				<Link className='link_tit' to='/'>
					<h3>WIZI Blog</h3>
				</Link>
			</div>
			<div className='acenter'>
				<h5> 관리자 로그인 </h5>
			</div>
		</div>
	);
};

export default Header;
