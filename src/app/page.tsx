import LeftSidebar from "@/components/LeftSidebar";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* Left Sidebar */}
        <LeftSidebar />
        {/* Main Content */}
        <main className="ml-72 p-6 flex w-[600px] h-full min-h-screen flex-col border-l border-r border-gray-300">
          <h1 className="text-2xl">Home</h1>
        </main>
      </div>
    </div>
  );
};

export default Home;
