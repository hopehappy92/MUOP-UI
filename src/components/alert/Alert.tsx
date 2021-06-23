import React, { useEffect, useRef } from 'react';

import './AlertStyle.scss';

type TTheme = 'default' | 'info' | 'secondary' | 'warning' | 'danger';
type TSize = 'lg' | 'md' | 'sm';
type TTime = '500' | '1000' | '1500' | '2000' | '3000';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * if true, active alert
   * @default false
   */
  open: boolean;
  /**
   * alert inner text
   */
  alertText: string;
  /**
   * select theme
   */
  theme?: TTheme;
  /**
   * select size
   */
  size?: TSize;
  /**
   * if true, active alert-close when click outside
   * @default true
   */
  backdrop?: boolean;
  /**
   * if true, active footer
   * @default true
   */
  footer?: boolean;
  /**
   * active auto close ( unit : ms )
   */
  autoClose?: TTime;
  /**
   * close alert when click close. can't control
   */
  handleAlertClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  open = false,
  alertText,
  theme = 'default',
  size = 'md',
  backdrop = true,
  footer = true,
  autoClose,
  handleAlertClose,
  ...props
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
      }, +autoClose);
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
      {...props}
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
            x
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
