import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { marked } from 'marked';
import 'bootstrap/dist/css/bootstrap.css';

//import 'bootstrap';

const initialState = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
\/\/ this is multi-line code:

a=b;
b=c;
c=d;
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

class App extends React.Component{
  state = {
    text: initialState
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  
  render(){
    const { text } = this.state;
    const markdown = marked.parse(text, {breaks: true});
    
    return(
      <div>
        <h2 className="text-center mt-4">Markdown preview</h2>
        <div className="row">
          <div className="col-6">          
            <h6 className="text-center">Enter your markdown</h6>
            <textarea className="form-control p-2" id="editor" value={text} onChange={this.handleChange}/>
          </div>
          <div className="col-6">
            <h6 className="text-center">See the result</h6>
            <div id="preview" className="preview rounded p-2" dangerouslySetInnerHTML={{__html: markdown}}/>
          </div>
        </div>
      </div>
    );
  }
}

const container = document.getElementById('app');
ReactDOM.render(<App/>, container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
