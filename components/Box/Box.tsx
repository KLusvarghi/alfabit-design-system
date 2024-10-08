import classNames from 'classnames';
import React from 'react';

export type BoxProps = {
  rounded?: boolean;
  border?: boolean;
  filledBackground?: boolean;
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'dark' | 'alert' | 'success' | 'error';
  className: string;
} & React.HTMLAttributes<HTMLDivElement>;

const boxClassMap = {
  primary: 'bg-primary',
  secondary: 'bg-tertiary',
  dark: 'bg-dark',
  alert: 'bg-yellow-100 text-yellow-100',
  success: 'bg-green-100 text-green-100',
  error: 'bg-error-100 text-error-100',
};

const Box = ({
  children,
  rounded = false,
  border = false,
  filledBackground = false,
  type = 'primary',
  className,
  ...rest
}: BoxProps) => {
  const classes = classNames({
    'rounded-md': rounded, //sendo aplicado apenas se 'rounded' existir
    'border border-gray-100': border,
    'bg-dark': filledBackground,
    // ele basicamente irá percorrer o objeto 'boxClassMap' e acessar o valor através do 'type' recebido como props
    [boxClassMap[type]]: type,
  });

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Box;
