import React from "react";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { USER_ITERATIONS } from "@/constants/icons";
import { UserAvatar } from "./User/UserProfile";
import PostThread from "./Server/PostThread";
import { TweetList } from "./Server/TweetList";

const MainComponent = () => {
  return (
    <main className="ml-72 px-4 flex w-[600px] h-full min-h-screen flex-col ">
      <div className="flex items-center justify-between sticky top-0 bg-white/10 backdrop-blur">
        <button className="hover:bg-black/10 w-full h-full p-4 cursor-pointer">
          <h1 className="text-l font-semibold">For you</h1>
        </button>

        <button className="hover:bg-black/10 w-full h-full p-4 cursor-pointer">
          <h1 className="text-l font-semibold">Following</h1>
        </button>
      </div>
      {/* Type bar */}
      <div className=" py-4 h-32 relative flex items-stretch space-x-2">
        <div className="flex-none">
          <UserAvatar size={10} />
        </div>
        {/* Post Thread to Server */}
        <PostThread />
      </div>
      {/* User post threads */}
      <div className="flex flex-col">
        <TweetList />
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
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-1">
                  <div className="font-semibold">Username</div>
                  <div className="text-gray-500">@username</div>
                  <span className=" text-gray-500">
                    <BsDot />
                  </span>
                  <div className="text-gray-500">18h</div>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
              {/* User post content */}
              <div className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore ex consequuntur magni, vero quis autem suscipit
                aperiam. Dolores, cum ut et veniam laudantium consequatur error
                obcaecati itaque enim cumque excepturi? Assumenda nesciunt eos
                in, aut consequatur tenetur fuga, debitis sunt ea soluta
                expedita repudiandae, eveniet explicabo dolor nihil eius
                doloremque dolores obcaecati. Placeat quasi facere laborum
                corrupti eveniet
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
  );
};

export default MainComponent;
