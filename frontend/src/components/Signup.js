import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
           
                
                    <form action=''>
                            <h3>Sign Up</h3>
                            <div className="mb-3">
                                <label htmlFor='text'><strong>First Name</strong> </label>
                                <input type="text" className="form-control rounded-0" placeholder="first name"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor='text'><strong>Last Name</strong> </label>
                                <input type="text" className="form-control rounded-0" placeholder="last name" />
                            </div>
                            <div className="mb-3">
                            <label htmlFor='email'><strong>Email Adress</strong> </label>
                                <input type="email" className="form-control rounded-0" placeholder="enter email" />
                            </div>
                            <div className="mb-3">
                            <label htmlFor='password'><strong>Password</strong> </label>
                                <input type="password" className="form-control rounded-0" placeholder="enter password" />
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Inscription</button>
                            </div>
                            <p className="forgot-password text-right">
                                Already registered <a href="/sign-in">sign in?</a>
                            </p>
                    </form> 
        
                
           
                
    )
  }
}