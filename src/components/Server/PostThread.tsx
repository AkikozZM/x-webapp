import React from "react";
import { createClient } from "../../../utils/supabase/server";

const PostThread = () => {
  async function handlePost(formData: FormData) {
    "use server";
    try {
      // Get and validate post content
      const postContent = formData.get("postContent")?.toString().trim();
      if (!postContent) {
        throw new Error("Post content cannot be empty");
      }

      // Get authenticated user
      const supabase = await createClient();
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        throw new Error("User not authenticated");
      }

      // Insert the post
      const { error: insertError } = await supabase
        .from("tweets")
        .insert({
          id: crypto.randomUUID(),
          user_id: user.id,
          text: postContent,
        })
        .select();

      if (insertError) {
        console.error("Supabase insert error:", {
          message: insertError.message,
          details: insertError.details,
          hint: insertError.hint,
          code: insertError.code,
        });
        throw new Error(`Failed to create post: ${insertError.message}`);
      }
    } catch (error) {
      console.error("Posting failed:", error);
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
