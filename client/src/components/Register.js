import React, { useState } from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom'

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();

    function handleRegister(e){
        e.preventDefault();
        
        const newUser = {
            name,
            email,
            password
        }

        axios
            .post(newUser)
            .then(res => {
                history.push("/");
            }).catch(err => {
                // mostrar pro usuario qual o problema
                console.log(err)
            })
    }

    return (
        <div>
            <h2>MeAcha</h2>
            <div className="row container center">
                <form className="col s6" onSubmit={e => handleRegister(e)}>
                <div className="row">
                    <div className="input-field col s6">
                    <input       
                        id="first" 
                        type="text" 
                        className="validate" 
                        value={name}
                        onChange={e => setName(e.target.value)} 
                    />
                    <label htmlFor="first">Nome</label>
                    </div>                   
                </div>
                <div className="row">
                    <div className="input-field col s6">
                    <input 
                        id="email" 
                        type="email" 
                        className="validate"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="email" data-error="Email inválido">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                    <input 
                        id="password" 
                        type="password" 
                        className="validate"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="password">Senha</label>
                    </div>
                </div>
                <button className="waves-effect btn" type="submit">Registrar</button>
                </form>
            </div>
        </div>
    );
}

export default Register;