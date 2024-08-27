import React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>; // pegando toda tipagem padrão do button html e extendendo para o children

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`
        bg-[#2D5BFF] rounded-[8px] px-[32px] py-[12px] text-white
    ${className}
    `}
    >
      {children}
    </button>
  );
};

export default Button;
