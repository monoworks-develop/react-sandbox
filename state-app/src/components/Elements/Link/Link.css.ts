import { style } from '@vanilla-extract/css';

import { vars } from '@/components/Styles';

export const styles = {
  link: style({
    color: vars.color.white.dark,
    textDecoration: 'none',
    transition: 'all 0.3s ease',

    ':hover': {
      color: vars.color.white.main,
      textShadow: '0 0 15px ' + vars.color.white.main,
    },
  }),

  isActive: style({
    color: vars.color.green.main + ' !important',
    textShadow: '0 0 15px ' + vars.color.green.main + ' !important',
  }),
};
