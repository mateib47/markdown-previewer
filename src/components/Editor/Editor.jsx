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

 Why learn Haskell
 >Functional languages like it are getting more popular among big companies

 ![Haskell Logo](https://miro.medium.com/max/794/1*WafoBJVtOQKSRljQcOcEsw.png)

  
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
        <i className="fa fa-edit"></i>
        <h1>Editor</h1>
      </div>
      <div className="wrapper">
        <textarea
          name=""
          id="editor"
          cols="60"
          rows="37"
          onChange={handleChange}
          defaultValue={initialText}
        ></textarea>
        <button
          title="Copy to clipboard!"
          onClick={() => {
            navigator.clipboard.writeText(
              document.querySelector("#editor").value
            );
          }}
        >
          <i class="fa fa-clipboard"></i>
        </button>
      </div>
    </div>
  );
};

export default Editor;
