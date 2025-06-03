import { BsDot, BsThreeDots } from "react-icons/bs";
import { USER_ITERATIONS } from "@/constants/icons";
import { formatDistanceToNow } from "date-fns";

interface Profile {
  full_name: string;
  username: string;
  avatar_url: string | null;
}

interface TweetData {
  id: string;
  text: string;
  created_at: string;
  profiles: Profile;
}

export function Tweet({ tweet }: { tweet: TweetData }) {
  return (
    <div className="flex items-start space-x-4 p-4 border-b-[0.5px] border-gray-300">
      <div className="flex-none">
        {/* put avatar url here later */}
        <div className="w-10 h-10 bg-purple-900 rounded-full flex-none " />
        {/* <img 
          src={tweet.profiles.avatar_url || "/default-avatar.png"} 
          alt={tweet.profiles.full_name}
          className="w-10 h-10 rounded-full"
        /> */}
      </div>
      <div className="flex flex-col space-y-2 flex-grow">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-1">
            <div className="font-semibold">{tweet.profiles.username}</div>
            <div className="text-gray-500 text-sm">
              @{tweet.profiles.username}
            </div>
            <span className="text-gray-500 text-sm">
              <BsDot size={10} />
            </span>
            <div className="text-gray-500 text-sm">
              {formatDistanceToNow(new Date(tweet.created_at))} ago
            </div>
          </div>
          <div>
            <BsThreeDots />
          </div>
        </div>
        {/* User post content */}
        <div className="text-sm">{tweet.text}</div>
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
  );
}
