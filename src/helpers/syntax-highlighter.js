import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const RenderCodeBlock = (snippet) => {
    return (
      <SyntaxHighlighter language="javascript" style={docco} showLineNumbers={true} wrapLines={true}>
        {snippet}
      </SyntaxHighlighter>
    );
  };

  export default RenderCodeBlock; 