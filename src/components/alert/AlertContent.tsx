import React from 'react';

import './AlertStyle.scss';

type ThemeType = 'success' | 'warning' | 'error';

export interface AlertContentProps {
  /**
   * alertMessage
   */
  alertText: string;
  /**
   * theme color
   */
  theme: ThemeType;
}

const AlertContent: React.FC<AlertContentProps> = ({
  alertText,
  theme
}: AlertContentProps) => (
  <div className={`${theme}`}>
    <p>{alertText}</p>
  </div>
);

export default AlertContent;
