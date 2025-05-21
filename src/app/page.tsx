import React from "react";
import { IoMdHome } from "react-icons/io";
import { GoSearch, GoBell, GoMail } from "react-icons/go";
import { LuUser } from "react-icons/lu";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { it } from "node:test";
const NAVIGATION_ITEMS = [
  {
    name: "Home",
    icon: IoMdHome,
  },
  {
    name: "Explore",
    icon: GoSearch,
  },
  {
    name: "Notifications",
    icon: GoBell,
  },
  {
    name: "Messages",
    icon: GoMail,
  },
  {
    name: "Profile",
    icon: LuUser,
  },
];

const Home = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="max-w-screen-lg w-full h-full flex relative">
        <section className="fixed w-72 flex-col flex h-screen spcace-y-4 my-4">
          <Link href={"/"} className="p-2 text-2xl">
            <FaXTwitter />
          </Link>
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              href={`/${item.name}`}
              key={item.name}
              className="text-2xl transition duration-200 hover:bg-black/10 flex rounded-4xl space-x-2 p-2 w-fit items-center justify-start "
            >
              <div>
                <item.icon />
              </div>
              <div>{item.name}</div>
            </Link>
          ))}
        </section>
        {/* <div>Home timeline</div>
        <div>right part</div> */}
      </div>
    </div>
  );
};

export default Home;
