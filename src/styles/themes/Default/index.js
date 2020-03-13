
import colors from './Constants/colors';
import fonts from './Constants/fonts';
import spacing from './Constants/spacing';
import { mediaQuery, breakpoints } from './Constants/mediaquery';



const theme = {
  brand: 'default',
  /* colors object has been deprecated and, will be removed in the future release.
   Please use colorPalette instead */
  colors,
  fonts,
  mediaQuery,
  breakpoints,
  spacing,
};

export default theme;
