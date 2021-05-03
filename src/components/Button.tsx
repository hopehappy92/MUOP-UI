import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
};

function MyButton({ children }: ButtonProps) {
  return <button>{children}</button>;
}

export default MyButton;
