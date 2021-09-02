/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Story, Meta } from '@storybook/react';

import Table, { TableProps } from './Table';

export default {
  title: 'Components/Table',
  component: Table
} as Meta;

const TempData = new Array(100).fill(123);

const Template: Story<TableProps> = (args: TableProps) => {
  const { children } = args;
  return <Table>{children}</Table>;
};

export const Default = Template.bind({});

const Children: React.ReactNode = (
  <>
    <thead>
      <tr>
        {TempData.map((d, idx) => (
          <th key={`th-${d}-${idx}`}>{d}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {TempData.map((d, idx) => (
        <tr key={`tr-${d}-${idx}`}>
          {TempData.map((dd, idxx) => (
            <td key={`td-${dd}-${idxx}`}>{dd}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </>
);

Default.args = {
  children: Children
};
