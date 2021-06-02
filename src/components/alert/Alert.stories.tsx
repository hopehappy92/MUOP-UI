import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Alert, { AlertProps } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  args: {
    theme: 'default',
    size: 'md'
  },
  argTypes: {
    backdrop: { control: 'boolean' },
    footer: { control: 'boolean' }
  }
} as Meta;

const Template: Story<AlertProps> = (args: AlertProps) => {
  const { alertText, theme, size, backdrop, footer, autoClose } = args;
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleAlertOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <>
      <button type="button" onClick={handleAlertOpen}>
        Alert Open
      </button>
      <Alert
        open={isOpen}
        alertText={alertText}
        theme={theme}
        size={size}
        backdrop={backdrop}
        footer={footer}
        autoClose={autoClose}
        handleAlertClose={() => setIsOpen(false)}
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

export const Info = Template.bind({});
Info.args = {
  alertText: 'Info',
  theme: 'info'
};

export const Success = Template.bind({});
Success.args = {
  alertText: 'Success',
  theme: 'success'
};

export const Warning = Template.bind({});
Warning.args = {
  alertText: 'Warning',
  theme: 'warning'
};

export const Danger = Template.bind({});
Danger.args = {
  alertText: 'Danger',
  theme: 'danger'
};

export const Timer = Template.bind({});
Timer.args = {
  alertText: 'Timer',
  autoClose: '1000'
};
