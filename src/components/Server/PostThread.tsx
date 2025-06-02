import React from "react";
import { createClient } from "../../../utils/supabase/server";
// import { createClient } from "../../../utils/supabase/client";

const PostThread = () => {
  async function handlePost(formData: FormData) {
    "use server";
    const postContent = formData.get("postContent") as string;
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const secretKey = process.env.SUPABASE_SCRET_KEY;

    if (!url || !secretKey) {
      throw new Error("Supabase URL or secret key is not defined");
    }

    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      console.error("Authentication error:", {
        error: authError,
        session: await supabase.auth.getSession(),
      });
      return;
    }

    const { error: insertError } = await supabase
      .from("tweets")
      .insert({
        id: crypto.randomUUID(),
        text: postContent,
        user_id: user.id,
      })
      .select();
    if (insertError) {
      console.error("Error inserting post:", insertError);
    }
  }

  return (
    <form action={handlePost} className="flex items-stretch w-full h-full">
      <div className="flex flex-col w-full h-full">
        <input
          type="text"
          name="postContent"
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
    </form>
  );
};

export default PostThread;
