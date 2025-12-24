import React from 'react'
const Home=['Categories','Devices','price','FAQ']
const Movies=['Gernes','Trending','New Release','Popular']
const shows=['Gernes','Trending','New Release','Popular']
const Support=['Contact Us']
const subscription=['Plans','features']
const Footer = () => {
  return (
    <div className='mx-4 md:mx-[120px] py-[20px] '>
    <div className='grid grid-cols-2 md:flex md:justify-between py-12'>
        <section className='flex flex-col gap-2'>
        <h1>Home</h1>
        <div className=''>
        {
            Home.map((item,idx)=>(
                <h1 key={idx} className='text-gray-400'>{item}</h1>
            ))
        }
    </div>
    </section>
    <section className='flex flex-col gap-2'>
        <h1>Movies</h1>
        <div className=''>
        {
            Movies.map((item,idx)=>(
                <h1 key={idx} className='text-gray-400'>{item}</h1>
            ))
        }

    </div>
    </section>
    <section className='flex flex-col gap-2'>
        <h1>Shows</h1>
        <div className=''>
        {
            shows.map((item,idx)=>(
                <h1 key={idx} className='text-gray-400'>{item}</h1>
            ))
        }

    </div>
    </section>
    <section className='flex flex-col gap-2'>
        <h1>Support</h1>
        <div className=''>
        {
            Support.map((item,idx)=>(
                <h1 key={idx} className='text-gray-400'>{item}</h1>
            ))
        }

    </div>
    </section>
    <section className='flex flex-col gap-2'>
        <h1>Subscription</h1>
        <div className=''>
        {
            subscription.map((item,idx)=>(
                <h1 key={idx} className='text-gray-400'>{item}</h1>
            ))
        }

    </div>
    </section>
    <section className='flex flex-col gap-2'>
        <h1>Contact with Us</h1>
        <div className=''>
        {
            Home.map((item,idx)=>(
                <h1 key={idx} className='text-gray-400'>{item}</h1>
            ))
        }

    </div>
    </section>
    </div>
    <div className='border-t-[1px] border-t-gray-400 flex justify-between py-4'>
        <h1 className='text-gray-400'>@2023 streamvib, All Rights Reserved</h1>
        <div className='flex items-center gap-4 text-gray-400'>
            <p>Terms Of use</p>
            <p>Privacy policy</p>
            <p>Cookie policy</p>
        </div>
    </div>
    </div>
    
    
  )
}

export default Footer