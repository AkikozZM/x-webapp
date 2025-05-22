import LeftSidebar from "@/components/LeftSidebar";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

import { FaRegComment } from "react-icons/fa6";
import { AiOutlineRetweet } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { IoStatsChartOutline } from "react-icons/io5";
import { GoShare } from "react-icons/go";

const USER_ITERATIONS = [
  {
    name: "Comment",
    icon: FaRegComment,
  },
  {
    name: "Repost",
    icon: AiOutlineRetweet,
  },
  {
    name: "Like",
    icon: GoHeart,
  },
  {
    name: "View",
    icon: IoStatsChartOutline,
  },
  {
    name: "Share",
    icon: GoShare,
  },
];

const Home = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* Left Sidebar */}
        <LeftSidebar />
        {/* Main Content */}
        <main className="ml-72 p-4 flex w-[600px] h-full min-h-screen flex-col border-l border-r border-gray-300">
          <div className="flex items-center justify-between sticky top-0 bg-white/10 backdrop-blur">
            <button className="hover:bg-black/10 w-full h-full p-4 cursor-pointer">
              <h1 className="text-l font-semibold">For you</h1>
            </button>

            <button className="hover:bg-black/10 w-full h-full p-4 cursor-pointer">
              <h1 className="text-l font-semibold">Following</h1>
            </button>
          </div>
          {/* Type bar */}
          <div className="border-t-[0.5px] border-b-[0.5px] border-gray-300 py-4 h-32 relative flex items-stretch space-x-2">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none ">
              A
            </div>
            <div className="flex flex-col w-full h-full">
              <input
                type="text"
                className="p-4 w-full h-full bg-transparent outline-none border-none text-xl placeholder:text-gray-500"
                placeholder="What's happening?"
              />
              <div className="w-full justify-between flex items-center">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button className="w-full rounded-full bg-black text-l py-2 px-4 text-white font-bold hover:bg-black/90 cursor-pointer transition duration-200">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* User post threads */}
          <div className="flex flex-col">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="justify-between flex items-start space-x-4 p-4 border-b-[0.5px] border-gray-300"
              >
                <div>
                  <div className="w-10 h-10 bg-purple-900 rounded-full flex-none " />
                </div>
                <div className="flex flex-col space-y-2">
                  {/* User info */}
                  <div className="flex items-center space-x-2">
                    <div className="font-semibold">Username</div>
                    <div className="text-gray-500">@username</div>
                    <span className="font-bold text-gray-500">·</span>
                    <div className="text-gray-500">18h</div>
                    <div>
                      <BsThreeDots />
                    </div>
                  </div>
                  {/* User post content */}
                  <div className="text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Inventore ex consequuntur magni, vero quis autem suscipit
                    aperiam. Dolores, cum ut et veniam laudantium consequatur
                    error obcaecati itaque enim cumque excepturi? Assumenda
                    nesciunt eos in, aut consequatur tenetur fuga, debitis sunt
                    ea soluta expedita repudiandae, eveniet explicabo dolor
                    nihil eius doloremque dolores obcaecati. Placeat quasi
                    facere laborum corrupti eveniet
                  </div>
                  {/* User post media */}
                  <div className="bg-slate-400 aspect-square w-full h-96 rounded-2xl"></div>
                  {/* Interative button */}
                  <div className="flex items-center justify-start space-x-18 w-full">
                    {USER_ITERATIONS.map((item) => (
                      <button
                        key={item.name}
                        className="flex items-center space-x-1 text-gray-500 hover:bg-black/10 rounded-full p-2 cursor-pointer"
                      >
                        <div>
                          <item.icon />
                        </div>
                        <div></div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        {/* Right section here */}
      </div>
    </div>
  );
};

export default Home;
