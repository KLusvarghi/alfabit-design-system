import { Meta, StoryObj } from '@storybook/react/*';

import Divider, { type DividerProps } from './Divider';

const meta: Meta<DividerProps> = {
  title: 'Atoms/Divider',
  component: Divider,
  argTypes: {
    children: {
      type: 'string',
    },
  },
};

export default meta;

export const Primary: StoryObj<DividerProps> = {
  args: {},
};

export const Default: StoryObj<DividerProps> = {
  args: {},
};

export const DefaultLarge1: StoryObj<DividerProps> = {
  args: {bgColor: 'black', height: 'h-[2px]'},
};

export const DefaultLarge2: StoryObj<DividerProps> = {
  args: {bgColor: 'black', height: 'h-[3px]'},
};

export const DividerWithProps: StoryObj<DividerProps> = {
  args: { children: 'Olá mundo' },
};

export const DividerWithProps2: StoryObj<DividerProps> = {
  args: { children: 'Olá mundo', bgColor: 'black', height: 'h-[2px]' },
};

export const DividerWithProps3: StoryObj<DividerProps> = {
  args: { children: 'Olá mundo', bgColor: 'black', height: 'h-[3px]' },
};