import PageHero from '@/components/PageHero';
import ServiceList from '@/components/services/ServiceList';
import PricingSection from '@/components/services/PricingSection';
import WebsiteUpdates from '@/components/services/WebsiteUpdates';
import ProcessSection from '@/components/services/ProcessSection';

export default function Services() {
  return <><PageHero eyebrow="Services" title="Custom web design. A straightforward process.">A professional website designed around your business, built and set up for you. Work directly with Joey, review a private preview, and launch a finished site you own.</PageHero><ProcessSection/><ServiceList/><PricingSection/><WebsiteUpdates/></>;
}