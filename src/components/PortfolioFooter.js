import React from "react";
 export default function PortfolioFooter(){
    return (
        <footer className="bg-light py-3">
        <div className="container">
          <div className="row">
           
            <div className="col-12 col-md-6 text-md-end">
            <a href="https://github.com/ShaimaaGhamry" target="_blank">
                <i className="fab fa-github"></i> My GitHub</a>

              <span className="mx-2">|</span>

              <a href="https://www.linkedin.com/in/shaimaa-ghamry-421699261" target="_blank">
              <i className="fab fa-linkedin"></i>My LinkedIn</a>

              <span className="mx-2" target="_blank">|</span>
              <a href="mailto:shaimaa_elghamry@hotmail.com">Email</a>
            </div>
          </div>
        </div>

      </footer>

      
      
    );
 }