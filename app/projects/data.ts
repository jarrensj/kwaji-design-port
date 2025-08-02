import fs from 'fs';
import path from 'path';

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "project-one",
    title: "Project One",
    description: "A description for project one.",
    tags: ["Next.js", "TypeScript", "Design"]
  },
  {
    id: 2,
    slug: "project-two",
    title: "Project Two", 
    description: "A description for project two.",
    tags: ["Next.js", "UI/UX", "Frontend"]
  },
  {
    id: 3,
    slug: "project-three",
    title: "Project Three",
    description: "A description for project three.",
    tags: ["Design", "Marketing"]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export async function getProjectContent(slug: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'app', 'projects', `${slug}.md`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error(`Error reading markdown file for ${slug}:`, error);
    return '';
  }
}