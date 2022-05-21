import "./editor.scss";
import { useEffect } from "react";

const Editor = ({ setText }) => {
  const initialText = `# Welcome to React Markdown Previewer!
  ## Visualise here your beautiful markdown
  ### This project is part of [freeCodeCamp](https://www.freecodecamp.org/learn/) Curriculum!

  Here is a function that calculates the length of a list in haskell:
  \`\`\`
    myLen :: [a] -> Int
    myLen [] = 0
    myLen (x:xs) = 1+ myLen xs
\`\`\`
  
  `;
  const handleChange = (event) => {
    setText(event.target.value);
  };
  useEffect(() => {
    setText(initialText);
  }, []);

  return (
    <div className="editor">
      <div className="top">Editor</div>
      <textarea name="" id="editor" cols="60" rows="27" onChange={handleChange} defaultValue={initialText}>
      </textarea>
    </div>
  );
};

export default Editor;
