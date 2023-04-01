import React from "react";

export default function Project({projectTitle, projectDeployedURL, projectGitHub, projectImage}){
    return(
        <section className="project_card">
              <header>
                {projectTitle}
                <a href={projectGitHub} target="_blank">
                <i className="fab fa-github" style={{padding:5}}></i>
                </a>
              </header>
              <div>
                    <a href={projectDeployedURL} target="_blank">
                        <img className="workingCard_image" src={projectImage} />
                    </a>
                </div>
            </section>
    );
}