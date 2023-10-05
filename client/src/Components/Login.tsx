import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();
    const handleLogin = async () => {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
       
        const data = await response.json();
        if (data.token) {
            localStorage.setItem("token", data.token)
            navigate("/todos");
        } else {
            alert("invalid credentials");
        }
    };

    return (
        <div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"10px"}}>
                <h2>Login</h2>
                <input style={{borderRadius:"10px",padding:"10px"}} type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                <input style={{borderRadius:"10px",padding:"10px"}} type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
               <div> New here? <Link to="/signup">Signup</Link> here </div>
                <button style={{borderRadius:"10px",padding:"10px"}} onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;
