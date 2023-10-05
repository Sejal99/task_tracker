import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useSetRecoilState} from "recoil";
import {authState} from "../store/authState.js";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        const response = await fetch('http://localhost:3000/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        // Todo: Create a type for the response that you get back from the server
        const data = await response.json();
        if (data.token) {
            localStorage.setItem("token", data.token)
            
        } else {
            alert("Error while signing up");
        }
    };

    return (
        <div >
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px"}}>
                <h2>Signup</h2>
                <input style={{borderRadius:"10px",padding:"10px"}} type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                <input style={{borderRadius:"10px",padding:"10px"}}  type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
               <div>Already signed up? <Link to="/login">Login</Link> here</div> 
                <button style={{borderRadius:"10px",padding:"10px"}} onClick={handleSignup}>Signup</button>
            </div>
        </div>
    );
};

export default Signup;
