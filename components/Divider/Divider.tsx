import React from 'react';
import classNames from 'classnames';

export type DividerProps = {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  bgColor?: 'light' | 'dark' | 'black';
} & React.HTMLAttributes<HTMLElement>;

const colorClassMap = {
  light: 'bg-light',
  dark: 'bg-dark',
  black: 'bg-black',
};

const Divider = ({
  width,
  height = 'h-[1px]',
  children,
  bgColor = 'black',
  ...rest
}: DividerProps) => {
  // criando essa variavel para nos ajudar na hora de estilizar
  const colorClass = colorClassMap[bgColor];

  // sendo a classe que as linhas do divider terá
  const barClass = classNames(
    // se existir um children eu tenho que diminuir o tamnho das linhas, caso não tenha cada linha tem metade do tamanho, que juntão se tornam uma
    children ? 'w-1/3' : 'w-1/2',
    height,
    colorClass,
  );

  return (
    <div className={classNames(width, 'flex items-center justify-center')}>
      <div className={barClass}></div>
      {children && <div className="px-3">{children}</div>}
      <div className={barClass}></div>
    </div>
  );
};

export default Divider;
