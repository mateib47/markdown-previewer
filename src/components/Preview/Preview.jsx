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
        <i class="fa fa-file-code-o"></i>
        <h1>Preview</h1>
      </div>
      <div
        className="textBox"
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
      ></div>
    </div>
  );
};

export default Preview;
