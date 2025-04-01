"use client";

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { WithProviders, WithDarkTheme } from "../../../decorators";

const meta = {
  title: "Mocks/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [WithProviders],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
};

export const Dark: Story = {
  args: {
    children: "Dark Button",
    variant: "default",
  },
  decorators: [WithDarkTheme],
};