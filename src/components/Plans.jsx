import React from 'react'

const Plans = () => {
    const plans=[
    {
      head:'Basic Plan',
      desc:"Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      price:'$9.99'
      },
       {
      head:'Standard Plan',
      desc:"Access to a wider selection of movies and shows, including most new releases and exclusive content",
      price:'$12.99'
      },
       {
      head:'Premium Plan',
      desc:"Access to a wider selection of movies and shows, including most new releases and exclusive content",
      price:'$14.99'
      }
  ]
  return (
    <section className='px-4 md:px-[120px] my-24'>
        <h1 className='font-bold text-[38px] text-center md:text-start'>Choose the plan that's right for you</h1>
        <p className='text-[18px] text-gray-600 text-center md:text-start'>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16'>
        {
          plans.map((item,idx)=>(
            <div className='bg-[#1A1A1A] space-y-4 px-[24px] py-[24px] rounded-[10px]'>
              <div><h1 className='font-semibold text-[24px]'>{item.head}</h1></div>
              <p className='text-[18px] text-gray-400'>{item.desc}</p>
              <h1 className='font-semibold text-[40px]'>{item.price}<sup className='text-[18px] teat-gray-600'> month</sup></h1>
              <div className='flex gap-4'>
              <button className='bg-black py-2 px-4 rounded-[10px]'>Start Free Trial</button>
              <button className='bg-[#E50000] text-[18px] font-semibold text-[#FFFFFF] py-2 px-4 rounded-[10px]'>Choose Plan</button>
              </div>
            </div>

          ))

        }
      </div>
      </section>
  )
}

export default Plans