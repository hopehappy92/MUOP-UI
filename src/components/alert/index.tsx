import React from 'react';
import AlertContent, { AlertContentProps } from './AlertContent';

import './AlertStyle.scss';

export interface AlertProps extends AlertContentProps {
  /**
   * true일 때, alert 활성화
   * @default false
   */
  open: boolean;
}

const Alert: React.FC<AlertProps> = ({
  open = false,
  alertText,
  theme
}: AlertProps) =>
  open && typeof window !== 'undefined' ? (
    <AlertContent alertText={alertText} theme={theme} />
  ) : null;

export default Alert;
