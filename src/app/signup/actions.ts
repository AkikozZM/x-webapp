"use server";

import { z } from "zod";
import { createClient } from "../../../utils/supabase/server";

// Validation schema
const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  username: z.string().min(3).max(20),
});

export async function signup(formData: FormData) {
  const supabase = await createClient();

  try {
    // Validate inputs
    const { email, password, username } = signupSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
      username: formData.get("username"),
    });

    // Sign up with minimum required data first
    const { error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          // This goes to raw_user_meta_data
          username,
        },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      },
    });

    if (authError) throw authError;

    // Verify user was created
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) throw new Error("User confirmation failed");
    return { success: true };
  } catch (error) {
    console.error("Full error:", error);
    return {
      error: error instanceof Error ? error.message : "Signup failed",
      success: false,
    };
  }
}
