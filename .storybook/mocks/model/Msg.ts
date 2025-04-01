interface Message {
  id: string;
  author: string;
  content: string;
  side: "left" | "right";
  icon: string;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
}

export default Message;