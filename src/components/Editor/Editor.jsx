import './editor.scss';


const Editor = ({text, setText}) => {

    const handleChange = (event) => {
        setText(event.target.value);
    } 


  return (
    <div className="editor">
      <textarea name="" id="editor" cols="70" rows="27" onChange={handleChange}></textarea>
    </div>
  );
};

export default Editor;
