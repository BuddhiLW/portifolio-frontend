import React from "react";

const EmptyContent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <h3 className="text-lg font-semibold mb-2">No messages yet</h3>
      <p className="text-gray-500 dark:text-gray-400">
        Start a conversation by typing a message below.
      </p>
    </div>
  );
};

export default EmptyContent;