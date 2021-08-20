import React from 'react';
import { Story, Meta } from '@storybook/react';

import Dropdown, { DropdownProps } from './Dropdown';
import DropdownItem from './DropdownItem';

export default {
  title: 'Components/Dropdown',
  component: Dropdown
} as Meta;

const Template: Story<DropdownProps> = (args: DropdownProps) => {
  const { title, children } = args;
  // return <Dropdown title={title}>{children}</Dropdown>;
  return (
    <Dropdown title={title}>
      <DropdownItem item="hi1" />
      <DropdownItem item="hi2" />
      <DropdownItem item="hi3" />
    </Dropdown>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'title'
  // children: (
  //   <>
  //     <div>hi1</div>
  //     <div>hi2</div>
  //     <div>hi3</div>
  //   </>
  // )
};

// TODO: DropdownItem template 만들기
