import React, { forwardRef } from 'react';

import { v4 as uuid } from 'uuid';

import './DateTimeInputStyle.scss';

type TType = 'date' | 'time';

export interface DateTimeInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: TType;
}

// input[type="date"|"time"]은 ie 미지원, custom도 불가능
const DateTimeInput = forwardRef<HTMLInputElement, DateTimeInputProps>(
  ({ type = 'date' }: DateTimeInputProps, ref) => {
    const hash = uuid().split('-')[0];

    return <input ref={ref} type={type} id={`muop-date-time-input-${hash}`} />;
  }
);

DateTimeInput.displayName = 'DateTiemInput';
export default DateTimeInput;
