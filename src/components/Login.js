import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){

    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const loginDoc = async(e) => {
        e.preventDefault();

        const res = await fetch('/login',{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            "body": JSON.stringify({
                email,password
            })
        });

        const data = await res.json();
        if(res.status === 400 || !data){
            window.alert("Invalid Credentials");
        }else{
            window.alert("success");
            navigate("/jobs");
        }

    };

    

    return(
        <div className="signup">
                <div className="forms">
                    <h2 className="signup_heading">Sign In</h2>
                    <form method='POST'>

                        <div className="form-group">
                        <label htmlFor="email">
                        <i class="zmdi zmdi-email material-icons-name"></i>
                        </label>
                        <input type="text" name="email" id="email" autoComplete="off" placeholder="Email" 
                        value={email} onChange={(e) => {setEmail(e.target.value)}} />
                        </div>

                        <div className="form-group">
                        <label htmlFor="password">
                        <i class="zmdi zmdi-lock material-icons-name"></i>
                        </label>
                        <input type="password" name="password" id="password" autoComplete="off" placeholder="Your Password" 
                        value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>

                        <button type="button" class="btn btn-primary form-button login" onClick={loginDoc} >Sign In</button>
                        
                    </form>
                </div>

            </div>
    )
};

export default Login;