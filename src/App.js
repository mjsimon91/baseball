import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import MlbTransactions from "./components/Mlbtransactions"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>MERN-Stack Todo App</h2>
        </div>

        <Route path="/" exact component={MlbTransactions} />
      </Router>
    );
  }
}

export default App;
