import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps): React.ReactNode => (
  <button type="button">{children}</button>
);

export default Button;
