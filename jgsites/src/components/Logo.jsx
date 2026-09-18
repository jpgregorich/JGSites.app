import { Link } from 'react-router-dom';

export default function Logo({ variant = 'default' }) {
  const isLight = variant === 'light';
  const boxClass = isLight
    ? 'border border-ivory text-ivory'
    : 'bg-navy text-ivory';
  const textClass = isLight ? 'text-ivory' : 'text-ink';
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="JGSites home">
      <span className={`grid h-9 w-9 place-items-center text-sm font-bold tracking-tight transition-transform group-hover:-translate-y-0.5 ${boxClass}`}>JG</span>
      <span className={`font-heading text-xl font-semibold tracking-tight ${textClass}`}>JGSites</span>
    </Link>
  );
}