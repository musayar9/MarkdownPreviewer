import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMarkdown } from '../Redux/markdownsPreviewerSlice'
import {marked} from 'marked'



function MarkdownPreview() {

    const currentMarkdown =useSelector((state)=>state.markdowns.currentMarkdown)
    const showMarkdown =useSelector((state)=>state.markdowns.showMarkdown)

    const dispatch = useDispatch()

    const parsedText = marked(currentMarkdown);
    const processedText = { __html: parsedText };
    console.log(processedText);


  return (
    <div className='container  mt-5'>
        <div className='flex  items-center justify-center space-x-1 md:space-x-2  '>
            <textarea className='w-2/5 bg-[#FFDD67] drop-shadow-3xl font-mono p-4 m-6 max-w-[500px] h-[600px] md:h-[500px] text-panel-right focus:outline-none' cols="30" rows="5" value={currentMarkdown } readOnly={showMarkdown} onChange={(e)=>dispatch(setMarkdown(e.target.value))} >

            </textarea>
            <div className='w-2/5 bg-[#FFDD67] drop-shadow-3xl font-mono p-4 m-6 max-w-[500px] h-[600px] md:h-[500px] text-clip overflow-y-scroll md:overflow-hidden text-panel-left' dangerouslySetInnerHTML={processedText}></div>


        </div>

    
    
    </div>
  )
}

export default MarkdownPreview
