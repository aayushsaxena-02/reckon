import React from "react";

function Features(){
    return(
        <div>
            <div className="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="heading_2">FEATURED CAREER PACKAGES</p>
                            <h2 className="heading_1">Browse Top Categories</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="cards">
                                <img classname="ab" src="./images/design.png" alt="" />
                                <h5>Design & Creative</h5>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="cards">
                                <img classname="ab" src="./images/development.png" alt="" />
                                <h5>Design & development</h5>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="cards">
                                <img classname="ab" src="./images/sales.png" alt="" />
                                <h5>Sales & Marketing</h5>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="cards">
                                <img classname="ab" src="./images/mobile.png" alt="" />
                                <h5>Mobile Application</h5>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="cards">
                                <img  src="./images/cons.png" alt="" />
                                <h5>Construction</h5>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="cards">
                                <img  src="./images/estate.png" alt="" />
                                <h5>Real Estate</h5>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="cards">
                                <img  src="./images/it.png" alt="" />
                                <h5>Information Technology</h5>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="cards">
                                <img  src="./images/content.png" alt="" />
                                <h5>Content Writer</h5>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Features;