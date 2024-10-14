import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// o primeiro parametro colocamos as classes qe queremos no nosso elemento e o segundo e as variants, e dentro dele temos nosso estilos condicionais
const textVariants = cva('text-gray-primary text-sm font-normal', {
  variants: {
    variant: {
      primary: 'text-gray-primary',
      secondary: 'text-gray-secondary',
      tertiary: 'text-gray-tertiary',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      xl: 'text-xl',
      title1: 'text-txl',
      title2: 'text-tlg',
      title3: 'text-tmd',
    },
    // caso não seja passado nenhum valor este será o valor por padrão
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
});

// tipando usando o variantProps que importamos do cva e usando o generig do ts abrindo <> e dizendo que pe do tipo do textVariants
export type TypographyProps = VariantProps<typeof textVariants> & {
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements; //é o tipo do jsx
} & JSX.IntrinsicElements['p']; // dizenod que é um jsx mas que é um elemento p

const Typography = ({
  children,
  element = 'p',
  className,
  ...rest
}: TypographyProps) => {
  const Element = element as any; // para que p Typescript pare de reclamar dizemos que ele pode ser any
  return (
    <Element
      // faremos a interpolação da função textVariants(), que receberá como parâmetro o rest, ou seja, o restante das propriedades que recebemos e que estão ocultas que são as propriedades variant e size por exemplo, assim já setando os valores.
      className={`${textVariants(rest)} ${className}`}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Typography;
