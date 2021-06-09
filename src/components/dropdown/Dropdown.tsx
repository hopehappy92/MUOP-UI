import React from 'react';

export interface DropdownProps {
  /** children */
  children?: React.ReactNode;
}

export interface ToggleButtonProps extends DropdownProps {
  hi1: string;
}

export interface MenuProps extends DropdownProps {
  hi2: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  ...props
}: ToggleButtonProps) => (
  <div>
    toggle button {props.hi1} {props.children}
  </div>
);

const Menu: React.FC<MenuProps> = ({ ...props }: MenuProps) => (
  <div>menu {props.hi2}</div>
);

const Dropdown: React.FC = () => <div>dropdown</div>;

export default Object.assign(Dropdown, {
  ToggleButton({ ...props }: ToggleButtonProps): JSX.Element {
    return <ToggleButton hi1={props.hi1} />;
  },
  Menu({ ...props }: MenuProps): JSX.Element {
    return <Menu hi2={props.hi2} />;
  }
});

// const DropdownComponent: React.FC = () => <div>menu</div>;

// const Example: React.FC = () => (
//   <Dropdown>
//     <Dropdown.ToggleButton hi1="hi1" />
//     <Dropdown.Menu hi2="hi2" />
//   </Dropdown>
// );

// export default Dropdown;
