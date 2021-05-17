import React, { useEffect, useRef } from 'react';

import './AlertStyle.scss';

type TTheme = 'none' | 'primary' | 'secondary' | 'warning';
type TSize = 'lg' | 'md' | 'sm';

export interface AlertProps {
  /**
   * true일 때, alert 활성화
   * @default false
   */
  open: boolean;
  /**
   * alert에 들어갈 알림
   */
  alertText: string;
  /**
   * 색 지정
   */
  theme?: TTheme;
  /**
   * 크기 지정
   */
  size?: TSize;
  /**
   * true일 때, 배경 클릭 alert 닫기 활성화
   * @default true
   */
  backdrop?: boolean;
  /**
   * 창 닫기
   */
  handleAlertClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  open = false,
  alertText,
  theme = 'none',
  size = 'md',
  backdrop = true,
  handleAlertClose
}: AlertProps) => {
  // useEffect(() => {
  //   function keyUp(e: KeyboardEvent) {
  //     console.log(e.key);

  //     document.getElementById('muop-alert')?.addEventListener('keyup', keyUp);
  //   }
  // }, []);

  // const onClickOutSide = (e: React.MouseEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   if (backdrop) {
  //     handleAlertClose?.();
  //   }
  // };

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) ref.current?.focus();
    else ref.current?.blur();
  }, [open]);

  const onKeyUpEsc = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e.key);
    if (e.key === 'Escape') {
      if (backdrop) {
        handleAlertClose?.();
      }
    }
  };

  return open && typeof window !== 'undefined' ? (
    <div
      id="muop-alert"
      role="presentation"
      className="muop-alert"
      // onClick={onClickOutSide}
      onKeyUp={onKeyUpEsc}
      tabIndex={-1}
      ref={ref}
      onFocus={() => console.log('focus')}
    >
      <div
        className={[
          `muop-alert-inner`,
          `muop-alert-${theme}`,
          `muop-alert-${size}`
        ].join(' ')}
      >
        <p>{alertText}</p>
      </div>
    </div>
  ) : null;
};

export default Alert;
