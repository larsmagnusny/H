import React from 'react';

import './Register.css';

class RegisterForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { name: '' };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state);

        fetch('https://hloginapi.azurewebsites.net/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(this.state)
        }).then(function(response){
            console.log(response);
            window.location.href = "/login";
            return response.json();
        });

        event.preventDefault();
    }

    render(){
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit} className="flex-form">
                    <div className="form-group w45">
                        <label>Username</label>
                        <input type="text" name="Username" value={this.state.value} onChange={this.handleChange} />
                    </div>

                    <div className="form-group w45">
                        <label>Password</label>    
                        <input type="password" name="Password" value={this.state.value} onChange={this.handleChange} />
                    </div>

                    <div className="form-group w45">
                        <label>Email</label>
                        <input type="text" name="Email" value={this.state.value} onChange={this.handleChange} />
                    </div>

                    <div className="form-group w45">
                        <label>First name</label>    
                        <input type="text" name="FirstName" value={this.state.value} onChange={this.handleChange} />
                    </div>

                    <div className="form-group w45">
                        <label>Last name</label>    
                        <input type="text" name="LastName" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="form-group w100">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default RegisterForm;