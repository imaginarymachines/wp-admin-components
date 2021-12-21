import React, { FC, HTMLAttributes, ReactChild, useMemo } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  variant?: 'primary' | 'secondary';
  a?: string;
  onClick?: () => void;
  isSmall?: boolean;
  isHero?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  variant,
  a,
  onClick,
  isSmall,
  isHero,
}) => {
  let className = useMemo(
    () => `button  button-${variant ? variant : 'primary'}`,
    [variant]
  );
  if (isSmall) {
    className = `${className} button-small`;
  }
  if (isHero) {
    className = `${className} button-hero`;
  }
  if (a) {
    return (
      <a href={a} className={className}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
export default Button;
