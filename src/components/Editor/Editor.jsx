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

 ![Haskell Logo](data:image/png;base64,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)

  
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
