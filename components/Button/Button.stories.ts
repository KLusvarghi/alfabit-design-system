import { Meta, StoryObj } from "@storybook/react/*";
import Button, { ButtonProps } from "./Button";

//  sendo 'Meta' um tipo genérico tambem
const meta: Meta<ButtonProps> = {
  // aqui dentro irei definir as meta propriedades
  title: 'Molecules/Button', //assim "Button" será uma subpasta de "Molecules"
  // tags: ['autodocs'], // Sempre que temos uma tag como essa em uma propriedade meta de um componente estamos dizendo ao Storybook que queremos criar uma documentação autogerada para aquele componente, mas neste caso queremos nós mesmo criar a documentação
  component: Button,
  argTypes:{}
}

export default meta

// sendo o 'StoryObj' um tipo genérico, tendo que passar o tipo dele
export const Primary:StoryObj<ButtonProps> = {
// args são os argumento, podendo colocar qualquer argumento aderente ao tipo 'Button' tendo um auto complite do vscode
  args: {
    children: 'Botão'
  }
}