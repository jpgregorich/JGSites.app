import { Link } from 'react-router-dom';

const updates = ['Text changes', 'Photo replacements', 'Hours or contact information', 'Service or pricing updates', 'Minor content changes', 'Small changes to existing sections'];

export default function WebsiteUpdates() {
  return <section className="pb-20 md:pb-28"><div className="site-container"><div className="grid gap-8 border border-ink/20 p-7 md:grid-cols-[.7fr_1.3fr] md:p-10">
    <div><p className="eyebrow text-navy">After launch</p><h2 className="mt-5 font-heading text-3xl">Website Updates</h2><p className="mt-2 text-xl">Starting at $99</p></div>
    <div><p className="text-lg leading-8">Need something changed after launch? Optional, one-off website updates start at $99. No maintenance plan is required.</p><ul className="mt-6 grid gap-x-8 gap-y-3 text-sm text-ink/65 sm:grid-cols-2">{updates.map(item => <li className="border-b border-ink/15 pb-3" key={item}>{item}</li>)}</ul><p className="mt-6 text-sm leading-6 text-ink/55">Larger additions, new pages, major redesigns, new functionality, and advanced integrations may require a separate quote.</p><Link className="button-secondary mt-7" to="/contact">Request an Update</Link></div>
  </div></div></section>;
}