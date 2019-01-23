import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import './less/login.css'
import Home from './pages/home/home.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <header className="App-header">
            <ul>
              <li>
                <Link to="/home">渣渣</Link>
              </li>
            </ul>
        </header>
        <div className="login">
           <Route path="/home" component={Home}/>
        </div>
      </div>
      </Router>
      
    )
  }
}

export default App;
