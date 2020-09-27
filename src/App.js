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
import PrivateRoute from './components/PrivateRoute';

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
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={RegisterUser} />
          <PrivateRoute exact path="/plants" component={PlantDashboard} />
          <PrivateRoute exact path="/plants/new" component={AddPlant} />
          <PrivateRoute exact path="/plants/edit/:id" component={AddPlant} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
