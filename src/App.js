import React, { useEffect, useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import { Home, Test } from './inc';
const URL = 'http://localhost:4000';

const App = () => {
	return (
		<div className='App'>
			<Route path='/' component={Home} exact />
			<Route path='/test' component={Test} />
		</div>
	);
};

export default App;
