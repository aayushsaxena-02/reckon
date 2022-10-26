import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function PostJob(){

    const navigate = useNavigate();

    const [companyData,setCompanyData] = useState({
        companyName:"",
        work:"",
        location:"",
        salary:""
    });
   
    let name,value;

    function handleInputs (e){
        name = e.target.name;
        value = e.target.value;

        setCompanyData({...companyData,[name]:value});
    };

    const postData = async (e) => {
        e.preventDefault();

        const {companyName,work,location,salary} = companyData;

        const res = await fetch("/postJob",{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                companyName,work,location,salary
            })
        });

        const data = await res.json();

        if(res.status === 422 || !data){
            window.alert("Registration failed");
            console.log("Registration failed");
        }else{
            window.alert("Company registered");
            console.log("Company registered");
            navigate('/jobs');
        }
    }

    return(
        <div className="signup">
                <div className="forms">
                    <h2 className="signup_heading">Post New Openings</h2>
                    <form method='POST'>

                        <div className="form-group">
                        <label htmlFor="name">
                        <i class="zmdi zmdi-network material-icons-name"></i>
                        </label>
                        <input type="text" name="companyName" id="companyName" autoComplete="off" placeholder="Company Name" value={companyData.companyName} onChange={handleInputs}/>
                        </div>

                        <div className="form-group">
                        <label htmlFor="name">
                        <i class="zmdi zmdi-bookmark material-icons-name"></i>
                        </label>
                        <input type="text" name="work" id="work" autoComplete="off" placeholder="Work" value={companyData.work} onChange={handleInputs}/>
                        </div>

                        <div className="form-group">
                        <label htmlFor="name">
                        <i class="zmdi zmdi-pin material-icons-name"></i>
                        </label>
                        <input type="text" name="location" id="location" autoComplete="off" placeholder="Job Location" value={companyData.location} onChange={handleInputs}/>
                        </div>

                        <div className="form-group">
                        <label htmlFor="name">
                        <i class="zmdi zmdi-balance material-icons-name"></i>
                        </label>
                        <input type="text" name="salary" id="salary" autoComplete="off" placeholder="Salary Offered" value={companyData.salary} onChange={handleInputs}/>
                        </div>

                        <div className="form_button"><a href="/jobs"><Button onClick={postData} type="button"  variant="outlined">Post Job</Button></a></div>
                    </form>
                </div>

            </div>
    )
};

export default PostJob;