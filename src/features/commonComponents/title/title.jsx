import React from 'react';
import PropTypes from 'prop-types';

import './title.scss';

const Title = ({
  children, className
}) => (
  <div className={`title ${className}`}>
    {children}
  </div>
);

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Title.defaultProps = {
  children: null,
  className: "",
};

export default Title;
