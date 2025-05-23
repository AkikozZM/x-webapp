import React from "react";
import { GoSearch } from "react-icons/go";

const RightSideBar = () => {
  return (
    <section className="fixed flex flex-col space-y-4 ml-230">
      <div>
        <div>
          <div className="relative w-full h-full mt-2">
            <label
              htmlFor="searchBox"
              className="absolute top-0 left-4 h-full flex items-center justify-center"
            >
              <GoSearch className="w-5 h-5 text-gray-500" />
            </label>
            <input
              id="searchBox"
              type="text"
              placeholder="Search"
              className="outline-blue-400 bg-transparent border-1 border-black/20 w-full h-full rounded-2xl py-3 px-10"
            />
          </div>
        </div>
      </div>
      <div>Whats happening</div>
      <div>Who to follow</div>
    </section>
  );
};

export default RightSideBar;
