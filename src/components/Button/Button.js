import React from "react";
import PropTypes from 'prop-types';

const Button = ({ children, classname, onclick, type='button' }) => {
  return (
    <button type={type} onClick={onclick} className={classname}>{children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
};
export default Button;
