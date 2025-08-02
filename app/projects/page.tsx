import Link from 'next/link';
import { projects } from './data';

export const metadata = {
  title: 'Projects | kwaji',
  description: 'A collection of my design and development projects.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-8 pb-20">
      {/* Navigation */}
      <nav className="max-w-4xl mx-auto mb-8">
        <Link 
          href="/"
          className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
        >
          ← Back to Portfolio
        </Link>
      </nav>

      {/* Header */}
      <header className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400">
          A collection of my design and development work.
        </p>
      </header>

      {/* Projects Grid */}
      <section className="max-w-4xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="block border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              <h3 className="text-lg font-medium mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}