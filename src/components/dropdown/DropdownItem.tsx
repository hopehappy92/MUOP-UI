import React from 'react';

export interface DropdownItemProps {
  item: string;
}

const DropdownItem: React.FC<DropdownItemProps> = (
  props: DropdownItemProps
) => {
  const { item } = props;

  return <div>{item}</div>;
};
export default DropdownItem;
