import EyeIcon from '@/assets/icons/eye.svg?react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './icon-button';

const meta = {
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {
  args: {
    children: <EyeIcon />,
  },
};
