import { style } from '@vanilla-extract/css';

import { themeClass, vars } from '@/components/Styles';

export const styles = {
  root: style([
    {
      backgroundColor: vars.color.black.main,
      color: vars.color.white.main,
    },
    themeClass,
  ]),

  main: style([
    {
      backgroundColor: vars.color.black.main,
      color: vars.color.white.main,
    },
    themeClass,
  ]),
};
