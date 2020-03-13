import { css } from 'styled-components';

const getWidth = (colSpan) => {
    if(!colSpan) return ;

    let width = colSpan / 12 * 100;
    return `width : ${width}%;`;
}

const StyledCol = css`
    float :left;
    ${({sm}) => (sm ? getWidth(sm): "width:100%")};

  
    @media ${props => props.theme.mediaQuery.medium} {
        ${({md}) => md && getWidth(md)};
      }
      @media ${props => props.theme.mediaQuery.large} {
        ${({lg}) => lg && getWidth(lg)}
      }
      @media ${props => props.theme.mediaQuery.xlarge} {
        ${({xlg}) => xlg && getWidth(xlg)};
      }

`;

export default StyledCol;
