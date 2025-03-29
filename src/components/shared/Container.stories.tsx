import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

const meta = {
  title: 'Shared/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="h-40 w-full bg-blue-100 flex items-center justify-center rounded-md border border-blue-300">
        <p className="text-lg font-medium">Container Content</p>
      </div>
    ),
  },
};

export const WithCustomClass: Story = {
  args: {
    children: (
      <div className="h-40 w-full bg-green-100 flex items-center justify-center rounded-md border border-green-300">
        <p className="text-lg font-medium">Container with Custom Class</p>
      </div>
    ),
    className: 'mt-8 bg-gray-50 py-6 rounded-lg',
  },
};

export const NarrowContainer: Story = {
  args: {
    children: (
      <div className="h-40 w-full bg-purple-100 flex items-center justify-center rounded-md border border-purple-300">
        <p className="text-lg font-medium">Narrow Container</p>
      </div>
    ),
    className: 'max-w-3xl',
  },
};