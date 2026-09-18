import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const links = [['Home','/'],['Services','/services'],['Work','/work'],['About','/about'],['Contact','/contact']];
export default function SiteFooter() {
  return <footer className="bg-ink text-ivory">
    <div className="site-container grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
      <div><Logo variant="light" /><p className="mt-5 max-w-xs text-ivory/65">Custom websites for small businesses.</p></div>
      <div><p className="eyebrow text-ivory/50">Navigate</p><div className="mt-5 grid gap-3">{links.map(([l,to]) => <Link className="w-fit text-ivory/75 hover:text-white" key={to} to={to}>{l}</Link>)}</div></div>
      <div><p className="eyebrow text-ivory/50">Based in</p><p className="mt-5 text-ivory/75">Central Minnesota</p><Link to="/contact" className="mt-6 inline-block border-b border-ivory pb-1">Get a Free Website Review</Link></div>
    </div>
    <div className="site-container border-t border-ivory/15 py-6 text-sm text-ivory/50">© 2026 JGSites</div>
  </footer>;
}