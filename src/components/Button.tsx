import React from 'react';

import './style.module.css';

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps): React.ReactNode => (
  <button type="button">{children}</button>
);

export default Button;
