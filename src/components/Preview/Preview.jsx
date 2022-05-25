import "./preview.scss";
import { marked } from "marked";
//sanitize input

const Preview = ({ text }) => {
  marked.setOptions({
    breaks: true,
  });
  return (
    <div className="preview">
      <div className="top">
        <i className="fa fa-file-code-o"></i>
        <h1>Preview</h1>
      </div>
      <div className="wrapper">
        <div
          className="textBox"
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
        ></div>
      </div>
    </div>
  );
};

export default Preview;
