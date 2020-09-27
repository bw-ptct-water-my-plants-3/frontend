import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import Home from './components/Home';

import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import AddPlant from './components/AddPlant';
import PlantDashboard from './components/PlantDashboard';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="h-full">
      <Router>
        <Navbar color="light" light expand="md">
          <Link className="text-unset" to="/">
            <h2>Water My Plants</h2>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {loggedIn && (
                <NavItem>
                  <NavLink>
                    <Link to="/plants">Your Plants</Link>
                  </NavLink>
                </NavItem>
              )}
            </Nav>
            {loggedIn ? (
              <Button>Logout</Button>
            ) : (
              <Link to="/login">
                <Button>Login</Button>{' '}
              </Link>
            )}
          </Collapse>
        </Navbar>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={RegisterUser} />
          <Route path="/plants/new" component={AddPlant} />
          <Route path="/plants" component={PlantDashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
