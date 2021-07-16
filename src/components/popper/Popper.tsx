import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

type TPlacement = 'bottom-start' | 'bottom' | 'bottom-end';

export interface PopperProps extends React.HTMLAttributes<HTMLFormElement> {
  anchorEl: HTMLElement | null;
  placement?: TPlacement;
  open: boolean;
}

const Popper: React.FC<PopperProps> = ({
  anchorEl,
  placement = 'bottom',
  open,
  children
}: PopperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref && ref.current && anchorEl) {
      const { top, bottom, left, right } = anchorEl.getBoundingClientRect();
      const center = (right + left) / 2;

      switch (placement) {
        case 'bottom-start':
          ref.current.style.transform = `translate(${left}px, ${bottom}px)`;
          break;
        case 'bottom':
          ref.current.style.transform = `translate(${center}px, ${bottom}px)`;
          break;
        case 'bottom-end':
          ref.current.style.transform = `translate(${right}px, ${bottom}px)`;
          break;
        default:
          break;
      }
    }
  }, [anchorEl, placement, open]);
  return open
    ? ReactDOM.createPortal(
        <div
          role="tooltip"
          x-placement="bottom"
          style={{
            position: 'absolute',
            willChange: 'transform',
            top: '0px',
            left: '0px'
          }}
          ref={ref}
        >
          {children}
        </div>,
        document.getElementById('root')
      )
    : null;
};

export default Popper;
