import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Hello From Home page</p>
      <p>
        <Link
          className="text-blue-500 underline cursor-pointer hover:text-blue-800 transition"
          href="/login"
        >
          Log in
        </Link>
      </p>
      <p>
        <Link
          className="text-blue-500 underline cursor-pointer hover:text-blue-800 transition"
          href="/signup"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
