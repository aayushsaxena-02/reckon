import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function JobCards(){

    const navigate = useNavigate();

    const [jobData,setJobData] = useState([]);


    const callJobPage = async () => {
        try{
            const res = await fetch('/postJob',{
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            setJobData(data);

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
        callJobPage();
    }, []);

    return(
        <div>
            {jobData.map((data) => (
            <div  className="col-lg-12 col-md-12 col-sm-12">
            <div className="jobCards">
                <div className="single_job_items">
                    <div className="job_items">
                       <h3>{data.companyName}</h3>
                       <ul>
                           <li>{data.work}</li>
                           <li><i class="zmdi zmdi-pin material-icons-name"></i>  {data.location}</li>
                           <li>&#8377; {data.salary}</li>
                       </ul>     
                    </div>
                </div>
                <div className="job_link">
                <a href="/apply"><Button  variant="outlined">Apply</Button></a>
                </div>
            </div>
            </div>
            ))}
        </div>
    )
};

export default JobCards;