import './main.scss';
import Editor from './Editor/Editor';
import Preview from './Preview/Preview';
import { useState } from 'react';

const Main = () => {
  const [text, setText] = useState("")

  return (
    <div className='main'>
      <Editor setText={setText} />
      <Preview text={text} />
    </div>
  )
}

export default Main