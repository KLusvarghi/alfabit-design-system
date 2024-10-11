import { SwitchProps } from './Switch';
import { cva } from 'class-variance-authority';
import classNames from 'classnames';

/* eslint-disable import/no-anonymous-default-export */
export default ({ variant, enabled, disabled }: SwitchProps) => {
  // o cva recebe como primeiro parametro os estilos padrões
  const containerVariant = cva(
    classNames(
      'outline-none relative inline-flex h-6 w-16 items-center rounded-full disabled:bg-disabled',
      { 'pointer-events-none': disabled },
    ),
    {
      variants: {
        variant: {
          // criando as variantes
          common: classNames(
            { 'bg-primary': enabled },
            { 'bg-primary hover:bg-primaryHover': !enabled },
          ),
          contract: classNames(
            { 'bg-success': enabled },
            { 'bg-error': !enabled },
          ),
        },
      },
      defaultVariants: {
        variant: 'common',
      },
    },
  );
  // containerVariant vem lá do CVA, e dentro dele ta sendo passado a variant
  // assim o cvs irá verificar o valor das variáveis e irá determinar os estilos
  const containerClasses = containerVariant({ variant });

  // criando mais dois estilos

  // primeiro parâmetro é as classes padrões
  const switchClasses = classNames(
    'inline-block bg-white w-5 h-5  rounded-full transform transition-transform duration-200 ease-in-out',
    enabled ? 'translate-x-[2.1rem]' : 'translate-x-1',
  );

  const iconClasses = classNames(
    'aria-disabled: text-font-disabled',
    { 'text-success': enabled && !disabled },
    { 'text-error': !enabled && !disabled },
    { 'text-disabled': disabled },
  );

  return {
    Icon: iconClasses,
    Switch: switchClasses,
    Container: containerClasses,
  }
};
