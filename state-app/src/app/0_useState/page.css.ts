import { style } from '@vanilla-extract/css';

import { vars } from '@/components/Styles';

export const styles = {
  container: style({
    width: '5rem',
    height: '5rem',
    border: '1px solid ' + vars.color.white.main,
  }),
};
