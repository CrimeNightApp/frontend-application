import React from "react";
import Navbar from "./navbar";
// import Footer from "./footer"

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark-red-to-black font-dm-sans text-TEXT-PRIMARY">
      <Navbar />
      <div>
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default PageLayout;