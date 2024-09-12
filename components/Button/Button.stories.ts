import { Meta, StoryObj } from '@storybook/react/*';
import Button, { ButtonProps } from './Button';

//  sendo 'Meta' um tipo genérico tambem
// aqui dentro irei definir as meta propriedades
const meta: Meta<ButtonProps> = {
  title: 'Molecules/Button', //assim "Button" será uma subpasta de "Molecules"
  // tags: ['autodocs'], // Sempre que temos uma tag como essa em uma propriedade meta de um componente estamos dizendo ao Storybook que queremos criar uma documentação autogerada para aquele componente, mas neste caso queremos nós mesmo criar a documentação
  component: Button,
  // aqui é onde podemos definir quais propriedades irei manipualr
  argTypes: {
    children: {
      type: 'string',
    },
    disabled: {
      type: 'boolean',
    },
    className: {
      type: 'string',
    },
  },
};

export default meta;

// sendo o 'StoryObj' um tipo genérico, tendo que passar o tipo dele
export const Primary: StoryObj<ButtonProps> = {
  // args são os argumento, podendo colocar qualquer argumento aderente ao tipo 'Button' tendo um auto complite do vscode por conta da tipagem
  args: {
    children: 'Botão',
  },
};

// qualquer objeto que eu exporte sem ser como padrão (colocando o export) ele criará um story para este componente
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    disabled: true
  },
};

export const Secundary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    variant: 'secundary',
  },
};

export const SecundaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    variant: 'secundary',
    disabled: true
  },
};

export const Violet: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    className: 'theme-violet',
  },
};

export const VioletSecundary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    className: 'theme-violet',
    variant: 'secundary',
  },
};
