import { style } from '@vanilla-extract/css';

import { vars } from '@/components/Styles';

export const styles = {
  button: style({
    display: 'inline-block',
    minWidth: '8rem',
    fontSize: '1.2rem',
    lineHeight: '1rem',
    textAlign: 'center',
    padding: '0.5rem 1rem',
    margin: '0.25rem',
    border: '1px solid ' + vars.color.white.main,
    borderRadius: '1rem',
    userSelect: 'none',
    transition: 'all 0.2s ease',

    ':hover': {
      borderColor: vars.color.magenta.main,
      color: vars.color.magenta.main,
    },
  }),
};
