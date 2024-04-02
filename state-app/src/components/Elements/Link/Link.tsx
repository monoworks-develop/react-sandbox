import { styles } from './Link.css';

export type LinkProps = {
  href: string;
  children: React.ReactNode;
};

export function Link({ href, children }: LinkProps) {
  return (
    <a href={href} className={styles.link}>
      {children}
    </a>
  );
}
