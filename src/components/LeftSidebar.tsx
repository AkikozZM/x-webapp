"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/constants/icons";
import { BsThreeDots } from "react-icons/bs";
import { createClient } from "../../utils/supabase/client";
import { useRouter } from "next/navigation";

interface User {
  user_metadata?: {
    username?: string;
  };
  email?: string;
}

const LeftSidebar = () => {
  const router = useRouter();
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
    router.push("/login");
  };

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    // Simulate fetching user data
    const fetchUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

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
          <div className="items-center justify-center flex space-x-2">
            <div className="rounded-full bg-slate-400 w-10 h-10">
              <div className="text-black text-lg flex items-center justify-center h-full">
                {user?.user_metadata?.username?.charAt(0).toUpperCase() || ""}
              </div>
            </div>
            <div className="text-left text-sm">
              <div className="font-bold">
                {user?.user_metadata?.username || "User"}
              </div>
              <div>@{user?.user_metadata?.username || "username"}</div>
            </div>
          </div>
          <div>
            <BsThreeDots />
          </div>
        </button>
      </div>
    </section>
  );
};

export default LeftSidebar;
