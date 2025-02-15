'use client';
import { useRouter } from 'next/navigation';

export default function NewPage() {
  const router = useRouter();

  const handleSignOut = () => {
    router.push('/');
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold">Welcome to the new page!</h1>
      <button
        onClick={handleSignOut}
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
      >
        Sign Out
      </button>
    </main>
  );
}
