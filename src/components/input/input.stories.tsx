import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {
  args: {
    placeholder: 'Basic usage',
  },
};

export const Sizes: Story = {
  args: {
    placeholder: 'Sizes',
    size: 'large',
  },
};

export const Variants: Story = {
  args: {
    placeholder: 'Variants',
    variant: 'filled',
  },
};

export const Label: Story = {
  args: {
    label: 'Label',
    placeholder: 'Label',
    variant: 'underlined',
  },
};

export const Error: Story = {
  args: {
    label: 'Label',
    placeholder: 'Label',
    variant: 'underlined',
    error: 'Error',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Password',
    variant: 'outlined',
    error: 'Error',
    type: 'password',
  },
};
