import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import './PopperStyle.scss';

const TPlacement = {
  bottomStart: 'bottom-start',
  bottom: 'bottom',
  bottomEnd: 'bottom-end',
  topStart: 'top-start',
  top: 'top',
  topEnd: 'top-end',
  leftStart: 'left-start',
  left: 'left',
  leftEnd: 'left-end',
  rightStart: 'right-start',
  right: 'right',
  rightEnd: 'right-end'
};
type TPlacement = typeof TPlacement[keyof typeof TPlacement];

interface PopperProps extends React.HTMLAttributes<HTMLDivElement> {
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
      ref.current.style.display = 'block';

      const { top, bottom, left, right } = anchorEl.getBoundingClientRect();
      const horiCenter = (right + left) / 2;
      const vertiCenter = (top + bottom) / 2;
      const childTop = top - ref.current.getBoundingClientRect().height;
      const childLeft = left - ref.current.getBoundingClientRect().width;

      switch (placement) {
        // top
        case 'top-start':
          ref.current.style.transform = `translate(${left}px, ${childTop}px)`;
          break;
        case 'top':
          ref.current.style.transform = `translate(${horiCenter}px, ${childTop}px)`;
          break;
        case 'top-end':
          ref.current.style.transform = `translate(${right}px, ${childTop}px)`;
          break;
        // bottom
        case 'bottom-start':
          ref.current.style.transform = `translate(${left}px, ${bottom}px)`;
          break;
        case 'bottom':
          ref.current.style.transform = `translate(${horiCenter}px, ${bottom}px)`;
          break;
        case 'bottom-end':
          ref.current.style.transform = `translate(${right}px, ${bottom}px)`;
          break;
        // left
        case 'left-start':
          ref.current.style.transform = `translate(${childLeft}px, ${top}px)`;
          break;
        case 'left':
          ref.current.style.transform = `translate(${childLeft}px, ${vertiCenter}px)`;
          break;
        case 'left-end':
          ref.current.style.transform = `translate(${childLeft}px, ${bottom}px)`;
          break;
        // right
        case 'right-start':
          ref.current.style.transform = `translate(${right}px, ${top}px)`;
          break;
        case 'right':
          ref.current.style.transform = `translate(${right}px, ${vertiCenter}px)`;
          break;
        case 'right-end':
          ref.current.style.transform = `translate(${right}px, ${bottom}px)`;
          break;
        default:
          break;
      }
    }
  }, [anchorEl, placement, open]);
  return open
    ? ReactDOM.createPortal(
        <div className="muop-popper" role="tooltip" ref={ref}>
          {children}
        </div>,
        document.getElementById('root')!
      )
    : null;
};

export { TPlacement, PopperProps };
export default Popper;
