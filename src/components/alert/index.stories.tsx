import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Alert, { AlertProps } from './index';

export default {
  title: 'Test/Alert',
  component: Alert
} as Meta;

const Template: Story<AlertProps> = (args: AlertProps) => {
  const { alertText, theme } = args;
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
      <Alert open={open} alertText={alertText} theme={theme} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  alertText: 'Default',
  theme: 'success'
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

export const Error = Template.bind({});
Error.args = {
  alertText: 'Error',
  theme: 'error'
};
