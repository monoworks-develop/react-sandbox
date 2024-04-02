import { styles } from './Button.css';

export type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <a onClick={onClick} className={styles.button}>
      {children}
    </a>
  );
}
