'use client'

export interface NavItem {
  label: string;
  page: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    page: '/',
  },
  {
    label: 'About',
    page: '/About',
  },
  {
    label: 'Projects',
    page: '/Projects',
  },
  {
    label: 'Contact',
    page: '/Contact',
  },
];
