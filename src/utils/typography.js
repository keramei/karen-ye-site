import Typography from "typography";
import moragaTheme from "typography-theme-moraga";

moragaTheme.googleFonts = [
  {
    name: 'Alegreya Sans SC',
    styles: ['300', '400'],
  },
  {
    name: 'Lato',
    styles: ['300', '400'],
  },
];

moragaTheme.headerFontFamily = ['Alegreya Sans SC', 'sans-serif'];
moragaTheme.bodyFontFamily = ['Lato', 'sans-serif'];
moragaTheme.baseFontSize = '16px';
moragaTheme.bodyColor = '#848484';
moragaTheme.bodyWeight = 300;
moragaTheme.boldWeight = 400;
moragaTheme.headerWeight = 300;

moragaTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    fontWeight: 400,
    color: '#999999',
    textDecoration: 'none',
  },
  'a:hover': {
    textDecoration: 'none',
    color: 'rgb(221,6,3)',
  },
  'h1, h2': {
    display: 'inline-block',
    marginBottom: rhythm(0.25),
    color: 'rgb(0,0,0)',
  },
  h2: {
    fontWeight: 400,
  },
  p: {
    marginBottom: 0,
  },
  li: {
    marginBottom: 0,
  },
  'html, body': {
    backgroundColor: '#fcfcfc',
  },
  '@media only screen and (max-width: 340px){html{font-size:87.5%}}': {},
  img: {
    paddingTop: rhythm(0.25),
    paddingBottom: rhythm(0.25),
  }

})
const typography = new Typography(moragaTheme);

export default typography;