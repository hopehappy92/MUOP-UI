import React, { useEffect, useRef } from 'react';

import './AlertStyle.scss';

type TTheme = 'none' | 'primary' | 'secondary' | 'warning';
type TSize = 'lg' | 'md' | 'sm';
type TTime = 500 | 1000 | 1500 | 2000 | 3000;

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
   * footer 버튼 활성화
   */
  footer?: boolean;
  /**
   * autoclose 활성화 ( ms단위 )
   */
  autoClose?: TTime;
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
  footer = true,
  autoClose,
  handleAlertClose
}: AlertProps) => {
  const alertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      alertRef.current?.focus();
    } else {
      alertRef.current?.blur();
    }
  }, [open]);

  useEffect(() => {
    if (open && autoClose) {
      setTimeout(() => {
        handleAlertClose?.();
      }, autoClose);
    }
  }, [open, autoClose]);

  const onClickOutSide = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (backdrop) {
      handleAlertClose?.();
    }
  };

  const onKeyUpEsc = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (backdrop && (e.key === 'Escape' || e.key === 'Enter')) {
      handleAlertClose?.();
    }
  };

  const onClickInSide = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const onClickClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleAlertClose?.();
  };

  return open && typeof window !== 'undefined' ? (
    <div
      id="muop-alert"
      role="presentation"
      tabIndex={-1}
      ref={alertRef}
      className="muop-alert"
      onClick={onClickOutSide}
      onKeyUp={onKeyUpEsc}
    >
      <main
        role="presentation"
        tabIndex={-1}
        className={[
          `muop-alert-inner`,
          `muop-alert-${theme}`,
          `muop-alert-${size}`
        ].join(' ')}
        onClick={onClickInSide}
      >
        <header>
          <button type="button" onClick={onClickClose}>
            X
          </button>
        </header>
        <article>
          <p>{alertText}</p>
        </article>
        {footer && (
          <footer>
            <button type="button" onClick={onClickClose}>
              확인
            </button>
          </footer>
        )}
      </main>
    </div>
  ) : null;
};

export default Alert;
