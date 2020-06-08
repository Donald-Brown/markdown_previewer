import React from "react";
import './App.css';
import marked from "marked";
import initMarkUp from './components/initMarkUp';

class App extends React.Component {
  state = {
    text: initMarkUp,
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { text } = this.state;

    const markdown = marked(text, {breaks: true});

    return (
      <div>
        <h2 className="text-center m-4">Markdown Preview</h2>
        <div className="row">
          <div className="col-md-6">
            <h5 className="text-center">Enter Markdown Text Here:</h5>
            <textarea
              className="editor form-control"
              id="editor"
              value={text}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="col-md-6">
            <h5 className="text-center">Preview Markdown Here:</h5>
            <div className="preview p-2 rounded" id="preview" dangerouslySetInnerHTML={{__html: markdown}}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
