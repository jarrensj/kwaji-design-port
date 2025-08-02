import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8 flex flex-col items-center justify-center text-center" style={{ minHeight: 'calc(100vh - 120px)' }}>
      <h1 className="text-2xl font-bold mb-4">kwaji&apos;s design portfolio</h1>
      <p className="text-lg mb-4">
        I&apos;m a software engineer. This is my design portfolio.
      </p>
      <Link 
        href="/projects"
        className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
      >
        View Projects →
      </Link>
    </main>
  );
}