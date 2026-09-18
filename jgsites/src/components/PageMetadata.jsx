import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { projects } from '@/components/projectData';

const pages = {
  '/': ['Custom Websites for Small Businesses | JGSites', 'JGSites is a personal web design studio in Central Minnesota. Custom business websites, mobile-friendly design, setup assistance, and ownership without a required JGSites subscription.'],
  '/services': ['Custom Business Websites — $799 | JGSites', 'Custom website design for $799, one time. Work directly with Joey on a mobile-friendly business website, with domain setup assistance and ownership after payment.'],
  '/work': ['Website Design Concepts & Selected Work | JGSites', 'Explore selected small business website concepts from JGSites, with the design thinking behind each direction. Every client website is built around the individual business.'],
  '/about': ['About Joey Gregorich & JGSites | Minnesota Web Design', 'Meet Joseph “Joey” Gregorich, founder of JGSites and a Saint John’s University student. Personal web design for small businesses in Minnesota and beyond.'],
  '/contact': ['Get a Free Website Review | JGSites', 'Tell Joey about your business and request a free website review. Get a straightforward next step for a new website, redesign, or improvements.'],
};
export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const project = pathname.startsWith('/work/') && projects.find(p => pathname === `/work/${p.slug}`);
    const [title, description] = project ? [`${project.name} — Design Concept | JGSites`, project.overview] : (pages[pathname] || ['Page Not Found | JGSites', 'Explore custom websites for small businesses from JGSites.']);
    document.title = title;
    [['name', 'description', description], ['property', 'og:title', title], ['property', 'og:description', description]].forEach(([attribute, name, content]) => {
      let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute(attribute, name); document.head.appendChild(tag); }
      tag.setAttribute('content', content);
    });
  }, [pathname]);
  return null;
}