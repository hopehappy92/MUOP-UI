import React from 'react';

import './ButtonStyle.scss';

export type TTheme = 'primary' | 'secondary' | 'warning';

export type TSize = 'lg' | 'md' | 'sm';

export interface ButtonProps {
  theme?: TTheme;
  size?: TSize;
  value?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  theme = 'primary',
  size = 'md',
  ...props
}: ButtonProps) => (
  <button
    type="button"
    className={[
      'muop-button',
      `muop-button-${theme}`,
      `muop-button-${size}`
    ].join(' ')}
    disabled={props.disabled}
  >
    {props.value}
  </button>
);

export default Button;
