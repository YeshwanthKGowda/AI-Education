import React from "react";
import Link from "next/link";
import '../styles/globals.css';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to AI Education</h1>
      <p className="text-lg text-center mb-8">
        Personalizing education with the power of AI for students and teachers alike.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/student"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-center"
        >
          Student Portal
        </Link>
        <Link
          href="/teacher"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 text-center"
        >
          Teacher Dashboard
        </Link>
      </div>
    </main>
  );
}
