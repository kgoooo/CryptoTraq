import React from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
import MainPage from '../components/MainPage';
import Header from '../components/Header';
import Currencies from '../components/Currencies';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={MainPage} exact={true} />
      <Route path="/currencies" component={Currencies} />
    </div>
  </BrowserRouter>
);

export default AppRouter;