import React from 'react';
import gear from '../assets/images/gear.png';
import gear_small from '../assets/images/gear_small.png';
import '../App.css';

const Header = () => {
	return (
		<div className='header'>
			<div className='logo_container'>
				<div className='rotate_img'>
					<img className='rotate_gear' src={gear} width='120' height='120' alt='gear' />
					<img className='rotate_gear_small' src={gear_small} width='80' height='80' alt='small_gear' />
				</div>
				<section className='header_box'>
					<div className='auth_container'>
						<span className='subTitle'>Let's make something awesome!</span>
						<br />
						<span className='author'>SUPPORTED BY BTT</span>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Header;
