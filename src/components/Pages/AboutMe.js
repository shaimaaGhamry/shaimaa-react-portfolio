import React from "react";
import myImage from "../../images/shaimaaPic.jpg"

export default function AboutMe(){
    return(
        
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <hr className="my-4" />
                    <img src={myImage} className="img-fluid rounded-circle" alt="My Image" />
                    <hr className="my-4" />
                </div>
                
                <div className="col-md-9">                    
                    <div className="card my-4">                       
                        <div className="card-body">
                            <h2 className="card-title text-center">About Me</h2>
                            <hr className="my-4" />
                            <p className="card-text">
                                Hello, my name is Shaimaa Ghamry, and I am a full stack developer seeking remote opportunities. I graduated with a degree in Computer Science and have been working as a software engineer for 3 years. During my time at IBM Egypt, I gained valuable experience in Web Development, which I am excited to apply to new challenges and projects.
                            </p>
                            <p className="card-text">
                                In addition to my professional experience, I also completed a full stack development bootcamp at University of New Brunswick for 6 months. This program gave me hands-on experience with javaScript Technologies, and allowed me to develop my skills as both a front-end and back-end developer.
                            </p>
                            <p className="card-text">
                                As a full stack developer, I enjoy working on both the front-end and back-end of applications, and am always looking to expand my skillset and learn new technologies.
                            </p>
                            <p className="card-text">
                                My ultimate goal is to use my skills and experience to create innovative and user-friendly applications that make a positive impact on people's lives. If you are looking for a dedicated and passionate developer to join your team, I would love to hear from you.
                            </p>
                            <hr className="my-4"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

 );
}