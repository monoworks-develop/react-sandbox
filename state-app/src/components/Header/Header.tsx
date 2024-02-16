import Link from 'next/link';

import { styles } from './Header.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className=''>
        <Link href={'./ContextAPI'}>ContextAPI</Link>
        <Link href={'./ContextAPI'}>ContextAPI</Link>
      </div>
    </header>
  );
}
