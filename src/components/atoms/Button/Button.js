import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../hoc/withStyles';
import styles from './Button.style';

/**
 * @param {object} props : Props for button
 * @desc This is a button component.
 */
const Button = ({
  children,
  className,
  ariaLabel,
  disabled,
  type,
  active,
  ...otherProps
}) => {
  
  return (
    <button
      className={className}
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
      {...otherProps}
    
    >
        {children}
      </button>
  );
};

Button.propTypes = {
  children: PropTypes.shape({}).isRequired,
  className: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  disabled: PropTypes.string,
  type: PropTypes.string,
  active: PropTypes.bool,
};

Button.defaultProps = {
  disabled: '',
  type: 'button',
  active: false,
 
};

export default withStyles(Button, styles);
export { Button as ButtonVanilla };
