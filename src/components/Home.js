import React from "react";
import Features from "./Features";
import Jobs from "./Jobs";

function Home() {
    return (
        <section id="home">
            <div className="home">
                <img className="main_img" src="./images/back_img.webp" alt="" />
                     <div className="home_title">
                        <h1>Find the <br /> most exciting startup jobs</h1>
                    </div>
            </div>

            <Features />
            
            <div className="cv_main">
                <div className="parent_img">
                    <img className="img_1" src="./images/resume_1.webp" alt="" />
                    <img className="img_2" src="./images/1.jpg" alt="" />
                </div>
                <div className="container cv">
                    <div className="row ">
                        <div className="col-lg-10">
                            <p className="para_1">FEATURED CAREER PACKAGES</p>
                            <p className="para_2">Make a Difference <br /> with Your Online Resume!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Jobs />
        </section>
    )
};

export default Home;