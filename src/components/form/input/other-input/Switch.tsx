import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

import './SwitchStyle.scss';

type TTheme = 'default' | 'info' | 'secondary' | 'warning' | 'danger';
export type TLabelPosition = 'left' | 'right' | 'top' | 'bottom';

export interface SwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  theme?: TTheme;
  disabled?: boolean;
  label?: string;
  labelPosition?: TLabelPosition;
  onOnOFfClick?: (bool: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({
  theme = 'default',
  disabled = false,
  label,
  labelPosition = 'right',
  onOnOFfClick,
  ...props
}: SwitchProps) => {
  const hash = uuid().split('-')[0];

  const [isOn, setIsOn] = useState<boolean>(false);

  const railRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const switchRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if (railRef.current && inputRef.current && switchRef.current) {
      // INFO: getClientRects로 하면, parentNode가 달라서 positon이 안 잡힘
      const top = railRef.current.offsetTop;
      const left = railRef.current.offsetLeft;
      inputRef.current.style.left = `${left}px`;
      inputRef.current.style.top = `${top}px`;
      switchRef.current.style.left = `${left}px`;
      switchRef.current.style.top = `${top}px`;
    }
  }, [labelPosition]);

  const onSwitchBtnClick = () => {
    if (railRef.current && inputRef.current && switchRef.current) {
      const { width } = railRef.current.getClientRects()[0];
      const left = railRef.current.offsetLeft;
      const switchWidth = switchRef.current.getClientRects()[0].width;
      const isChecked = inputRef.current.checked;
      if (isChecked) {
        switchRef.current.style.left = `${left + width - switchWidth}px`;
      } else {
        switchRef.current.style.left = `${left}px`;
      }
      setIsOn(isChecked);
      onOnOFfClick?.(isChecked);
    }
  };

  return (
    <div
      className={[
        `muop-switch-wrapper`,
        `muop-switch-wrapper-${theme}`,
        `muop-switch-wrapper-${labelPosition}`,
        `${!isOn ? 'muop-switch-wrapper-off' : ''}`,
        `${disabled ? 'muop-switch-wrapper-disabled' : ''}`
      ].join(' ')}
    >
      <div ref={railRef}>
        <label htmlFor={`muop-switch-btn-${hash}`} ref={switchRef}>
          <></>
        </label>
        <input
          type="checkbox"
          id={`muop-switch-btn-${hash}`}
          ref={inputRef}
          onClick={onSwitchBtnClick}
          disabled={disabled}
          {...props}
        />
      </div>
      <p>{label}</p>
    </div>
  );
};

Switch.displayName = 'Switch';
export default Switch;
