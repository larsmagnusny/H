import React from 'react';
import Computer from './Computer/Computer';

function getToken(){
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    
    return userToken?.token;
  }

export default class Rig extends React.Component {
    componentWillMount(){
        fetch('https://hloginapi.azurewebsites.net/computer', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'token': getToken()
            }
          })
          .then(data => data.json())
          .then(data => {
              this.setState({ computers: data });
          });
    }
    
    render(){
        if(this.state == null){
            return(<div>Loading...</div>)
        }

        const { computers } = this.state;

        return(
            <div>
                <h1>Local network</h1>
                {computers.map((data) => (
                    <Computer data={data} />
                ))}
            </div>
        );
    }
}