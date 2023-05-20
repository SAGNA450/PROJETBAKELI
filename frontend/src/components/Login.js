import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    return (
     <form action=''>
                        <h3>Sign In</h3>
                        <div className="mb-3">
                              <label htmlFor='email'><strong>Email address</strong></label>
                              <input type="email" className="form-control rounded-0" placeholder="Enter email" name='email'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor='password'><strong>Password</strong> </label>
                            <input type="password"  className="form-control rounded-0" placeholder="Enter password" name='password'/>
                        </div>
                        <div className="mb-3">
                              <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="customCheck1" /> 
                                  <label className="custom-control-label" htmlFor="customCheck1"> Remember me </label>
                              </div>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Connect</button>
                        </div>
                        <p className="forgot-password text-right">
                                Forgot <a href="/sign-up">password?</a>
                          </p>
        </form> 
    )
  }
}