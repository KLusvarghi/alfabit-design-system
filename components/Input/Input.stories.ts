import { Meta, StoryObj } from '@storybook/react';

import Input, { InputProps } from './Input';

const meta: Meta<InputProps> = {
  title: 'Molecules/Input',
  component: Input,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<InputProps> = {
  args: {
    value: 'Input',
  },
};

export const PrimaryDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    disabled: true,
  },
};

export const Multiline: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    multiline: true,
  },
};

export const MultilineDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    multiline: true,
    disabled: true,
  },
};

// todos os tipos só que com Label

export const PrimaryLabel: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    label: 'Label',
  },
};

export const PrimaryLabelDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    label: 'Label',
    disabled: true,
  },
};

export const MultilineLabel: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    label: 'Label',
    multiline: true,
  },
};

export const MultilineLabelDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    label: 'Label',
    multiline: true,
    disabled: true,
  },
};