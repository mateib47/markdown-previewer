import "./main.scss";
import Editor from "./Editor/Editor";
import Preview from "./Preview/Preview";
import { useState } from "react";

const Main = () => {
  const [text, setText] = useState("");

  return (
    <div className="main">
      <div className="left">
        <Editor setText={setText} />
      </div>
      <div className="right">
        <Preview text={text} />
      </div>
    </div>
  );
};

export default Main;
