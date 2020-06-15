import React from 'react';
import JSCodeSnippet from './JSCodeSnippet'
import PythonCodeSnippet from './PythonCodeSnippet'
import withNightMode from './withNightMode'

function App() {

  const jsCode = (<code>
    {`var raven1;`}<br/>

    {`raven1 = function() {`}<br/>
    &nbsp;{`return console.log("I am a raven");`}<br/>
    {`};`}<br/>
  </code>)

  const pyCode = (<code>
    {`def raven1:`}<br/>
    &nbsp;{`print("I am a raven")`}<br/>
  </code>)

  const PythonCodeSnippetWithNightMode = withNightMode(PythonCodeSnippet)
  const JSCodeSnippetWithNightMode = withNightMode(JSCodeSnippet)

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-offset-3">
          <h2>Browse Code</h2>
          <JSCodeSnippet codeSample={jsCode} />
          <JSCodeSnippetWithNightMode codeSample={jsCode} />
          <PythonCodeSnippet codeSample={pyCode} />
          <PythonCodeSnippetWithNightMode codeSample={pyCode} />
        </div>
      </div>
    </div>
  );
}

export default App;
