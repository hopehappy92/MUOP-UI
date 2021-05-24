import React from 'react';

import './ButtonStyle.scss';

export type TTheme = 'primary' | 'secondary' | 'warning';

export type TSize = 'lg' | 'md' | 'sm';

// TODO: desc 안나옴 ㅠㅠ
export interface ButtonProps {
  /** theme */
  theme?: TTheme;
  /** size */
  size?: TSize;
  /** children */
  children?: React.ReactNode;
  /** disabled */
  disabled?: boolean;
  /** outline by theme */
  outline?: boolean;
  /** if you want to loading state, set true */
  loading?: boolean;
  /** children when loading is true */
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
