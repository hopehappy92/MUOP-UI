import React from 'react';

import './ButtonStyle.scss';

export type TTheme = 'danger' | 'warning' | 'success' | 'info' | 'default';

export type TSize = 'lg' | 'md' | 'sm';

export interface ButtonProps {
  /** children */
  children: React.ReactNode;
  /** theme */
  theme?: TTheme;
  /** size */
  size?: TSize;
  /** outline by theme */
  outline?: boolean;
  /** disabled */
  disabled?: boolean;
  /** name */
  name?: string;
  /** element id */
  id?: string;
  /** element class */
  className?: string;
  /** click event */
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  /** mouse over event */
  onMouseOver?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  /** mouse out event */
  onMouseOut?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  /** mouse enter event */
  onMouseEnter?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  /** mouse leave event */
  onMouseLeave?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  /** keyboard up event */
  onKeyDown?: (event?: React.KeyboardEvent<HTMLButtonElement>) => void;
  /** keyboard down event */
  onKeyUp?: (event?: React.KeyboardEvent<HTMLButtonElement>) => void;
  /** focus event */
  onFocus?: (event?: React.FocusEvent<HTMLButtonElement>) => void;
  /** blur event */
  onBlur?: (event?: React.FocusEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  theme = 'default',
  size = 'md',
  ...props
}: ButtonProps) => (
  <button
    type="button"
    className={[
      'muop-button',
      `muop-button-${theme}${props.outline ? '-outline' : ''}`,
      `muop-button-${size}`,
      `${props.className}`
    ].join(' ')}
    disabled={props.disabled}
    name={props.name}
    id={props.id}
    onClick={props.onClick}
    onMouseOver={props.onMouseOver}
    onMouseOut={props.onMouseOut}
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
    onKeyUp={props.onKeyUp}
    onKeyDown={props.onKeyDown}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
  >
    {props.children}
  </button>
);

export default Button;
