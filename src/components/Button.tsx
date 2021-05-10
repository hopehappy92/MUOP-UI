import React from 'react';

import './style.module.css';

export type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }: ButtonProps) => (
  <button type="button" {...props}>
    {children}
  </button>
);

export default Button;
