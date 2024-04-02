import { assignInlineVars } from '@vanilla-extract/dynamic';

import { styles, widthVar, heightVar } from './Container.css';

export type ContainerProps = {
  width?: string;
  height?: string;
  children?: React.ReactNode;
};

export function Container({ width = 'auto', height = 'auto', children }: ContainerProps) {
  return (
    <div
      className={styles.container}
      style={assignInlineVars({
        [widthVar]: width,
        [heightVar]: height,
      })}
    >
      {children}
    </div>
  );
}
