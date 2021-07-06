import React, { ReactElement, useRef } from 'react';

import './TextInputStyle.scss';

type TTheme = 'default' | 'info' | 'secondary' | 'warning' | 'danger';
type TSize = 'sm' | 'md' | 'lg';
type TVariant = 'standard' | 'filled' | 'outlined';
type TLabelPosition = 'left' | 'right';

export interface TextInputProps extends React.HTMLAttributes<HTMLInputElement> {
  theme?: TTheme;
  size?: TSize;
  disabled?: boolean;
  variant?: TVariant;
  label?: string | number | ReactElement;
  labelPosition?: TLabelPosition;
  handleSubmit?: () => void;
}

const TextInput: React.FC<TextInputProps> = ({
  theme = 'default',
  size = 'md',
  disabled = false,
  variant = 'standard',
  label,
  labelPosition = 'left',
  handleSubmit,
  ...props
}: TextInputProps) => {
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

  const Label = (
    <label
      htmlFor="muop-text-input"
      className={[`muop-text-label`, `muop-text-label-${size}`].join(' ')}
    >
      {label}
    </label>
  );

  return (
    <div
      ref={wrapperRef}
      className={[
        `muop-text-input-wrapper`,
        `muop-text-input-wrapper-${
          variant === 'filled' ? `filled-${theme}` : variant
        }`,
        `muop-text-input-wrapper-${theme}`,
        `muop-text-input-wrapper-disabled-${disabled}`
      ].join(' ')}
    >
      {label && label !== '' && labelPosition === 'left' && Label}
      <input
        id="muop-text-input"
        type="text"
        disabled={disabled}
        className={[`muop-text-input`, `muop-text-input-${size}`].join(' ')}
        {...props}
        onKeyUp={onKeyUpEnter}
        onFocus={onFouceInput}
        onBlur={onBlurInput}
      />
      {label && label !== '' && labelPosition === 'right' && Label}
    </div>
  );
};

export default TextInput;
