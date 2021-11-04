import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

export const Input = ({ id, type, ...rest }) => {
  return <input id={id} type={type} {...rest} />;
};

Input.propTypes = {
  /**
   * Unique identifier for the input element
   */
  id: PropTypes.string.isRequired,
  /**
   * What `type` in the input should be
   * Options taken from https://www.w3schools.com/html/html_form_input_types.asp minus all the button-ish ones.
   */
  type: PropTypes.oneOf([
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'range',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
};

Input.defaultProps = {
  type: 'text',
};
