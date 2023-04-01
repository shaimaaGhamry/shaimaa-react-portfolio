import React from "react";

export default function Resume(){
    const resumeUrl = "https://example.com/resume.pdf";
    const proficiencies = ["JavaScript", "Express", "SQL", "React", "Node.js", "HTML", "CSS"];

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p>Download my resume:</p>
                    <a href={resumeUrl} download className="btn btn-primary">Download Resume</a>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6">
                    <p>My proficiencies:</p>
                    <ul className="list-group">
                        {proficiencies.map((proficiency, index) => (
                            <li key={index} className="list-group-item">{proficiency}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}