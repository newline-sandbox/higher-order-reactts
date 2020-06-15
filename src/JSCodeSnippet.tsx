import React from 'react';

interface JSCodeSnippetProps {
  codeSample: object
}

function JSCodeSnippet(props: JSCodeSnippetProps) {
  return (
    <div>
      <h3>JavaScript Code Example</h3>
      {props.codeSample}
    </div>
  );
}

export default JSCodeSnippet;
