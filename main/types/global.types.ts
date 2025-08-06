import { ReactNode } from 'react';

export interface INavLinkInterface {
  label: string;
  href: string;
}

export interface IReusableHeadingProps {
  heading?: string;
  description?: string;
}

export interface ITechnologyItem {
  id: string;
  slug: string;
  label: string;
  category: string;
  actionLabel: string;
  comingSoon: boolean;
  icon: ReactNode;
}

export interface ICategoryItem {
  id: string;
  slug: string;
  label: string;
  comingSoon: boolean;
  actionLabel: string;
  icon: ReactNode;
  technologies: ITechnologyItem[];
}
