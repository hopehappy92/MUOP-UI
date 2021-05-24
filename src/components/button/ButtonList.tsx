import React from 'react';

import Button, { ButtonProps } from './Button';

export interface ButtonListProps {
  buttons: ButtonProps[];
}

const ButtonList: React.FC<ButtonListProps> = (props: ButtonListProps) => {
  const { buttons } = props;
  return (
    <>
      {buttons.map(button => (
        <Button
          key={button.theme}
          theme={button.theme}
          size={button.size}
          disabled={button.disabled}
          outline={button.outline}
          loading={button.loading}
          loadingChildren={button.loadingChildren}
        >
          {button.children}
        </Button>
      ))}
    </>
  );
};

export default ButtonList;
