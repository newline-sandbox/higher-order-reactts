import React from 'react';

interface PythonCodeSnippetProps {
  codeSample: object
}

function PythonCodeSnippet(props: PythonCodeSnippetProps) {
  return (
    <div>
      <h3>Python Code Example</h3>
      {props.codeSample}
    </div>
  );
}

export default PythonCodeSnippet;
