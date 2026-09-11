import { Link } from 'react-router-dom';

const steps = [
  ['01', 'Tell Me About Your Business', 'Start with a short conversation or free website review with Joey. We’ll talk about your business, customers, goals, and what you need your website to do. No down payment is required.'],
  ['02', 'Design & Build', 'Joey designs a custom website around your business, handling the layout, content structure, mobile experience, contact forms, and technical details so you can focus on running your business.'],
  ['03', 'Review & Refine', 'You receive a private preview and can share your feedback. Two revision rounds are included so we can refine the site together before launch.'],
  ['04', 'Launch & Own It', 'After approval and final payment, we launch the website and transfer ownership to your business. No required JGSites subscription. Your website is yours.']
];

export default function ProcessSection() {
  return <section className="section-space bg-ink text-ivory"><div className="site-container">
    <p className="eyebrow text-ivory/50">How it works</p>
    <div className="mt-5 grid gap-6 md:grid-cols-[1fr_.8fr] md:items-end"><h2 className="max-w-2xl font-heading text-4xl md:text-5xl">From Idea to Live Website</h2><p className="max-w-xl leading-7 text-ivory/65">Getting a professional website shouldn’t be complicated. We handle the process from start to finish.</p></div>
    <div className="mt-14 grid border-l border-t border-ivory/20 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([n,t,d]) => <article className="border-b border-r border-ivory/20 p-6" key={n}><span className="text-sm text-ivory/40">{n}</span><h3 className="mt-12 font-heading text-2xl">{t}</h3><p className="mt-4 text-sm leading-6 text-ivory/60">{d}</p></article>)}</div>
    <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between"><p className="font-heading text-2xl">Ready to see what we can build for your business?</p><Link className="button-light" to="/contact">Get Your Free Website Review</Link></div>
  </div></section>;
}