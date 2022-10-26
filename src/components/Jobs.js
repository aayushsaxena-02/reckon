import React from "react";
import JobCards from "./JobCards";

function Job(){
    return(
        <section className="jobs">
            <div>
            <p className="heading_2">RECENT JOBS</p>
            <h2 className="heading_1">Featured Jobs</h2>

            <div class="container">
                <div class="row">
                    <div>
                    <JobCards />
                    </div>
                    
                </div>
            </div>

            </div>
        </section>
    )
};

export default Job;