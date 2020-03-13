import React from 'react';
import { PropTypes } from 'prop-types';

import withStyles from '../../hoc/withStyles';
import styles from './BodyCopy.style';

const BodyCopy = props => {
  const {
    children,
    className,
    component: Component,
    ...others
  } = props;

  return (
    <Component className={className}  {...others}>
      {children}
    </Component>
  );
};



BodyCopy.defaultProps = {
  component: 'p',
  className: null,
  children: null,
 
};

BodyCopy.propTypes = {
  component: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
  
};


export default withStyles(BodyCopy, styles);
