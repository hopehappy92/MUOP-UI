import React from 'react';
import { v4 as uuid } from 'uuid';

import './TableStyle.scss';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  topFreeze?: boolean;
  leftFreeze?: boolean;
  rightFreeze?: boolean;
  bottomFreeze?: boolean;
}

const Table: React.FC<TableProps> = ({
  // topFreeze = false,
  // leftFreeze = false,
  // rightFreeze = false,
  // bottomFreeze = false,
  children,
  ...props
}: TableProps) => {
  const hash = uuid().split('-')[0];

  return (
    <table id={`muop-table-${hash}`} {...props}>
      {children}
    </table>
  );
};

export default Table;
