import { Outlet } from 'react-router-dom';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteMotion from '@/components/SiteMotion';
import PageMetadata from '@/components/PageMetadata';

export default function SiteLayout() {
  return <div className="min-h-screen bg-ivory text-ink"><PageMetadata /><SiteHeader /><main><Outlet /></main><SiteFooter /><SiteMotion /></div>;
}