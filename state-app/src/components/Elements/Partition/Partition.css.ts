import { style } from '@vanilla-extract/css';

import { vars } from '@/components/Styles';

export const styles = {
  partition: style({
    borderBottom: '1px solid ' + vars.color.white.main,
    width: '40rem',
    margin: '2rem auto',
  }),
};
