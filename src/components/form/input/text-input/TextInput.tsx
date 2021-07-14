import React, { forwardRef, ReactElement, useRef } from 'react';

import './TextInputStyle.scss';

type TTheme = 'default' | 'info' | 'secondary' | 'warning' | 'danger';
type TSize = 'sm' | 'md' | 'lg';
type TVariant = 'standard' | 'filled' | 'outlined';
type TLabelPosition = 'left' | 'right';
type TType = 'email' | 'text' | 'password';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: TType;
  theme?: TTheme;
  fontSize?: TSize;
  disabled?: boolean;
  variant?: TVariant;
  valid?: boolean;
  validText?: string;
  label?: string | number | ReactElement;
  labelPosition?: TLabelPosition;
  handleSubmit?: () => void;
}

// INFO: ref 사용하기 위해선 forwardRef 써야함!
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      type = 'text',
      theme = 'default',
      fontSize = 'md',
      disabled = false,
      variant = 'standard',
      valid = true,
      validText,
      label,
      labelPosition = 'left',
      handleSubmit,
      ...props
    }: TextInputProps,
    ref
  ) => {
    const hash = Math.floor(Math.random() * 100);

    const wrapperRef = useRef<HTMLDivElement>(null);

    const onKeyUpEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && handleSubmit) {
        handleSubmit();
      }
    };

    const onFouceInput = () => {
      if (wrapperRef.current) {
        wrapperRef.current.style.borderWidth = '2px';
      }
    };

    const onBlurInput = () => {
      if (wrapperRef.current) {
        wrapperRef.current.style.borderWidth = '1px';
      }
    };

    const onClickDeleteBtn = () => {
      const target = document.querySelector('#muop-text-input');
      if (target) {
        (target as HTMLInputElement).value = '';
      }
    };

    const onClickViewPwdBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
      const target = document.querySelector(`#muop-text-input-${hash}`);
      if (target) {
        if ((target as HTMLInputElement).type === 'password') {
          (target as HTMLInputElement).type = 'text';
          e.currentTarget.innerText = 'Invisible';
        } else {
          (target as HTMLInputElement).type = 'password';
          e.currentTarget.innerText = 'Visible';
        }
      }
    };

    const Label = (
      <label
        htmlFor={`muop-text-input-${hash}`}
        className={[`muop-text-label`, `muop-text-label-${fontSize}`].join(' ')}
      >
        {label}
      </label>
    );

    const ViewPwdBtn = (
      <button
        className="muop-text-input-view-pwd-btn"
        type="button"
        onClick={onClickViewPwdBtn}
      >
        Visible
      </button>
    );

    const ResetBtn = (
      <button
        className="muop-text-input-invalid-clear-btn"
        type="button"
        onClick={onClickDeleteBtn}
      >
        X
      </button>
    );

    return (
      <>
        <div
          ref={wrapperRef}
          className={[
            `muop-text-input-wrapper`,
            `muop-text-input-wrapper-${
              variant === 'filled' ? `filled-${theme}` : variant
            }`,
            `muop-text-input-wrapper-${theme}`,
            `muop-text-input-wrapper-disabled-${disabled}`,
            `muop-text-input-wrapper-valid-${valid}`
          ].join(' ')}
        >
          {label && label !== '' && labelPosition === 'left' && Label}
          <input
            id={`muop-text-input-${hash}`}
            ref={ref}
            type={type}
            disabled={disabled}
            className={[`muop-text-input`, `muop-text-input-${fontSize}`].join(
              ' '
            )}
            {...props}
            onKeyUp={onKeyUpEnter}
            onFocus={onFouceInput}
            onBlur={onBlurInput}
          />
          {type === 'password' && ViewPwdBtn}
          {!valid && ResetBtn}
          {label && label !== '' && labelPosition === 'right' && Label}
        </div>
        {!valid && (
          <div className="muop-text-input-invalid-text">
            <p>{validText}</p>
          </div>
        )}
      </>
    );
  }
);

// INFO: lint에 걸림..
TextInput.displayName = 'TextInput';
export default TextInput;
