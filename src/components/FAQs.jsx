import React, { useState } from 'react'
import AskQuestion from './AskQuestion';

const FAQs = () => {
    const [openquest,setOpenquest]=useState(false);
    const Faq=[
        {
            quest:'What is StreamVibe?',
            ans:'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
        },
         {
            quest:'How do I sign up for StreamVibe?',
            ans:'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
        },
         {
            quest:'How much does StreamVibe cost?',
            ans:'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
        },
         {
            quest:'What is the StreamVibe free trial?',
            ans:'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
        },
         {
            quest:'What is the StreamVibe free trial?',
            ans:'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
        },
         {
            quest:'What is the StreamVibe free trial?',
            ans:'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
        },
         {
            quest:'What is the StreamVibe free trial?',
            ans:'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
        },
         {
            quest:'What is the StreamVibe free trial?',
            ans:'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
        }
    ]
  return (
    <div className='relative mx-4 md:mx-[120px] my-16 z-10'>
        <div className='flex flex-col md:flex-row items-center justify-between mb-16'>
          <div className=''>
           <h1 className='font-bold text-[38px] text-center md:text-start'>Explore our wide variety of categories</h1>
           <p className='text-[18px] text-gray-600 text-center md:text-start'>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
          </div>
          <button  className='bg-[#E50000] text-[18px] font-semibold text-[#FFFFFF] px-[24px] py-[18px] rounded-[8px]' onClick={()=>setOpenquest(true)}>Ask a Queation</button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 '>
            { Faq.map((item,idx)=>(
          <details  key={idx} className='group  flex flex-col cursor-pointer'>
            {item.ans}
            <summary className='list-none'>
            <div className='flex items-center  justify-between'>
             <p className='flex items-center gap-4 text-[22px] font-medium'> <span className='bg-gray-600 px-4 py-1 rounded-[8px]'>0{idx}</span>{item.quest}</p>
             <p className='text-[24px]'>+</p></div>
           </summary>
          </details>
            ))

        }
        </div>
        {
            openquest&&<div className='fixed flex justify-center  inset-0 bg-black bg-opacity-50 backdrop-blur-md w-full  min-h-screen z-50'>
                <p className='mt-4' onClick={()=>setOpenquest(false)}>close</p>
                <AskQuestion/>
                </div>
        }
    </div>
  )
}

export default FAQs