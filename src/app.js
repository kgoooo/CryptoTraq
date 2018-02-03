import React from 'react';
import ReactDOM from 'react-dom'
import CryptoTraq from './components/CryptoTraq'
import AppRouter from './router/AppRouter';
import 'normalize.css/normalize.css'
import './styles/styles.scss'		

ReactDOM.render(<AppRouter />, document.getElementById('app'));

