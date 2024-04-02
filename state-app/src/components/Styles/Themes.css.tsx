import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    white: {
      main: 'rgba(255, 255, 246, 0.80)',
      light: 'rgba(255, 255, 246, 1)', // 明るい白
      dark: 'rgba(255, 255, 236, 0.40)', // 暗めの白
    },
    black: {
      main: '#1b1b1f',
      light: '#333337', // 明るいブラック
      dark: '#0f0f11', // 暗めのブラック
    },
    blue: {
      main: '#0070f3',
    },
    green: {
      main: '#00ff00',
    },
    purple: {
      main: '#9499ff',
      light: '#bcc0ff', // 明るい紫
    },
    magenta: {
      main: '#db2777',
    },
  },
});
