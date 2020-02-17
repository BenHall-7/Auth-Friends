import React from 'react';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute';
import { Route, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute exact path="/" component={<div/>}/>
      </Router>
    </div>
  );
}

export default App;
