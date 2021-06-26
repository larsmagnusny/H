import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import useToken from './components/App/useToken';
import Rig from './components/Rig/Rig';
import Nav from './components/Nav/Nav';

import './App.css';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return (
      <div>
        <BrowserRouter>
          <Switch>
          <Route
                exact
                path="/"
                render={() => {
                    return (
                      <Redirect to="/login" /> 
                    )
                }}
              />
            <Route path="/login">
              <Login setToken={setToken} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

  const removeToken = () => {
    sessionStorage.removeItem('token');
    window.location.href = "/login";
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <button onClick={removeToken}>Logout</button>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/rig">
            <Rig />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
