import React from 'react';
import './App.css';
import Home from "./components/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';


function App() {
  return (
    <div className="App">
        <Router>
          
          
          <Switch>
            
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login}/>
             
          </Switch>
  
      </Router>
      
    </div>
  );
}

export default App;
