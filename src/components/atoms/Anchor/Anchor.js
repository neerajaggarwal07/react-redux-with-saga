import React from 'react';
import { PropTypes } from 'prop-types';

import withStyles from '../../hoc/withStyles';
import styles from './Anchor.style';

const Anchor = props => {
  const {
    children,
    to,
    className,
    handleLinkClick,
    title,
    target,
    url,
    text,
    ...other
  } = props;

  return (
    <a
    href={url}
    className={className}
    onClick={handleLinkClick}
    title={title}
    target={target}
    {...other}
  >
    {children}
  </a>
  );
};



Anchor.propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.string,
    className: PropTypes.string.isRequired,
    handleLinkClick: PropTypes.func,
    title: PropTypes.string,
    target: PropTypes.string,
    url: PropTypes.string,
    text: PropTypes.string,
  };
  
  Anchor.defaultProps = {
    handleLinkClick: () => {},
    title: '',
    target: '',
    url: '',
    text: '',
    to:''
  };


export default withStyles(Anchor, styles);
