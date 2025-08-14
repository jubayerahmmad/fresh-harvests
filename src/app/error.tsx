"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);
  console.log(error);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-red-50 text-center p-6">
      <h1 className="text-4xl font-bold text-red-600">Something went wrong</h1>
      <p className="mt-4 text-gray-700">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 rounded bg-red-600 px-6 py-2 text-white hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}
