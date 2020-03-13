import { css } from 'styled-components';
import theme from '../themes/Default/index';

const { fonts, breakpoints, mediaQuery } = theme;
export default css`
text-align: center;
  
  body {
    font-family: ${fonts.primaryFontFamily};
    overflow-x: hidden;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    
    position: relative;
    width:80%;
    margin: 0 auto;
   padding:20px;
  }

  

  .content-wrapper {
    max-width: ${breakpoints.xlarge};
    margin: 0 auto;
  }

  

  

  figure {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  

  ul {
    padding: 0px;
    margin: 0px;
  }

  li {
    list-style-type: none;
  }

  h2,
  p {
    margin: 0;
  }

  .line-height-0 {
    line-height: 0;
  }

  .hide-on-mobile {
    @media ${mediaQuery.smallOnly} {
      display: none !important;
    }
  }

  .hide-on-desktop {
    @media ${mediaQuery.largeOnly} {
      display: none !important;
    }
    @media ${mediaQuery.xlarge} {
      display: none !important;
    }
  }

  .hide-on-tablet {
    @media ${mediaQuery.mediumOnly} {
      display: none !important;
    }
  }
  .text-break {
    word-break: break-word;
  }
  .full-width {
    width: 100%;
    display: inline-block;
  }

  

  ${props => {
    return Object.keys(props.theme.spacing.ELEM_SPACING).map(key => {
      return `
      .elem-mt-${key} {
        margin-top: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-mr-${key} {
        margin-right: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-mb-${key} {
        margin-bottom: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-ml-${key} {
        margin-left: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pt-${key} {
        padding-top: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pr-${key} {
        padding-right: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pb-${key} {
        padding-bottom: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pl-${key} {
        padding-left: ${props.theme.spacing.ELEM_SPACING[key]}
      }`;
    });
  }}

  ${props => {
    return Object.keys(props.theme.spacing.LAYOUT_SPACING).map(key => {
      return `
      .layout-pt-${key} {
        padding-top: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }
      .layout-pr-${key} {
        padding-right: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }
      .layout-pb-${key} {
        padding-bottom: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }
      .layout-pl-${key} {
        padding-left: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }`;
    });
  }}
  .spacing {
    padding: 0 ${props => props.theme.spacing.LAYOUT_SPACING.SM};
  }
`;
