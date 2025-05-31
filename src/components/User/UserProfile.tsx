"use client";

import { useUser } from "./UserContext";

export const UserAvatar = ({ size = 10 }: { size?: number }) => {
  const user = useUser();

  return (
    <div className={`rounded-full bg-slate-400 w-${size} h-${size}`}>
      <div className="text-black text-lg flex items-center justify-center h-full">
        {user?.user_metadata?.username?.charAt(0).toUpperCase() || ""}
      </div>
    </div>
  );
};

export const UserProfile = () => {
  const user = useUser();

  return (
    <div className="items-center justify-center flex space-x-2">
      <UserAvatar size={10} />
      <div className="text-left text-sm">
        <div className="font-bold">
          {user?.user_metadata?.username || "User"}
        </div>
        <div>@{user?.user_metadata?.username || "username"}</div>
      </div>
    </div>
  );
};
