import React from 'react'
import Navbar from '../components/Navbar'
import FAQs from '../components/FAQs'
import FreeTrial from '../components/FreeTrial'
import support from '../assests/suport.png'
import Footer from '../components/Footer'
const SupportPage = () => {
  return (
    <div>
      <Navbar/>
      <section className='mx-4 md:mx-[100px] flex flex-col md:flex-row gap-8'>
        <div className='space-y-4'>
          <h1 className='text-[48px] font-bold'>Welcome to our support page!</h1>
          <p className='text-[18px] text-gray-600'>We're here to help you with any problems you may be having with our product.</p>
          <img src={support} className='w-[500px] h-[400px]'></img>
        </div>
        <div className='bg-black space-y-8 rounded-[10px] border border-gray-700 p-2 md:p-8'>
          <div className='flex gap-4'>
            <label className='flex flex-col gap-2' >
              First Name
              <input type='text' placeholder='first name' className='p-2 w-full md:w-[400px] h-[60px] bg-[#1E1E1E] rounded-[10px]'></input>
            </label>
            <label className='flex flex-col gap-2' >
              Last Name
              <input type='text' placeholder='last name' className='p-2 w-full md:w-[400px]  h-[60px]  bg-[#1E1E1E] rounded-[10px]'></input>
            </label>
          </div>
          <div className='flex gap-4'>
            <label className='flex flex-col gap-2' >
              Email
              <input type='text' placeholder='Email' className='p-2 w-full md:w-[400px]  h-[60px]  bg-[#1E1E1E] rounded-[10px]'></input>
            </label>
            <label className='flex flex-col gap-2' >
              Phone number
              <input type='text' placeholder='phone number' className='p-2 w-full md:w-[400px] h-[60px]  bg-[#1E1E1E] rounded-[10px]'></input>
            </label>
          </div>
          <label className='flex flex-col gap-2'>
            Meassage
            <textarea placeholder='Message' className='w-full h-[163px] p-2 bg-[#1E1E1E] rounded-[10px]'></textarea>
          </label>
          <div className='flex md:flex-row flex-col justify-between items-center'>
            <label className='text-gray-700'>
              <input type='checkbox' className='bg-[#1E1E1E] rounded-[10px] mr-2'></input>
              I agree with Terms of Use and Privacy Policy
            </label>
             <button className='bg-[#E50000]  font-semibold text-[#FFFFFF] py-[8px] px-[10px] w-full md:w-[140px] rounded-[8px]'>Start a Free Trial</button>
          </div>

        </div>
      </section>
      <FAQs/>
      <FreeTrial/>
      <Footer/>
    </div>
  )
}

export default SupportPage