import React from "react";
import { createClient } from "../../../utils/supabase/server";
import { Tweet } from "./Tweet";

interface TweetData {
  id: string;
  text: string;
  created_at: string;
  profiles: {
    full_name: string;
    username: string;
    avatar_url: string | null;
  };
}

const PAGE_SIZE = 10;

export async function TweetList() {
  const supabase = await createClient();

  const { data: tweets, error } = await supabase
    .from("tweets")
    .select(
      `
      id,
      text,
      created_at,
      profiles:user_id (full_name, username)
    `
    )
    .order("created_at", { ascending: false })
    .limit(PAGE_SIZE);

  if (error) {
    console.error("Error fetching tweets:", error);
    return (
      <div className="p-4 text-center text-red-500">
        Failed to load tweets. Please try again.
      </div>
    );
  }

  if (tweets.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No tweets found. Be the first to post!
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col">
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet as unknown as TweetData} />
        ))}
      </div>
    </>
  );
}
