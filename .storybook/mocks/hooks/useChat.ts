"use client";

export default function useChat() {
  return {
    chatId: "mock-chat-id",
    messages: [
      {
        id: "1",
        author: "User",
        content: "Hello, this is a test message",
        side: "right",
        icon: "👤",
        projectId: "mock-project-id",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        author: "Assistant",
        content: "Hi! This is a mock response from the assistant.",
        side: "left",
        icon: "👤", 
        projectId: "mock-project-id",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    isLoading: false,
    addMessage: (content: string) => console.log("Mock addMessage called with: ", content),
    clearMessages: () => console.log("Mock clearMessages called"),
    forceUpdate: 0,
  };
}