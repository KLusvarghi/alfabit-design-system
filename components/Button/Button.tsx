import React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secundary' | 'tertiary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>; // pegando toda tipagem padrão do button html e extendendo para o children

// tipando 'variant' igual a variant de buttonProps. assim não precisa replicar o código tipando
// e o 'disabled' ele vem do tipo 'React.ButtonHTMLAttributes<HTMLButtonElement>'
function getVariant(
  variant: ButtonProps['variant'],
  disabled: ButtonProps['disabled'],
) {
  switch (variant) {
    case 'primary':
      return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white';

    case 'secundary':
      return disabled
        ? 'bg-disabled text-disabled'
        : 'bg-quaternary text-primary';

    case 'tertiary':
      return disabled ? '' : '';

    default:
      return disabled ? '' : '';
  }
}

// recebendo dentrode rest todas as propriedade de um botão, focus, hover, etc...
// teremos uma propriedade chamada 'variant' que será responsave por ter o valor de primary, secundary e tertiary, que são os 3 tipos de variações de botoes que temos
const Button = ({
  variant = 'primary',
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  // dentro de classes iremos colocar tudo que é padrão dentro do botão

  return (
    <button
      className={`rounded-md px-6 py-2 ${getVariant(variant, disabled)} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
