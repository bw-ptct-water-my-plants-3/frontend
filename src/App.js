import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

import Home from './components/Home';

import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import AddPlant from './components/AddPlant';
import PlantDashboard from './components/PlantDashboard';
import PrivateRoute from './components/PrivateRoute';
import { logout } from './state/actions';

function App(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!props?.user?.user_id);
  }, [props]);

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
                  <Link to="/plants">Your Plants</Link>
                </NavItem>
              )}
            </Nav>
            {loggedIn ? (
              <Button onClick={props.logout}>Logout</Button>
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { logout })(App);
