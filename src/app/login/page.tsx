import Link from "next/link";
import Image from "next/image";
import AuthenticationButton from "../../../components/AuthenticationButton";

export default function Login() {
  return (
    <div
      className="flex flex-col items-center py-[10%] h-[100vh] gap-3
    "
    >
      {/* // Replace this p with Image - import it */}
      <Image src="/bird-logo.svg" alt="Twixy Logo" width={200} height={200} />
      <h1 className="text-3xl font-bold py-5">Sign in to Twixy</h1>
      {/* // Later add onClick */}
      <AuthenticationButton label=" Sign in with Email" />
      <AuthenticationButton label=" Sign in with Apple" />

      <p className="text-xs py-5">OR</p>
      <form action="" className="flex flex-col gap-5">
        <input
          type="email"
          placeholder="Email"
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded px-3 py-2"
          required
        />

        <button type="submit"></button>
      </form>
      <p>
        Dont have an account?
        <Link href="/Signup" className="text-blue-500 pl-2 font-bold">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
