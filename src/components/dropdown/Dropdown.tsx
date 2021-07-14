import React, { useState } from 'react';
import Button from '../button/Button';

import './DropdownStyle.scss';

export interface DropdownProps {
  /** children */
  children?: React.ReactNode;
  /** title of dropdown toggle */
  title?: string;
}

const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const { title, children } = props;
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    console.log('click & open is', !open);
    setOpen(prev => !prev);
  };
  return (
    <div className="muop-dropdown">
      <Button outline className="muop-dropdown-button" onClick={handleClick}>
        {title}
      </Button>
      <div className={`muop-dropdown-menu ${open ? 'open' : 'close'}`}>
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
