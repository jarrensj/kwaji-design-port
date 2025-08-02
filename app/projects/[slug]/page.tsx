import { notFound } from 'next/navigation';
import Link from 'next/link';
import { marked } from 'marked';
import { getProjectBySlug, getProjectContent, projects } from '../data';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | kwaji`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const content = await getProjectContent(slug);
  const htmlContent = marked(content);

  return (
    <main className="min-h-screen p-8 pb-20">
      {/* Navigation */}
      <nav className="max-w-4xl mx-auto mb-2">
        <Link 
          href="/"
          className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
        >
          ← Back to Portfolio
        </Link>
      </nav>

      {/* Project Header */}
      <header className="max-w-4xl mx-auto mb-3">
        <h1 className="text-base font-semibold mb-0.5">{project.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 text-xs mb-1">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-1.5 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Project Content */}
      <article className="max-w-4xl mx-auto">
        <div 
          className="prose prose-gray dark:prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>

      {/* Navigation to other projects */}
      <footer className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold mb-4">Other Projects</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {projects
            .filter(p => p.slug !== slug)
            .slice(0, 2)
            .map((otherProject) => (
              <Link
                key={otherProject.slug}
                href={`/projects/${otherProject.slug}`}
                className="block p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
              >
                <h4 className="font-medium mb-2">{otherProject.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {otherProject.description}
                </p>
              </Link>
            ))}
        </div>
      </footer>
    </main>
  );
}