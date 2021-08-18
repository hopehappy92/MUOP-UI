import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Popper, { PopperProps, TPlacement } from './Popper';
import Button from '../button/Button';

import './PopperStyle.scss';

export default {
  title: 'Components/Popper',
  component: Popper
} as Meta;

const Template: Story<PopperProps> = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [placement, setPlacement] = React.useState<TPlacement>();

  const handleClick = (newPlacement: TPlacement) => (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(e.currentTarget);
    setOpen(prev => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <div className="popper-story">
      <Popper anchorEl={anchorEl} open={open} placement={placement}>
        <div style={{ border: '1px solid gray' }}>I am Popper</div>
      </Popper>
      <div className="popper-story-top">
        <Button outline onClick={handleClick(TPlacement.topStart)}>
          {TPlacement.topStart}
        </Button>
        <Button outline onClick={handleClick(TPlacement.top)}>
          {TPlacement.top}
        </Button>
        <Button outline onClick={handleClick(TPlacement.topEnd)}>
          {TPlacement.topEnd}
        </Button>
      </div>
      <div className="popper-story-side">
        <div className="popper-story-side-left">
          <Button outline onClick={handleClick(TPlacement.leftStart)}>
            {TPlacement.leftStart}
          </Button>
          <Button outline onClick={handleClick(TPlacement.left)}>
            {TPlacement.left}
          </Button>
          <Button outline onClick={handleClick(TPlacement.leftEnd)}>
            {TPlacement.leftEnd}
          </Button>
        </div>
        <div className="popper-story-side-right">
          <Button outline onClick={handleClick(TPlacement.rightStart)}>
            {TPlacement.rightStart}
          </Button>
          <Button outline onClick={handleClick(TPlacement.right)}>
            {TPlacement.right}
          </Button>
          <Button outline onClick={handleClick(TPlacement.rightEnd)}>
            {TPlacement.rightEnd}
          </Button>
        </div>
      </div>
      <div className="popper-story-bottom">
        <Button outline onClick={handleClick(TPlacement.bottomStart)}>
          {TPlacement.bottomStart}
        </Button>
        <Button outline onClick={handleClick(TPlacement.bottom)}>
          {TPlacement.bottom}
        </Button>
        <Button outline onClick={handleClick(TPlacement.bottomEnd)}>
          {TPlacement.bottomEnd}
        </Button>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
