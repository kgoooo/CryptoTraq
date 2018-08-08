import React from 'react';
import ReactDOM from 'react-dom';
import {StyleRoot} from "radium";
import MainPage from './components/MainPage';


//  Added StyleRoot to allow Media Queries to function properly.

ReactDOM.render(<StyleRoot><MainPage /></StyleRoot>, document.getElementById('app'));

