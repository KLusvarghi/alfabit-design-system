import { Meta, StoryObj } from '@storybook/react';

import Typography, { type TypographyProps } from './Typography';

const meta: Meta<TypographyProps> = {
  title: 'Atoms/Typography',
  // tags: ['autodocs'],
  component: Typography,
  argTypes: {
    //se não passar nada ele pegará automaticamnete as propriedade, mas neste caso queremos definir explicitamente

    className: {
      type: 'string',
    },
  },
};

export default meta;

// criando uma história 
export const Primary: StoryObj<TypographyProps> = {
  args: {
    children: 'Typography',
  },
};

