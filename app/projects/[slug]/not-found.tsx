import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        The project you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link 
        href="/"
        className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
      >
        ← Back to Portfolio
      </Link>
    </main>
  );
}