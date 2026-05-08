'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-[#f5f0e8] p-4">
      <h2 className="font-playfair text-2xl sm:text-3xl mb-4 text-center">Something went wrong!</h2>
      <p className="text-[#f5f0e8]/70 mb-8 text-center max-w-md">{error.message || "An unexpected error occurred."}</p>
      <button
        onClick={() => reset()}
        className="px-8 py-3 bg-[#c9a84c] text-[#0a0a0a] font-semibold hover:bg-[#b08f3a] transition-colors duration-200"
      >
        Try again
      </button>
    </div>
  );
}
