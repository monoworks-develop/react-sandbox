import { createVar, style } from '@vanilla-extract/css';

import { vars } from '@/components/Styles';

export const widthVar = createVar();
export const heightVar = createVar();

export const styles = {
  container: style({
    width: widthVar,
    height: heightVar,
    margin: '1rem',
    padding: '1rem',
    border: '1px solid ' + vars.color.white.dark,
    borderRadius: '2rem',
  }),
};
