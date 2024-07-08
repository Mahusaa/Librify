
import { House, BookOpen, Podcast, } from 'lucide-react';
import { SideNavItem } from './SideNavItem';
export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <House className="w-6 h-6" />,
  },
  {
    title: 'Books',
    path: '/books',
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: 'Podcast',
    path: '/podcast',
    icon: <Podcast className="w-6 h-6" />,
  },
];
