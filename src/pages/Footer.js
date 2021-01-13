import React from 'react';
import github_logo from '../assets/images/GitHub-Mark-64px.png';

const Footer = () => {
	return (
		<div id='footer'>
			<div className='get_in_touch'>
				<h4>GET IN TOUCH</h4>
				<a className='mail' href='mailto:119wjw@gmail.com'>
					119wjw@gmail.com
				</a>
			</div>

			<div className='social_link'>
				<a href='https://github.com/119wjw' target='_blank' rel='noreferrer'>
					<img src={github_logo} width='32' height='32' alt='github_logo' />
				</a>
			</div>
		</div>
	);
};

export default Footer;
