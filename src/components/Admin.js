import React, { useEffect, useState} from "react";
import Button from '@mui/material/Button';


function Admin(){

    const [jobData,setJobData] = useState([]);


    const callAdminPage = async() => {
        try{
            const res = await fetch('/admin',{
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            // console.log(data);
            setJobData(data);

            // console.log(data[0].name);            

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }

        }catch(err){
            console.log(err);
        }
    }


    useEffect(() => {
        callAdminPage();
    }, []);

    


    return(
        
        <div className="admin">

            <div className="post_button"><a href="/postJob"><Button variant="outlined">POST A NEW JOB </Button></a></div>
            
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Sr No.</th>
                    <th scope="col">Applicant Name</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Resume</th>
                    </tr>
                </thead>
                <tbody>
                {jobData.map((data,index) => (
                <tr>
                <th scope="row">{index + 1}</th>   
                <td>{data.name}</td>
                <td>{data.companyName}</td>
                <td>{data.resume}</td>
                </tr>
            ))}
               
                </tbody> 
                
                
            </table>
            
            
        </div>
    )
};

export default Admin;