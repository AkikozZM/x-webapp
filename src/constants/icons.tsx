import { AiOutlineHome } from "react-icons/ai";
import { GoSearch, GoBell, GoMail } from "react-icons/go";
import { LuUser } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { SiOpenai } from "react-icons/si";
import { FaRegBookmark } from "react-icons/fa";
import { TfiBag } from "react-icons/tfi";
import { RiCommunityLine } from "react-icons/ri";
import { IoFlashOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import { AiOutlineRetweet } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { IoStatsChartOutline } from "react-icons/io5";
import { GoShare } from "react-icons/go";

export const NAVIGATION_ITEMS = [
  {
    name: "X",
    icon: FaXTwitter,
  },
  {
    name: "Home",
    icon: AiOutlineHome,
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
    name: "GPT",
    icon: SiOpenai,
  },
  {
    name: "Bookmarks",
    icon: FaRegBookmark,
  },
  {
    name: "Jobs",
    icon: TfiBag,
  },
  {
    name: "Communities",
    icon: RiCommunityLine,
  },
  {
    name: "Premium",
    icon: FaXTwitter,
  },
  {
    name: "Verified Orgs",
    icon: IoFlashOutline,
  },
  {
    name: "Profile",
    icon: LuUser,
  },
  {
    name: "More",
    icon: CiCircleMore,
  },
];

export const USER_ITERATIONS = [
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
