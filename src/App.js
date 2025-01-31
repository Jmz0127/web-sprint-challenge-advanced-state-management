import React, { Component } from 'react';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { connect } from 'react-redux';
import { fetchSmurfs } from './actions';

const App = (props) => {
	console.log(props);
	return (
		<div className='App'>
			<Header />

			<main>
				<SmurfList />
				<AddForm />
			</main>
		</div>
	);
};

const mapState = (state) => {
	return state;
};

export default connect(mapState, { fetchSmurfs })(App); ///1. Connect the fetchSmurfs actions to the App component.

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.
