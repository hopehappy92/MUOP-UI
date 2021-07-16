import React from 'react';

import './ButtonStyle.scss';

import Dropdown from '../dropdown/Dropdown';

export type TTheme = 'danger' | 'warning' | 'success' | 'info' | 'default';

export type TSize = 'lg' | 'md' | 'sm';

export interface ButtonProps {
  /** theme */
  theme?: TTheme;
  /** size */
  size?: TSize;
  /** disabled */
  disabled?: boolean;
  /** outline by theme */
  outline?: boolean;
  /** name */
  name?: string;
  /** children */
  children: React.ReactNode;
  /** click event */
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  theme = 'default',
  size = 'md',
  name = 'btn-default',
  ...props
}: ButtonProps) => (
  <button
    type="button"
    className={[
      'muop-button',
      `muop-button-${theme}${props.outline ? '-outline' : ''}`,
      `muop-button-${size}`
    ].join(' ')}
    disabled={props.disabled}
    name={name}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
