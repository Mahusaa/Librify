
import { House, BookOpen, Podcast, Settings } from 'lucide-react';
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
    title: 'Settings',
    path: '/settings',
    icon: <Settings className="w-6 h-6" />,
  },
];
