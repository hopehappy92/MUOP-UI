import React from 'react';

import './ButtonStyle.scss';

export type TTheme = 'primary' | 'secondary' | 'warning';

export type TSize = 'lg' | 'md' | 'sm';

export interface ButtonProps {
  theme?: TTheme;
  size?: TSize;
  children?: React.ReactNode;
  disabled?: boolean;
  outline?: boolean;
  loading?: boolean;
  loadingChildren?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  theme = 'primary',
  size = 'md',
  outline = false,
  ...props
}: ButtonProps) => (
  <button
    type="button"
    className={[
      'muop-button',
      `muop-button-${theme}${outline ? '-outline' : ''}`,
      `muop-button-${size}`
    ].join(' ')}
    disabled={props.disabled}
  >
    {props.loading ? props.loadingChildren : props.children}
  </button>
);

export default Button;
