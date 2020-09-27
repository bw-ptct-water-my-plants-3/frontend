import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import RegisterUser from "./components/RegisterUser";
import AddPlant from './components/AddPlant';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={RegisterUser}/>
          <Route path="/plantform" component={AddPlant}/>
        </Switch>
    </div>
  );
}

export default App;
