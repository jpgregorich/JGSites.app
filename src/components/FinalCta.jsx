import { Link } from 'react-router-dom';
export default function FinalCta() {
  return <section className="bg-navy text-ivory"><div className="site-container grid gap-8 py-16 md:grid-cols-[1.4fr_.6fr] md:items-end md:py-20">
    <div><p className="eyebrow text-ivory/60">A useful first step</p><h2 className="mt-5 font-heading text-4xl font-medium md:text-5xl">Think your website could be better?</h2><p className="mt-5 max-w-xl text-lg text-ivory/70">Share your current website—or tell me about the business if you don't have one yet. I'll help you figure out a useful next step.</p></div>
    <Link className="button-light md:justify-self-end" to="/contact">Get a Free Website Review</Link>
  </div></section>;
}