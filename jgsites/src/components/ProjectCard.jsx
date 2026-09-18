import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function ProjectCard({ project, home = false }) {
  return <article className="group">
    <Link to={`/work/${project.slug}`} className="block overflow-hidden bg-sand">
      <Image src={home ? project.homeImage : project.portfolioImage} alt={`${project.name} concept website presentation`} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.015]" />
    </Link>
    <div className="mt-5 flex items-start justify-between gap-6 border-t border-ink/20 pt-4">
      <div><p className="eyebrow text-navy">{project.industry} · {project.classification}</p><h3 className="mt-2 font-heading text-2xl">{project.name}</h3><p className="mt-3 max-w-xl text-ink/65">{project.short}</p></div>
      <Link to={`/work/${project.slug}`} className="mt-1 shrink-0 p-2" aria-label={`View ${project.name}`}><ArrowUpRight /></Link>
    </div>
  </article>;
}