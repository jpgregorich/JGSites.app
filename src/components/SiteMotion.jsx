import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SiteMotion() {
  const { pathname } = useLocation();
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;
    const targets = document.querySelectorAll('main > section > .site-container, main > section.site-container');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('studio-reveal');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.05 });
    targets.forEach(target => observer.observe(target));
    return () => {
      observer.disconnect();
      targets.forEach(target => target.classList.remove('studio-reveal'));
    };
  }, [pathname]);
  return null;
}