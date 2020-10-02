import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
export default ({ node }) => {
  if (!node || !node.code) {
    return null;
  }
  const { language, code } = node;
  return (
    <SyntaxHighlighter language={language || "text"} style={twilight}>
      {code}
    </SyntaxHighlighter>
  );
};
