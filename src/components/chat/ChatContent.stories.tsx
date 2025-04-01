"use client"

// Regular imports first
import React from "react"
import { NextIntlClientProvider } from "next-intl"
import { ThemeProvider } from "next-themes"
import messagesEN from "../../../src/messages/en.json"
// Then type imports
import type { Meta, StoryObj } from "@storybook/react"
// Components
import ChatContent from "./ChatContent"

// Import decorators from the centralized file
import { WithProviders, WithDarkTheme } from "../../../.storybook/decorators"

// Create a decorator that mocks the useChat hook and pathname
const MockChatDecorator = (Story: React.ComponentType) => {
  // Mock localStorage
  if (typeof window !== "undefined") {
    // Mock messages in localStorage
    const mockMessages = [
      {
        id: "mocked-id-1",
        author: "User",
        content: "Hello, how are you?",
        side: "right",
        icon: "👤",
        projectId: "mocked-project-id",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "mocked-id-2",
        author: "Assistant",
        content: "I'm doing well, thank you for asking!",
        side: "left",
        icon: "👤",
        projectId: "mocked-project-id",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
    
    // Set mock data in localStorage
    localStorage.setItem("messages", JSON.stringify(mockMessages))
    localStorage.setItem("chatId", "mocked-chat-id")
  }
  
  return (
    <div className="p-4 border rounded" style={{ maxHeight: "600px", overflow: "auto" }}>
      <Story />
    </div>
  )
}

// Create empty messages decorator
const EmptyMessagesDecorator = (Story: React.ComponentType) => {
  // Clear messages in localStorage
  if (typeof window !== "undefined") {
    localStorage.removeItem("messages")
  }
  
  return (
    <div className="p-4 border rounded" style={{ maxHeight: "600px", overflow: "auto" }}>
      <Story />
    </div>
  )
}

const meta = {
  title: "Components/Chat/ChatContent",
  component: ChatContent,
  parameters: {
    layout: "padded",
    nextjs: {
      navigation: {
        pathname: "/chat",
      },
    },
  },
  tags: ["autodocs"],
  // Using provided decorators from .storybook/decorators.tsx
  decorators: [
    (Story) => {
      // Mock pathname without using jest
      // This runs in the browser so we can't use jest.mock
      // Instead, we'll use the nextjs parameter for navigation above
      return <Story />;
    }
  ],
} satisfies Meta<typeof ChatContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [WithProviders, MockChatDecorator],
}

export const Empty: Story = {
  decorators: [WithProviders, EmptyMessagesDecorator],
}

export const DarkMode: Story = {
  decorators: [WithDarkTheme, MockChatDecorator],
}