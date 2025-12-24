import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotificationsNone } from 'react-icons/md';
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen]=React.useState(false);
    const menu=[
      {
        link:'/',
        name:'Home'
      },
      {
        link:'/moviesandshows',
        name:'Movies&Shows'
      },
      {
        link:'/support',
        name:"Support"
      },
      {
        link:"/subscription",
        name:"Subscriptions"
      }]
  return (
    <>
    <div className='flex items-center justify-between  px-4 md:px-[120px] py-[20px] md:py-[30px] z-10 relative'>
      <Link to='/'><div className='flex items-center'>
        <img src={logo} className='w-[32px] h-[32px]'></img>
         <h1>StreamVibe</h1>
      </div>
      </Link>
        <div className='hidden bg-black md:flex items-center justify-between gap-4 py-[10px] px-[10px] rounded-[10px]'>
           {
            menu.map((item,index)=>(
               <Link to={item.link}><p className=''>{item.name}</p></Link>
            ))
            
           }
        </div>
        <div className='hidden md:flex items-center justify-between gap-4'>
            <AiOutlineSearch/>
            <MdNotificationsNone/>
        </div>
        <p className='block md:hidden'>{isMenuOpen ? <IoClose className='text-[28px]' onClick={()=>setIsMenuOpen(!isMenuOpen)}/>:<IoMdMenu className='text-[28px]' onClick={()=>setIsMenuOpen(!isMenuOpen)}/>}</p>
        {isMenuOpen &&<div className='absolute z-12 flex flex-col md:hidden gap-4 bg-black p-8 top-[55px] w-full left-[-10px] min-h-screen'>
          {
             menu.map((item,index)=>(
               <Link to={item.link}><p className=''>{item.name}</p></Link>
            ))
          }
          </div>
}
    </div>
    </>
  )
}

export default Navbar