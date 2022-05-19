import './preview.scss';
import { marked } from 'marked';


const Preview = ({text}) => {
  return (
    <div className='preview'>
        <div className='textBox' id='preview' dangerouslySetInnerHTML={{__html: marked.parse(text)}}></div>
                {/* <textarea name="" id="preview" cols="30" rows="10" ></textarea> */}

    </div>
  )
}

export default Preview