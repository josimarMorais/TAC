import React, { Component } from "react";
export default class Register extends Component {
    render() {
        return (
            <form>
                <h3>Register</h3>
                <div className="form-group">
                    <label>Full name</label>
                    <input type="text" className="form-control" placeholder="Full name" />
                </div>
                <p />

                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Logradouro" />

                    <label>Complement</label>
                    <input type="text" className="form-control" placeholder="Complement" />

                    <label>District</label>
                    <input type="text" className="form-control" placeholder="District" />

                    <label>Zip-code</label>
                    <input type="text" className="form-control" placeholder="Zip code" />
                    <label>City</label>
                    <input type="text" className="form-control" placeholder="City" />

                    <label>State</label>
                    <input type="text" className="form-control" placeholder="State" />
                </div>
                <p />

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <p />
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}