import React, { useState } from 'react';
import AboutMe from './Pages/AboutMe';
import ContactMe from './Pages/ContactMe';
import Portfolio from './Pages/Projects';
import Resume from './Pages/Resume';
import PortfolioFooter from "./PortfolioFooter";
import PortfolioHeader from "./PortfolioHeader";

export default function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState("AboutMe");
   
    const renderCurrentPage = ()=>{
        console.log("The current Page is");
        console.log( currentPage);

        if (currentPage === "AboutMe")
            return <AboutMe></AboutMe>;
        if (currentPage === "Portfolio")
            return <Portfolio></Portfolio>;
        if (currentPage === "ContactMe")
            return <ContactMe></ContactMe>;
        if (currentPage === "Resume")
            return <Resume></Resume>;

    }

    const handlePageChange = ( newPage )=>{
        setCurrentPage(newPage);
    }

    return (
        <div>
        <PortfolioHeader currentPage={currentPage} handlePageChange={handlePageChange}>
        </PortfolioHeader>

        {renderCurrentPage()}
        

        <PortfolioFooter>

        </PortfolioFooter>
        </div>
    );
}