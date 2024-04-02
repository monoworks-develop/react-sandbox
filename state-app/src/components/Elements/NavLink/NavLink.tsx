'use client';

import { useEffect, useState } from 'react';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import { styles } from './NavLink.css';

export type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  // pathnameの変更を検知し、isActiveを更新する為のuseEffect
  useEffect(() => {
    setIsActive(pathname === href);
  }, [pathname, href]);

  return (
    <NextLink href={href} className={clsx(styles.link, isActive && styles.isActive)}>
      {children}
    </NextLink>
  );
}
