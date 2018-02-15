import Typography from "typography";
import moragaTheme from "typography-theme-moraga";

moragaTheme.googleFonts.push({
  name: 'Julius Sans One',
  styles: ['200', '400', '400i', '700'],
});

moragaTheme.headerFontFamily = ['Julius Sans One', 'sans-serif'];
const typography = new Typography(moragaTheme);

export default typography;