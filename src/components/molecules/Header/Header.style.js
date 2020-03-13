import { css } from 'styled-components';

const styles = css`
    height:24px;
    display:flex;
    color:${props => props.theme.colors.BLACK};
    background-color:${props => props.theme.colors.HEADER.BACKGROUND};
    width:100%;
    margin: ${props => props.theme.spacing.ELEM_SPACING.MED} 0;
    text-align:left;
    padding : ${props => props.theme.spacing.ELEM_SPACING.XXS};
    .nav-item{
       display:inline-block;
       padding : ${props => props.theme.spacing.ELEM_SPACING.XXXS}; 
    }
 
`;

export default styles;

