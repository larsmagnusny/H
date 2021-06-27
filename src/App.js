import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
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
        <HashRouter>
          <Route exact path="/">
            <Login setToken={setToken} />
          </Route>
          <Route path="/register" component={Register} />
        </HashRouter>
      </div>
    );
  }

  const removeToken = () => {
    sessionStorage.removeItem('token');
    window.location.href = "/";
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <button onClick={removeToken}>Logout</button>
      <HashRouter>
        <Nav />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/rig" component={Rig} />
        <Route path="/preferences" component={Preferences} />
      </HashRouter>
    </div>
  );
}

export default App;
