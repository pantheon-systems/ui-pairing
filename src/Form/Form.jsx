import React from 'react';
import PropTypes from 'prop-types';
import './form.css';

export const Form = ({ children, onSubmit, ...rest }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) onSubmit(event);
  };
  return (
    <form onSubmit={handleSubmit} {...rest}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: undefined,
};
