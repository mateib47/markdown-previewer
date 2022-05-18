import React from "react";

const Editor = ({text, setText}) => {

    const handleChange = (event) => {
        setText(event.target.value);
        console.log(event.target.value);
    } 


  return (
    <div className="editor">
      <textarea name="" id="editor" cols="30" rows="10" onChange={handleChange}></textarea>
    </div>
  );
};

export default Editor;
