import React, { useRef, useState } from 'react';
import Button from '../button/Button';
import Popper from '../popper/Popper';

import './DropdownStyle.scss';

export interface DropdownProps {
  /** children */
  children?: React.ReactNode;
  /** title of dropdown toggle */
  title?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  children
}: DropdownProps) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(prev => !prev);
  };
  return (
    <div className="muop-dropdown">
      <div ref={anchorRef} style={{ display: 'inline-block' }}>
        <Button outline className="muop-dropdown-button" onClick={handleClick}>
          {title}
        </Button>
      </div>
      <Popper anchorEl={anchorRef.current} open={open} placement="bottom-start">
        <div style={{ border: '1px solid gray' }}>{children}</div>
      </Popper>
    </div>
  );
};

export default Dropdown;
