export default function Footer() {
  return (
    <footer className="fixed bottom-4 left-0 right-0 p-4 text-center">
      <span className="text-gray-500 dark:text-gray-400">code by&nbsp;</span>
      <a 
        href="https://kwaji.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
      >
        kwaji
      </a>
    </footer>
  );
}