import { style } from '@vanilla-extract/css';

import { vars } from '@/components/Styles';

export const styles = {
  parentContainer: style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),

  buttonConrainer: style({
    margin: '1rem',
  }),
};
