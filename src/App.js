import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import Rig from './components/Rig/Rig';
import Nav from './components/Nav/Nav';

import './App.css';

function getToken(){
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  
  return userToken?.token;
}

function removeToken(){
  sessionStorage.removeItem('token');
}

function logout(){
  removeToken();
  document.location.href = "/";
}

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      token: getToken()
    }
  }

  render() {
    const setToken = (userToken) => {
      sessionStorage.setItem('token', JSON.stringify(userToken));
      this.setState({token: getToken(), valid: true});
    }

    var token = this.state.token;

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

    return (
      <div className="wrapper">
        <h1>Application</h1>
        <button onClick={logout}>Logout</button>
        <HashRouter>
          <Nav />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/rig" component={Rig} />
          <Route path="/preferences" component={Preferences} />
        </HashRouter>
      </div>
    );
  }
}
