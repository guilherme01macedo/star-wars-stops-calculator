import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import './button.scss';


const Button = ({
  disabled, onClick, isLoading, children
}) => (
  <button
    className="button-container"
    type="button"
    disabled={disabled}
    onClick={onClick}
  >
    <div className={
        `button-content
        ${isLoading ? 'button-content--loading' : ''}`
      }
    >

      {isLoading ? (
      <div className="button-loading">
        <div>
          <CircularProgress className="button-loading" color="inherit" size="18px" />
        </div>
      </div>
    ) : children}
    </div>
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  disabled: null,
  onClick: () => {},
  isLoading: null,
};

export default Button;
