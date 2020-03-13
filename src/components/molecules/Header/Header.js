import React from 'react';
import withStyles from '../../hoc/withStyles';
import HeaderStyles from './Header.style';
import BodyCopy from '../../atoms/BodyCopy/BodyCopy';
import LABLES from '../../../constants/labels';

const Header = (props) => {
    const {className} = props;
    return(
        <div className={className}>
        <BodyCopy component="span" className="nav-item">{LABLES.TOP}</BodyCopy>
        <BodyCopy component="span" className="nav-item">{LABLES.NEW}</BodyCopy>
        </div>
    )
}

export default withStyles(Header,HeaderStyles);


