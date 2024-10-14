import { Meta, StoryObj } from '@storybook/react';

import Avatar, { type AvatarProps } from './Avatar';

const meta: Meta<AvatarProps> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    // definindo as props
    className: { type: 'string' },
    size: { type: 'string' },
  },
};

export default meta;

export const Default: StoryObj<AvatarProps> = {
  args: {},
};

export const AvatarSm: StoryObj<AvatarProps> = {
  args: { size: 'sm' },
};

export const AvatarMd: StoryObj<AvatarProps> = {
  args: { size: 'md' },
};

export const AvatarLg: StoryObj<AvatarProps> = {
  args: { size: 'lg' },
};

export const AvatarImage: StoryObj<AvatarProps> = {
  args: {
    image:
      'https://media.licdn.com/dms/image/v2/D4D35AQE0TMUvttFDtw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727887740692?e=1729119600&v=beta&t=jMpGct37X_7-xGJHJtGjPedcV8L1KkjQ9Dds12dRVXU',
  },
};

export const AvatarImageSm: StoryObj<AvatarProps> = {
  args: {
    size: 'sm',
    image:
      'https://media.licdn.com/dms/image/v2/D4D35AQE0TMUvttFDtw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727887740692?e=1729119600&v=beta&t=jMpGct37X_7-xGJHJtGjPedcV8L1KkjQ9Dds12dRVXU',
  },
};

export const AvatarImageMd: StoryObj<AvatarProps> = {
  args: {
    size: 'md',
    image:
      'https://media.licdn.com/dms/image/v2/D4D35AQE0TMUvttFDtw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727887740692?e=1729119600&v=beta&t=jMpGct37X_7-xGJHJtGjPedcV8L1KkjQ9Dds12dRVXU',
  },
};

export const AvatarImageLg: StoryObj<AvatarProps> = {
  args: {
    size: 'lg',
    image:
      'https://media.licdn.com/dms/image/v2/D4D35AQE0TMUvttFDtw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727887740692?e=1729119600&v=beta&t=jMpGct37X_7-xGJHJtGjPedcV8L1KkjQ9Dds12dRVXU',
  },
};
