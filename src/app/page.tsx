import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import RightSideBar from "@/components/RightSideBar";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* Left Sidebar */}
        <LeftSidebar />
        {/* Main Content */}
        <MainComponent />
        {/* Right section here */}
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
