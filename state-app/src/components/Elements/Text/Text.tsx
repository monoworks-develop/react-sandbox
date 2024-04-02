import { styles } from './Text.css';

export type TextProps = { children: React.ReactNode };

export function Text({ children }: TextProps) {
  return (
    <div className={styles.textConteinar}>
      <p className={styles.text}>{children}</p>
    </div>
  );
}
