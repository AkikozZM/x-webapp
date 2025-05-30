import Link from "next/link";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

const RightSideBar = () => {
  return (
    <section className="w-full ml-10 flex flex-col space-y-4 h-screen items-stretch sticky top-0">
      {/* Search bar */}
      <div className="bg-white/10 backdrop-blur">
        <div>
          <div className="relative w-full h-full mt-2">
            <input
              id="searchBox"
              type="text"
              placeholder="Search"
              className="outline-blue-400 bg-transparent border-1 border-black/20 w-full h-full rounded-2xl py-3 px-10 peer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white
               focus:shadow-md"
            />
            <div
              className="absolute top-full mt-0.5 w-full bg-white px-4 border-b-40 border-t-5 hidden peer-focus:block
                  py-4 border border-gray-200"
            >
              <p className="text-gray-500 text-sm">
                Try searching for people, lists, or keywords
              </p>
            </div>
            <label
              htmlFor="searchBox"
              className="absolute top-3 left-4 h-full items-center justify-center"
            >
              <GoSearch className="w-5 h-5 text-gray-500" />
            </label>
          </div>
        </div>
      </div>
      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Subscribe to Premium */}
        <div className="flex flex-col space-y-2 p-4">
          <div className="font-bold text-xl">Subscribe to Premium</div>
          <div className="">
            Subscribe to unlock new features and if eligible, receive a share of
            revenue.
          </div>
          <button className="bg-blue-400 rounded-full text-white font-semibold w-30 h-10 cursor-pointer hover:bg-blue-500 transition duration-200">
            Subscribe
          </button>
        </div>
        {/* What's happening */}
        <div className="flex flex-col space-y-2  p-4">
          <div className="font-bold text-xl">What&apos;s happening</div>
          <Link href={"/"}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="py-2 border-b-[0.5px] border-gray-300 hover:bg-black/10 cursor-pointer rounded-xl transition duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="font-bold">#Trending Title {i + 1}</div>
                  <div className="text-gray-500">
                    <BsThreeDots />
                  </div>
                </div>
                <div className="text-gray-500">10.3k posts</div>
              </div>
            ))}
          </Link>
        </div>
        {/* Who to follow */}
        <div className="flex flex-col space-y-2  p-4">
          <div className="font-bold text-xl">Who to follow</div>
          <Link href={"/"}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="py-2 border-b-[0.5px] border-gray-300 hover:bg-black/10 cursor-pointer rounded-xl transition duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="font-bold">User {i + 1}</div>
                  <div className="text-gray-500">
                    <BsThreeDots />
                  </div>
                </div>
                <div className="text-gray-500">@user{i + 1}</div>
              </div>
            ))}
          </Link>
        </div>
        {/* Footer */}
        <div className="p-4 text-xs text-gray-500 ">
          Terms of Service | Privacy Policy | Cookie Policy
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
