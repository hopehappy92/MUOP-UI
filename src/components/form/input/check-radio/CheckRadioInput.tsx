import React, { forwardRef, ReactElement } from 'react';

import { v4 as uuid } from 'uuid';

import './CheckRadioInputStyle.scss';

type TType = 'checkbox' | 'radio';
type TTheme = 'default' | 'info' | 'secondary' | 'warning' | 'danger';
export type TLabelPosition = 'left' | 'right' | 'top' | 'bottom';

export interface CheckRadioInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: TType;
  theme?: TTheme;
  label?: string | number | ReactElement;
  labelPosition?: TLabelPosition;
}

const CheckRadioInput = forwardRef<HTMLInputElement, CheckRadioInputProps>(
  (
    {
      type = 'checkbox',
      theme = 'default',
      disabled = false,
      label,
      labelPosition,
      ...props
    }: CheckRadioInputProps,
    ref
  ) => {
    const hash = uuid().split('-')[0];

    return (
      <div
        className={[
          `muop-check-radio-input-wrapper`,
          `muop-check-radio-input-wrapper-${labelPosition}`
        ].join(' ')}
      >
        <input
          type={type}
          ref={ref}
          id={`muop-check-radio-input-${hash}`}
          className={[
            `muop-check-radio-input`,
            `muop-check-radio-input-${theme}`
          ].join(' ')}
          disabled={disabled}
          {...props}
        />
        <label
          htmlFor={`muop-check-radio-input-${hash}`}
          className={[
            `muop-check-radio-label`,
            `muop-check-radio-label-${disabled && 'disabled'}`
          ].join(' ')}
        >
          {label}
        </label>
      </div>
    );
  }
);

CheckRadioInput.displayName = 'CheckRadioInput';
export default CheckRadioInput;
