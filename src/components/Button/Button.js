import React, { PropTypes } from 'react';
import './Button.css';

export default function Button({
  children,
  component: Component = 'button',
  ...props,
}) {
  return (
    <Component className="Button" {...props}>
      {children}
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  component: PropTypes.any,
};
