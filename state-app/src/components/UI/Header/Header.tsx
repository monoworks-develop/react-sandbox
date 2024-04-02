import { styles } from './Header.css';

import { NavLink } from '@/components/Elements';

export function Header() {
  const links = [
    { href: '/0_useState', children: 'useState' },
    { href: '/1_ContextAPI', children: 'Context API' },
    { href: '/2_Redux', children: 'Redux' },
    { href: '/3_Zustand', children: 'Zustand' },
    { href: '/4_Mobx', children: 'Mobx' },
    { href: '/5_Recoil', children: 'Recoil' },
    { href: '/6_Jotai', children: 'Jotai' },
    { href: '/7_Valtio', children: 'Valtio' },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.navigationBar}>
        <ul className={styles.linkListContainer}>
          {links.map(({ href, children }) => (
            <li key={href} className={styles.linkWrapper}>
              <NavLink href={href}>{children}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
