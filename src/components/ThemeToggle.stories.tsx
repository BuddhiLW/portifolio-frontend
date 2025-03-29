'use client';

import type { Meta, StoryObj } from '@storybook/react';
import ThemeToggle from './ThemeToggle';
import { ThemeProvider } from 'next-themes';

// Decorator to provide the theme context
const ThemeDecorator = (Story: React.ComponentType) => (
  <ThemeProvider attribute="class" defaultTheme="light">
    <Story />
  </ThemeProvider>
);

const meta = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [ThemeDecorator],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};