import React from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
import CryptoTraq from '../components/CryptoTraq';
import Header from '../components/Header';
import Currencies from '../components/Currencies';


const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Route path="/" component={CryptoTraq} exact={true}/>
			<Route path="/currencies" component={Currencies} />
		</div>
	</BrowserRouter>
)

export default AppRouter;