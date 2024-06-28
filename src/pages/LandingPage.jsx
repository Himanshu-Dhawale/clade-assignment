// import React from 'react'
// import Tabs from '../components/Tabs'
// import Navbar from '../components/Navbar'
// import MainContent from '../components/MainContent'

// const LandingPage = () => {
//   return (
//     <div className='w-auto max-w-[1728px] min-h-screen bg-[#fcfcfc] relative'>
//       <Navbar/>
//       <Tabs/>
//       <MainContent/>
//     </div>
//   )
// }

// export default LandingPage

import React from "react";
import Tabs from "../components/Tabs";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#fcfcfc] relative overflow-x-hidden responsive-container">
      <Navbar />
      <Tabs />
      <MainContent />
      <div id="sidebar">
        <Sidebar/>
        <Card/>
      </div>
    </div>
  );
};

export default LandingPage;