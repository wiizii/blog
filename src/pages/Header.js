import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import Modal from 'react-awesome-modal';

const Header = () => {
	const [visible, setVisible] = useState(false);
	const [ID, setID] = useState('');
	const [PW, setPW] = useState('');

	const _openModal = () => {
		setVisible(true);
	};

	const _closeModal = () => {
		setVisible(false);
	};

	const _changeID = () => {
		const id = document.getElementsByName('id')[0].value;
		setID(id);
	};

	const _changePW = () => {
		const pw = document.getElementsByName('password')[0].value;
		setPW(pw);
	};

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
				<h5 onClick={() => _openModal()}> 관리자 로그인 </h5>
				<Modal visible={visible} width='400' height='300' effect='fadeInDown' onClickAway={() => _closeModal()}>
					<div>
						<h4 className='acenter login_tit'> 관리자 로그인 </h4>
						<form>
							<div class Name='login_div'>
								<div className='login_input_div'>
									<p> 관리자 ID </p>
									<input type='text' name='id' onChange={() => _changeID()} />
								</div>

								<div className='login_input_div' style={{ marginTop: '40px' }}>
									<p> 관리자 Password </p>
									<input type='text' name='password' onChange={() => _changePW()} />
								</div>

								<div className='submit_div'>
									<div>
										<input type='button' value='로그인' />
									</div>
									<div>
										<input type='button' value='취소' onClick={() => _closeModal()} />
									</div>
								</div>
							</div>
						</form>
					</div>
				</Modal>
			</div>
		</div>
	);
};

export default Header;
