import React from "react";
import mvcBlogProjImage from "./../../images/blog.jpg";
import noteTakerImage from "../../images/noteTaker.png";
import expertiseImage from "../../images/logo-white.png";
import worldCupImage from "../../images/worldCup.png";
import schedulerImage from "../../images/scheduler.png";
import quizImage from "../../images/quiz.png";
import Project from "./Project";



export default function Projects(){
    return(
        <div classNameName="allProjectsCard"> 
          <header>My Projects</header>

          <section className="projects_container">

            <Project 
                projectTitle="MVC Blog Tech" 
                projectImage={mvcBlogProjImage}
                projectDeployedURL="https://shaimaa-teck-blog.herokuapp.com/"
                projectGitHub="https://github.com/shaimaaGhamry/MVC-Tech-Blog">                
            </Project>

            <Project 
                projectTitle="Note Taker" 
                projectImage={noteTakerImage}
                projectDeployedURL="https://shaimaa-express-note-taker.herokuapp.com/"
                projectGitHub="https://github.com/shaimaaGhamry/ExpressNoteTaker">                
            </Project>
            
            <Project
                projectTitle="Expertise - Skills Tracker" 
                projectImage={expertiseImage}
                projectDeployedURL="https://expertise-app-sg.herokuapp.com/"
                projectGitHub="https://github.com/shaimaaGhamry/SkillExpertise">                
            </Project>

            <Project
                projectTitle="World Cup 2022 Statistics" 
                projectImage={worldCupImage}
                projectDeployedURL="https://shaimaaghamry.github.io/WorldcupStats/"
                projectGitHub="https://github.com/shaimaaGhamry/WorldcupStats">                
            </Project>

            
            <Project
                projectTitle="Guess the country Quiz" 
                projectImage={quizImage}
                projectDeployedURL="https://shaimaaghamry.github.io/flagQuiz/"
                projectGitHub="https://github.com/shaimaaGhamry/flagQuiz">                
            </Project>

            <Project
                projectTitle="Colorful Scheduler" 
                projectImage={schedulerImage}
                projectDeployedURL="https://shaimaaghamry.github.io/colorfulScheduler/"
                projectGitHub="https://github.com/shaimaaGhamry/colorfulScheduler">                
            </Project>
          </section>
        
        </div>
    );
}