import React, { forwardRef } from 'react';
import { v4 as uuid } from 'uuid';

import './RangeInputStyle.scss';

type TTheme = 'default' | 'info' | 'secondary' | 'warning' | 'danger';
type TThumb = 'circle' | 'rectangle' | 'square';
type TSize = 'sm' | 'md' | 'lg';

export interface RangeInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  theme?: TTheme;
  thumbStyle?: TThumb;
  thumbSize?: TSize;
  sliderSize?: TSize;
}

const RangeInput = forwardRef<HTMLInputElement, RangeInputProps>(
  (
    {
      theme = 'default',
      thumbStyle = 'circle',
      thumbSize = 'md',
      sliderSize = 'md'
    }: RangeInputProps,
    ref
  ) => {
    const hash = uuid().split('-')[0];

    return (
      <div
        className={[
          `muop-range-input-wrapper`,
          `muop-range-input-wrapper-${theme}`
        ].join(' ')}
      >
        <input
          ref={ref}
          type="range"
          id={`muop-range-input-${hash}`}
          className={[
            `muop-range-input`,
            `muop-range-input-thumb-${thumbStyle}`,
            `muop-range-input-thumb-${
              thumbStyle === 'rectangle' ? 'rectangle-' : ''
            }${thumbSize}`,
            `muop-range-input-slider-${sliderSize}`
          ].join(' ')}
        />
      </div>
    );
  }
);

RangeInput.displayName = 'RangeInput';
export default RangeInput;
