import React, { forwardRef } from 'react';
import { v4 as uuid } from 'uuid';

import './OtherInputStyle.scss';

type TType = 'range' | 'file' | 'number' | 'switch';

export interface OtherInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: TType;
}

const OtherInput = forwardRef<HTMLInputElement, OtherInputProps>(
  ({ type = 'range' }: OtherInputProps, ref) => {
    const hash = uuid().split('-')[0];

    const FileInput = (
      <div>
        <input ref={ref} type={type} id={`muop-file-input-${hash}`} />
      </div>
    );

    const NumberInput = (
      <div>
        <input ref={ref} type={type} id={`muop-number-input-${hash}`} />
      </div>
    );

    const SwitchInput = (
      <div>
        <input ref={ref} type={type} id={`muop-swtich-input-${hash}`} />
      </div>
    );

    if (type === 'file') {
      return FileInput;
    }
    if (type === 'number') {
      return NumberInput;
    }
    if (type === 'switch') {
      return SwitchInput;
    }
    return null;
  }
);

OtherInput.displayName = 'OtherInput';
export default OtherInput;
