import React, { Component, useState } from "react";

export default function Register() {

    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const [complement, setComplement] = useState('');
    const [district, setDistrict] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(){
        const data = {

        }
    }


    return (
        <form>
            <h3>Register</h3>
            <div className="form-group">
                <label>Full name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

            </div>
            <p />

            <div className="form-group">
                <label>Adress</label>
                <input
                    id="adress"
                    name="adress"
                    type="text"
                    className="form-control"
                    placeholder="Logradouro"
                    value={adress}
                    onChange={e => setAdress(e.target.value)}
                />

                <label>Complement</label>
                <input
                    id="complement"
                    name="complement"
                    type="text"
                    className="form-control"
                    placeholder="Complement"
                    value={complement}
                    onChange={e => setComplement(e.target.value)}
                />

                <label>District</label>
                <input
                    id="district"
                    name="district"
                    type="text"
                    className="form-control"
                    placeholder="District"
                    value={district}
                    onChange={e => setDistrict(e.target.value)}
                />

                <label>Zip-code</label>
                <input
                    id="zipcode"
                    name="zipcode"
                    type="text"
                    className="form-control"
                    placeholder="Zip code"
                    value={zipcode}
                    onChange={e => setZipcode(e.target.value)}
                />
                <label>City</label>
                <input i
                    d="city"
                    name="city"
                    type="text"
                    className="form-control"
                    placeholder="City"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />

                <label>State</label>
                <input
                    id="state"
                    name="state"
                    type="text"
                    className="form-control"
                    placeholder="State"
                    value={state}
                    onChange={e => setState(e.target.value)}
                />

            </div>
            <p />

            <div className="form-group">
                <label>Email address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <p />
            <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={handleSubmit}>
                Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
            </p>
        </form>
    );
}