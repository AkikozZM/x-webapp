"use client";

import { signup } from "./actions";
import AuthLayout from "@/components/Auth/AuthLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setError(null); // Reset error state
    // Validate inputs
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      // Call the signup function with the form data
      const result = await signup(formData);
      console.log("Signup result:", result);
      if (result.error) {
        // If there's an error, set the error state
        setError(result.error);
      } else {
        // If signup is successful, redirect to the home page
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error("Signup error:", err);
    }
  };

  return (
    <AuthLayout title="Happening now" subtitle="Join today.">
      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
      <form onSubmit={handleSignUp} className="flex flex-col space-y-4">
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
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
