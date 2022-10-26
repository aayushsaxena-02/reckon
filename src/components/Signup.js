import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function Signup() {

    const navigate = useNavigate();

    const [user,setUser] = useState({
        name:"",
        email:"",
        phone:"",
        specialization:"",
        password:"",
        cpassword:""
    });

    let name,value;

     function handleInputs(e) {
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {name,email,phone,specialization,password,cpassword} = user;

        const res = await fetch("/register",{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,email,phone,specialization,password,cpassword 
                // key:value are same that why one time written i.e name:name etc.
            })
        });

        //check if data received

        const data = await res.json();

        if(res.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }else{
            window.alert("Registration successfull");
            console.log("Registration successfull");
            navigate('/signin');
        }
     };

    return(
        
            <div className="signup">
                <div className="forms">
                    <h2 className="signup_heading">Sign Up</h2>
                    <form method="POST">
                        <div className="form-group">
                            <label htmlFor="name">
                            <i class="zmdi zmdi-account material-icons-name"></i>
                            </label>
                            <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name" value={user.name} onChange={handleInputs}/>
                        </div>

                        <div className="form-group">
                        <label htmlFor="email">
                        <i class="zmdi zmdi-email material-icons-name"></i>
                        </label>
                        <input type="text" name="email" id="email" autoComplete="off" placeholder="Email" value={user.email} onChange={handleInputs}/>
                        </div>

                        <div className="form-group">
                        <label htmlFor="phone">
                        <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                        </label>
                        <input type="text" name="phone" id="phone" autoComplete="off" placeholder="Phone" value={user.phone} onChange={handleInputs}/>
                        </div>

                        <div className="form-group">
                        <label htmlFor="specialization">
                        <i class="zmdi zmdi-bookmark material-icons-name"></i>

                        </label>
                        <input type="text" name="specialization" id="specialization" autoComplete="off" placeholder="Specialization" value={user.specialization} onChange={handleInputs}/>
                        </div>

                        <div className="form-group">
                        <label htmlFor="password">
                        <i class="zmdi zmdi-lock material-icons-name"></i>
                        </label>
                        <input type="password" name="password" id="password" autoComplete="off" placeholder="Your Password" value={user.password} onChange={handleInputs}/>
                        </div>

                        <div className="form-group">
                        <label htmlFor="cpassword">
                        <i class="zmdi zmdi-lock material-icons-name"></i>
                        </label>
                        <input type="password" name="cpassword" id="cpassword" autoComplete="off" placeholder="Confirm Your Password" value={user.cpassword} onChange={handleInputs} />
                        </div>

                        <button type="button" class="btn btn-primary form-button login" onClick={PostData}>Sign Up</button>
                        
                    </form>
                </div>

            </div>
        
    )
};

export default Signup;