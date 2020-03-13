// Basic file for column in the grid structure
import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Col.style';
import withStyles from '../../hoc/withStyles';

// Passing on the colConfig to the style File and also the flag to add inline-block to the column
const Col = ({ children, className, tagName: CustomTag, ...otherProps }) => {
  return (
    <CustomTag className={className} {...otherProps}>
      {children}
    </CustomTag>
  );
};

Col.propTypes = {
  children: PropTypes.shape({}).isRequired,
  className: PropTypes.string.isRequired,
 
 
  tagName: PropTypes.string,

};

Col.defaultProps = {
  
  
  tagName: 'div',
 
  
};

export default withStyles(Col, styles);
