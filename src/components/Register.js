import React, { useState } from "react";
import api from "../services/api";

//Formulário de registro para cadastro
export default function Register() {

    const [name, setName] = useState('');
    const [fone, setFone] = useState('');
    const [tipo, setTipo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Função que envia os dados para o backend
    async function handleSubmit() {
        const data = {
            name: name,
            fone: fone,
            tipo: tipo,
            email: email,
            password: password
        }

        console.log(data)
        const response = await api.post('register', data);
                
        if(response.status===200){
            //window.location.href='/login'
            console.log("Erro")
        }else{
            alert('Erro ao cadastrar o usuário!')
        }
    }


    return (
        <form onSubmit={handleSubmit}>
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
                <label>Fone</label>
                <input
                    id="fone"
                    name="fone"
                    type="text"
                    className="form-control"
                    placeholder="Telefone"
                    value={fone}
                    onChange={e => setFone(e.target.value)}
                />
                <p />

                <div className="form-group">
                    <label>Tipo de Usuario</label>
                    <select value={tipo} onChange={e => setTipo(e.target.value)} >
                        <option value="Usuario">Usuario</option>
                        <option value="Engenheiro de Software">Engenheiro de Software</option>
                    </select>
                </div>

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