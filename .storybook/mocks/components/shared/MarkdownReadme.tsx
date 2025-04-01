import React from "react";

interface MarkdownReadmeProps {
  markdown: string;
  className?: string;
}

const MarkdownReadme: React.FC<MarkdownReadmeProps> = ({ markdown, className }) => {
  return (
    <div className={className}>
      <div dangerouslySetInnerHTML={{ __html: `<pre>${markdown}</pre>` }} />
    </div>
  );
};

export default MarkdownReadme;