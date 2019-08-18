import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap'

import TransactionsPage from './pages/TransactionsPage'
import 'typeface-roboto';
import "./components/Navbar"
import Navbar from './components/Navbar';
import SearchResultsPage from './pages/SearchResultsPage';
import PlayerSummaryPage from './pages/PlayerSummaryPage';

class App extends Component {

  
  render() {
    return (
      <Router>
        <div className="container">
         <Navbar/>
        </div>

        <Route exact path="/" component={TransactionsPage} />
        <Route path="/search" component = {SearchResultsPage} />
        <Route path = "/player" component = {PlayerSummaryPage}/>

      </Router>
    );
  }
}

export default App;
