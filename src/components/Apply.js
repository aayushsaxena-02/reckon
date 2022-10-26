import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';


function Apply() {

    const navigate = useNavigate();
    const [userData,setUserData] = useState({
        name:"",
        companyName:"",
        resume:""
    });

    const callApplyPage = async () => {
        try{
            const res = await fetch('/apply',{
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            setUserData({...userData,name:data.name});

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }

        }catch (err) {
            console.log(err);
            navigate("/signin");
        }
    }

    useEffect(() => {
        callApplyPage();
    }, []);


    let name,value;

    function handleInputs(e) {
        name = e.target.name;
        value = e.target.value;

        setUserData({...userData, [name]:value});
    }

    const postData = async(e) => {
        e.preventDefault();
        const {name,companyName,resume} = userData;

        const res = await fetch('/apply',{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,companyName,resume 
            })
        });

        const data = await res.json();
        
        if(res.status === 422 || !data){
            window.alert("Application failed");
            console.log("Application failed");
        }else{
            window.alert("Application Successfull");
            console.log("Application Successfull");
            navigate('/');
        }

    };



    return(
        <div>
            <div className="signup">
                <div className="forms">
                    <h2 className="signup_heading">Apply For Your Dream Job</h2>
                    <form method='POST'>

                        <div className="form-group">
                        <label htmlFor="name">
                        <i class="zmdi zmdi-account material-icons-name"></i>
                        </label>
                        <input type="text" name="name" id="name" autoComplete="off" placeholder="Your name" value={userData.name} onChange={handleInputs}/>
                        </div>

                        <div className="form-group">
                        <label htmlFor="name">
                        <i class="zmdi zmdi-network material-icons-name"></i>
                        </label>
                        <input type="text" name="companyName" id="companyName" autoComplete="off" placeholder="Company Name" value={userData.companyName} onChange={handleInputs}/>
                        </div>

                        <div className="form-group">
                        <label htmlFor="name">
                        <i class="zmdi zmdi-receipt material-icons-name"></i>
                        </label>
                        <input type="text" name="resume" id="resume" autoComplete="off" placeholder="Resume Link" value={userData.resume} onChange={handleInputs}/>
                        </div>

                        {/* <button  class="btn btn-primary form-button" >Apply</button> */}
                        <div className="form_button"><a href="/jobs"><Button  type="button" onClick={postData} variant="outlined">Apply</Button></a></div>
                    </form>
                </div>

            </div>
        </div>
    )
};

export default Apply;