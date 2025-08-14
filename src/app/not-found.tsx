import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-xl text-gray-700">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
