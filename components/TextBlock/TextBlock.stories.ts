import { Meta, StoryObj } from '@storybook/react';

import TextBlock, { type TextBlockProps } from './TextBlock';

const meta: Meta<TextBlockProps> = {
  title: 'Atoms/TextBlock',
  component: TextBlock,
  argTypes: {
    children: { type: 'string' },
    title: { type: 'string' },
    type: { type: 'string' },
  },
};

export default meta;

export const TextBlockPrimary: StoryObj<TextBlockProps> = {
  args: {
    title: 'Title',
    children: 'Olá eu sou uma bloco de Texto padrão ',
    type: 'primary',
  },
};

export const TextBlockSecondary: StoryObj<TextBlockProps> = {
  args: {
    title: 'Title',
    children: 'Olá eu sou uma bloco de Texto secundário',
    type: 'secondary',
  },
};

export const TextBlockTertiary: StoryObj<TextBlockProps> = {
  args: {
    title: 'Title',
    children: 'Olá eu sou uma bloco de Texto Terciário',
    type: 'dark',
  },
};
