import "./editor.scss";
import { useEffect } from "react";

const Editor = ({ setText }) => {
  const initialText = `# Welcome to React Markdown Previewer!

  ## Visualise here your beautiful markdown
  ### This project is part of [freeCodeCamp](https://www.freecodecamp.org/learn/) Curriculum!

  **Haskell** is my favourite programming language (_sarcasm_)
  - It is
    -Functional
    -Its short and concise
    -It has fun stuff like functors
    -You can do parsing with parsec

  Here is a function that calculates the length of a list in haskell:
\`\`\`
    myLen :: [a] -> Int
    myLen [] = 0
    myLen (x:xs) = 1+ myLen xs
\`\`\`

 You can use \`import Test.QuickCheck\` to import the haskell testing library.

 Learn Haskell
 >There is no reason to not learn it

 ![Haskell Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haskell-Logo.svg/320px-Haskell-Logo.svg.png)

  
  `;

  const handleChange = (event) => {
    setText(event.target.value);
  };
  useEffect(() => {
    setText(initialText);
  }, []);

  return (
    <div className="editor">
      <div className="top">
        <i class="fa fa-edit"></i>
        <h1>Editor</h1>
      </div>
      <textarea
        name=""
        id="editor"
        cols="60"
        rows="27"
        onChange={handleChange}
        defaultValue={initialText}
      ></textarea>
    </div>
  );
};

export default Editor;
