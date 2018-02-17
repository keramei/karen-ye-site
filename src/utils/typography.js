import Typography from "typography";
import moragaTheme from "typography-theme-moraga";

moragaTheme.googleFonts = [
  {
    name: 'Alegreya Sans SC',
    styles: ['400', '500'],
  },
  {
    name: 'Lato',
    styles: ['300', '400', '700'],
  },
];

moragaTheme.headerFontFamily = ['Alegreya Sans SC', 'sans-serif'];
moragaTheme.bodyFontFamily = ['Lato', 'sans-serif'];
moragaTheme.bodyColor = '#848484';
moragaTheme.baseLineHeight = 1.56/2;
moragaTheme.bodyWeight = 300;
moragaTheme.boldWeight = 400;
moragaTheme.headerWeight = 400;

moragaTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    fontWeight: 300,
    color: '#999999',
    textDecoration: 'none',
    fontSize: '1.2em',
  },
  'a:hover': {
    fontWeight: 400,
    textDecoration: 'none',
    color: '#555555',
  }

})
const typography = new Typography(moragaTheme);

export default typography;