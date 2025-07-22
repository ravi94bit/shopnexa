import React from "react";
import HeadSection from "../HeadSection";
import Footer from "../Footer";
import MainPanel from "../MainPanel";

function HomeLayout ({ children }) {
  return (
    
    <div class="wrapper">
    
      <HeadSection />
      
      <MainPanel>
      
        {children}
     
      </MainPanel>
      
    </div>
   
  );
}
export default HomeLayout;