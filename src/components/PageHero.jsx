export default function PageHero({ eyebrow, title, children }) {
  return <section className="border-b border-ink/10">
    <div className="site-container grid gap-8 py-20 md:grid-cols-[.7fr_1.3fr] md:py-28">
      <p className="eyebrow text-navy">{eyebrow}</p>
      <div><h1 className="text-balance font-heading text-4xl font-medium leading-[1.1] sm:text-5xl md:text-6xl">{title}</h1><div className="mt-8 max-w-2xl text-lg leading-8 text-ink/70">{children}</div></div>
    </div>
  </section>;
}