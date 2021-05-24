import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Alert, { AlertProps } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  args: {
    theme: 'none',
    size: 'md'
  },
  argTypes: {
    backdrop: { control: 'boolean' },
    footer: { control: 'boolean' }
  }
} as Meta;

const Template: Story<AlertProps> = (args: AlertProps) => {
  const { alertText, theme, size, backdrop, footer, autoClose } = args;
  const [open, setOpen] = useState<boolean>(false);

  const handleAlertOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <button type="button" onClick={handleAlertOpen}>
        Alert Open
      </button>
      <Alert
        open={open}
        alertText={alertText}
        theme={theme}
        size={size}
        backdrop={backdrop}
        footer={footer}
        autoClose={autoClose}
        handleAlertClose={() => setOpen(false)}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  alertText: 'Default'
};

export const Large = Template.bind({});
Large.args = {
  alertText: 'Large',
  size: 'lg'
};

export const Small = Template.bind({});
Small.args = {
  alertText: 'Small',
  size: 'sm'
};

export const Primary = Template.bind({});
Primary.args = {
  alertText: 'Primary',
  theme: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  alertText: 'Secondary',
  theme: 'secondary'
};

export const Warning = Template.bind({});
Warning.args = {
  alertText: 'Warning',
  theme: 'warning'
};

export const Timer = Template.bind({});
Timer.args = {
  alertText: 'Timer',
  autoClose: 1000
};
