import React from 'react';

import './ButtonStyle.scss';

export type TTheme = 'primary' | 'secondary' | 'warning';

export type TSize = 'lg' | 'md' | 'sm';

export type TType = 'button' | 'submit' | 'reset';

// TODO: desc 안나옴 ㅠㅠ
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  /** button type */
  buttonType?: TType;
}

// INFO: buttonType 추가하고, type={buttonType} 이 lint에 걸려서 린트에 추가함
const Button: React.FC<ButtonProps> = ({
  theme = 'primary',
  size = 'md',
  outline = false,
  buttonType,
  ...props
}: ButtonProps) => (
  <button
    // type="button"
    type={buttonType}
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
