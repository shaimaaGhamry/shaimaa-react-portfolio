import React from "react";
 export default function PortfolioHeader({handlePageChange, currentPage}){
    return (
        <ul className="nav nav-tabs">
        <li className="nav-item">
            <a href="#AboutMe" 
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}            
            onClick={() => handlePageChange("AboutMe")}>About Me</a>
        </li>
        <li className="nav-item">   
            <a href="#Portfolio" 
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}            
            onClick={() => handlePageChange("Portfolio")}>Portfolio</a>
        </li>   

        <li className="nav-item"> 
            <a href="#ContactMe" 
             className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}            
            onClick={() => handlePageChange("ContactMe")}>Contact</a>
        </li>

        <li className="nav-item">   
            <a href="#Resume" 
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            onClick={() => handlePageChange("Resume")}>Resume</a>
        </li>
        </ul>
    );
 }