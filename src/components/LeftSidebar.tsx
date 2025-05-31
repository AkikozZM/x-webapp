"use client";
import React, { useState } from "react";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/constants/icons";
import { createClient } from "../../utils/supabase/client";
import { useRouter } from "next/navigation";
import { UserProfile } from "./User/UserProfile";
import { BsThreeDots } from "react-icons/bs";
import { useUser } from "./User/UserContext";

const LeftSidebar = () => {
  const router = useRouter();
  const user = useUser();
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
    router.push("/login");
  };

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
              <item.icon size={28} />
            </div>
            {item.name !== "X" && <div>{item.name}</div>}
          </Link>
        ))}
        <button className="w-full rounded-full bg-black text-xl p-3 px-1 text-white font-bold hover:bg-black/90 cursor-pointer transition duration-200">
          Post
        </button>
      </div>
      {/* User Avatar */}
      {/* User Avatar with Popover Above */}
      <div className="relative mt-auto">
        {/* Popover positioned above */}
        {showLogout && (
          <div className="absolute bottom-[calc(100%+8px)] left-0 w-full bg-white shadow-lg rounded-lg border border-gray-200 z-50">
            <button
              onClick={handleLogout}
              className="flex justify-start w-full px-4 py-8 hover:bg-gray-100 cursor-pointer transition duration-200 text-black "
            >
              <span className="font-semibold">
                {user
                  ? `Logout ${user.user_metadata?.username}`
                  : "Log in here"}
              </span>
            </button>
          </div>
        )}

        {/* User Profile */}
        <button
          onClick={() => setShowLogout(!showLogout)}
          className="w-full rounded-full flex items-center justify-between py-5 px-2 text-black hover:bg-black/10 cursor-pointer transition duration-200"
        >
          <UserProfile />
          <div>
            <BsThreeDots />
          </div>
        </button>
      </div>
    </section>
  );
};

export default LeftSidebar;
