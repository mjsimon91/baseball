import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import TransactionsPage from "./components/TransactionsPage"
import 'typeface-roboto';

class App extends Component {

  
  render() {
    return (
      <Router>
        <div className="container">
          <h2>MLB Transactions</h2>
        </div>

        <Route path="/" exact component={TransactionsPage} />
      </Router>
    );
  }
}

export default App;
