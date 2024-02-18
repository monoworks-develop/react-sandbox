import { style } from '@vanilla-extract/css';

import { vars } from '@/components/Styles';

export const styles = {
  header: style({
    borderBottom: '1px solid ' + vars.color.white.main,
    height: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),

  navigationBar: style({}),

  linkListContainer: style({
    display: 'flex',
    listStyle: 'none',
  }),

  linkWrapper: style({
    flexGrow: 1,
    textAlign: 'center',
    selectors: {
      '&:not(:last-child)': {
        borderRight: '1px solid ' + vars.color.white.main,
      },
    },
  }),
};
