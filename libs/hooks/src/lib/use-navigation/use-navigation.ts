import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useState, useMemo } from 'react';

export interface UseNavigation {
  navigation: NavigationItem[];
}

export interface NavigationItem {
  name: string;
  href: string;
  query?: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  current: boolean;
}

const defaultNavigation: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: HomeIcon,
    current: false,
  },
  {
    name: 'About',
    href: '/[realm]',
    icon: UsersIcon,
    current: true,
  },
  {
    name: 'Projects',
    href: '/[realm]/projects',
    icon: FolderIcon,
    current: false,
  },
  {
    name: 'Calendar',
    href: '/[realm]/calendar',
    icon: CalendarIcon,
    current: false,
  },
];

export function useNavigation(): UseNavigation {
  const [navigation, setNavigation] =
    useState<NavigationItem[]>(defaultNavigation);
  const { route } = useRouter();

  useMemo(() => {
    if (route) {
      const updatedNavigation = [...defaultNavigation];
      updatedNavigation.forEach((item) => {
        item.current = item.href === route;
      });
      setNavigation(updatedNavigation);
    }
  }, [route]);

  return { navigation };
}

export default useNavigation;
