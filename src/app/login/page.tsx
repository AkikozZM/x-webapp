import Link from "next/link";
import { login } from "./actions";
import AuthLayout from "@/components/Auth/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout title="Happening now" subtitle="Welcome back.">
      <form className="flex flex-col space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border-1 border-gray-300 rounded-full py-2 px-4 text-l"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-1 border-gray-300 rounded-full py-2 px-4 text-l"
          required
        />
        <button
          formAction={login}
          type="submit"
          className="border-1 border-gray-300 w-full rounded-full bg-blue-500 text-l py-2 px-4 text-white font-bold hover:bg-blue-600 cursor-pointer transition duration-200"
        >
          Log in
        </button>
      </form>
      <div className="flex flex-col space-y-4">
        <div className="font-bold">Doesn&apos;t have an account?</div>
        <Link href={"/signup"}>
          <button className="border-1 border-gray-300 w-full rounded-full bg-while text-l py-2 px-4 text-blue-500 font-bold hover:bg-gray-200 cursor-pointer transition duration-200">
            Create account
          </button>
        </Link>
      </div>
    </AuthLayout>
  );
}
export const metadata = {
  title: "X Login",
  description: "Login to your account",
};
