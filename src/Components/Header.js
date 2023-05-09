import React from 'react'
import { useDispatch } from 'react-redux'
import { showMarkdown } from '../Redux/markdownsPreviewerSlice'

function Header() {
    const dispatch = useDispatch()
  return (

        <div className=" w-full h-24 flex items-center justify-center">
           
        <button className='absolute w-[50px] h-[50px]  md:right-8 top-3 m-[20px]
         bg-[#FFDD67] flex  items-center justify-center text-4xl font-bold drop-shadow-3xl hover:drop-shadow-4xl
         hover:transition-all hover:ease-in-out duration-300 hover:cursor-pointer
         ' onClick={()=>dispatch(showMarkdown())}>?</button>
          <h1 className='text-mono text-3xl mt-[140px] md:mt-[100px] font-bold leading-6'>Markdown Preview</h1>
        </div>
   
    
  )
}

export default Header
