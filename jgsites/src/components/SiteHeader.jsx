import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';

const links = [['Home','/'],['Services','/services'],['Work','/work'],['About','/about'],['Contact','/contact']];
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-ink/10 bg-ivory/95 backdrop-blur">
    <div className="site-container flex h-20 items-center justify-between">
      <Logo />
      <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
        {links.map(([label,to]) => <NavLink key={to} to={to} className={({isActive}) => `nav-link ${isActive ? 'text-navy' : ''}`}>{label}</NavLink>)}
        <Link className="button-primary" to="/contact">Get a Free Website Review</Link>
      </nav>
      <button onClick={() => setOpen(!open)} className="p-2 lg:hidden" aria-label="Toggle navigation" aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-ink/10 bg-ivory px-6 py-6 lg:hidden">
      <div className="flex flex-col gap-1">{links.map(([label,to]) => <Link onClick={() => setOpen(false)} key={to} to={to} className="border-b border-ink/10 py-3 text-lg">{label}</Link>)}</div>
      <Link onClick={() => setOpen(false)} className="button-primary mt-6 w-full" to="/contact">Get a Free Website Review</Link>
    </nav>}
  </header>;
}