import { style } from '@vanilla-extract/css';

import { vars } from '@/components/Styles';

export const styles = {
  link: style({
    color: vars.color.purple.main,
    textDecoration: 'underline',
    ':hover': {
      color: vars.color.purple.light,
    },
  }),
};
