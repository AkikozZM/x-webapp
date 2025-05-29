"use client";

import { signup } from "./actions";
import AuthLayout from "@/components/Auth/AuthLayout";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      // Call the signup function with the form data
      const result = await signup(formData);
      console.log("Signup result:", result);
    } catch (err) {
      console.error("Signup error:", err);
      // Handle error appropriately, e.g., show a notification or alert
    }
  };

  return (
    <AuthLayout title="Happening now" subtitle="Join today.">
      <form onSubmit={handleSignUp} className="flex flex-col space-y-4">
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="name"
          placeholder="Username"
          className="border-1 border-gray-300 rounded-full py-2 px-4 text-l"
          required
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
          className="border-1 border-gray-300 rounded-full py-2 px-4 text-l"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
          className="border-1 border-gray-300 rounded-full py-2 px-4 text-l"
          required
        />
        <button
          type="submit"
          className="border-1 border-gray-300 w-full rounded-full bg-blue-500 text-l py-2 px-4 text-white font-bold hover:bg-blue-600 cursor-pointer transition duration-200"
        >
          Sign up
        </button>
      </form>
      <div className="flex flex-col space-y-4">
        <div className="font-bold">Already have an account?</div>
        <Link href={"/login"}>
          <button className="border-1 border-gray-300 w-full rounded-full bg-while text-l py-2 px-4 text-blue-500 font-bold hover:bg-gray-200 cursor-pointer transition duration-200">
            Log in
          </button>
        </Link>
      </div>
    </AuthLayout>
  );
}
