import React, { Component } from 'react';
import { HashRouter, Route, useLocation } from 'react-router-dom';
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
      token: null,
      valid: false,
      fetching: true
    }
  }



  componentWillMount(){
    var token = getToken();
    if(token != null){
      fetch('https://hloginapi.azurewebsites.net/CheckToken', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: sessionStorage.getItem('token')
          })
          .then(data => data.json())
          .then(data => {
            if(data === true){
              this.setState({token: token, valid: data, fetching: false});
            }
            else
            {
              removeToken();
              document.location.href = "/";
            }
          });
      }
      else
      {
        this.setState({token: null, valid: false, fetching: false});
      }
  }

  render() {
    const setToken = (userToken) => {
      sessionStorage.setItem('token', JSON.stringify(userToken));
      this.setState({token: getToken(), valid: true});
    }

    var token = this.state.token;
    const isValid = this.state.valid;
    const loading = this.state.fetching;

    if(loading){
      return (
        <div>Wait a moment...</div>
      )
    }

    if(!token || !isValid) {
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
