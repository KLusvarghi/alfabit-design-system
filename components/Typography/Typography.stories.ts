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
    children: ' Texto',
  },
};

// criando novas variantes de stories

export const TextHeadingH1: StoryObj<TypographyProps> = {
  args: {
    children: 'Texto',
    element: 'h1',
    size: 'title1',
    className: 'font-extrabold',
  },
};

export const TextHeadingH2: StoryObj<TypographyProps> = {
  args: {
    children: 'Texto',
    element: 'h2',
    size: 'title2',
    className: 'font-extrabold',
  },
};

export const TextHeadingH3: StoryObj<TypographyProps> = {
  args: {
    children: 'Texto',
    element: 'h3',
    size: 'title3',
    className: 'font-extrabold',
  },
};

export const TextParagraph: StoryObj<TypographyProps> = {
  args: {
    children: 'Texto',
    element: 'p',
    size: 'md',
    className: 'text-primary',
  },
};
