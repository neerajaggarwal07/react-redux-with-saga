const FALLBACK_FONT = 'Arial, Helvetica, sans-serif';
const PRIMARY_FONT = `Montserrat, ${FALLBACK_FONT}`;

const FONT_SIZE = {
  heading: {
    large: {
      h1: 64,
      h2: 48,
      h3: 36,
      h4: 28,
      h5: 28,
      h6: 16,
    },
    small: {
      h1: 48,
      h2: 32,
      h3: 24,
      h4: 18,
      h5: 18,
      h6: 16,
    },
  },
  body: {
    bodytext: {
      copy1: 10,
      copy2: 12,
      copy3: 14,
      copy4: 16,
      
    },

  },
  nav: 15,
  listmenu: {
    large: 14,
    small: 13,
  },
 
  button: {
    size: 14,
  },
  anchor: {
    small: 10,
    medium: 12,
    large: 14,
    xlarge: 16,
  },
};

const FONT_WEIGHT = {
  light: '300',
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};



// Typography
export default {
  primaryFontFamily: PRIMARY_FONT,
  fontWeight: FONT_WEIGHT,
  fontSize: FONT_SIZE,
 };
