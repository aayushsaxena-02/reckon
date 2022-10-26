import React, { useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'

function Profile(){

    const navigate = useNavigate();
    const [userData,setUserData] = useState({});

    const callProfilePage = async () => {
        try{
            const res = await fetch('/profile',{
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            setUserData(data);

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
        callProfilePage();
    }, []);

    return(
        <section className="profile">
            <div className="container main_profile">
                <form method="GET">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="reckon" src="./images/reckon.jpg" alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="profile_head">
                                <h5>{userData.name}</h5>
                                <h6>{userData.specialization}</h6>
                                <p className="heading_3">RATING: 9/10</p>


                                <ul className="nav mt-4 nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#home" id="home-tab" data-toggle="tab" role="tab">About</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#profile" id="profile-tab" data-toggle="tab" role="tab">Timeline</a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <p className="heading_4">MY DETAILS</p>
                                <div className="social">
                                    <a href="">Linked In</a>
                                </div>
                                <div className="social">
                                    <a href="">Instagram</a>
                                </div>
                                <div className="social">
                                    <a href="">Github</a>
                                </div>
                                <div className="social">
                                    <a href="">CodeChef</a>
                                </div>
                        </div>

                        <div className="col-md-8 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row mt-5">
                                        <div className="col-md-6 ">
                                            <label>User ID</label>
                                        </div>

                                        <div className="col-md-6 ">
                                            <p>RA2011047010126</p>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <label>Name</label>
                                        </div>

                                        <div className="col-md-6 ">
                                            <p>{userData.name}</p>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <label>Email</label>
                                        </div>

                                        <div className="col-md-6 ">
                                            <p>{userData.email}</p>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <label>Profession</label>
                                        </div>

                                        <div className="col-md-6 ">
                                            <p>{userData.specialization}</p>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <label>Phone</label>
                                        </div>

                                        <div className="col-md-6 ">
                                            <p>{userData.phone}</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row mt-5">
                                        <div className="col-md-6 ">
                                            <label>Experience</label>
                                        </div>

                                        <div className="col-md-6 ">
                                            <p>Intermediate</p>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <label>Hourly Rate</label>
                                        </div>

                                        <div className="col-md-6 ">
                                            <p>104/hr</p>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <label>Total Projects</label>
                                        </div>

                                        <div className="col-md-6 ">
                                            <p>20</p>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <label>Language</label>
                                        </div>

                                        <div className="col-md-6 ">
                                            <p>English</p>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <label>Availability</label>
                                        </div>

                                        <div className="col-md-6 ">
                                            <p>3 months</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Profile;