import { css } from 'styled-components';

const ButtonStyles = css`
  border: none;
  border-radius: 0;
  background: none;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  min-height: 32px;
  font-size: ${props => props.theme.fonts.fontSize.button.size};
  color: ${props => props.theme.colors.BUTTON.ORANGE.TEXT};
  font-weight:${props => props.theme.fonts.fontWeight.bold};
  ${props =>
    props.variation === 'Link'
      ? `
      color: ${props.theme.colors.BLACK};
      font-weight: ${props.theme.fonts.fontWeight.bold};
      text-transform: lowercase;
      }
    `
      : ''};
`;

export default ButtonStyles;

