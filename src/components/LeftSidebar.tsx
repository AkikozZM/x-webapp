import React from "react";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/constants/icons";
import { BsThreeDots } from "react-icons/bs";

const LeftSidebar = () => {
  return (
    <section className="fixed w-66 flex-col flex items-stretch h-screen">
      {/* Left Nav bar */}
      <div className="flex flex-col items-stretch h-full">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            href={`/${item.name}`}
            key={item.name}
            className="text-xl transition duration-200 hover:bg-black/10 flex rounded-4xl space-x-4 p-3 px-2 w-fit items-center justify-start "
          >
            <div>
              <item.icon />
            </div>
            {item.name !== "X" && <div>{item.name}</div>}
          </Link>
        ))}
        <button className="w-full rounded-full bg-black text-xl p-3 px-1 text-white font-bold hover:bg-black/90 cursor-pointer transition duration-200">
          Post
        </button>
      </div>
      {/* User Avatar */}
      <button className="w-full rounded-full flex items-center justify-between py-5 px-1 text-black  hover:bg-black/10 cursor-pointer transition duration-200">
        <div className="items-center justify-center flex space-x-2">
          <div className="rounded-full bg-slate-400 w-10 h-10">A </div>
          <div className="text-left text-sm">
            <div className="font-bold">User</div>
            <div>@UserName</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default LeftSidebar;
