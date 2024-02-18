import { styles } from './Title.css';

export type TitleProps = {
  children: string;
};

export function Title({ children }: TitleProps) {
  return <h1 className={styles.title}>{children}</h1>;
}
