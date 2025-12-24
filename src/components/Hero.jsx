import React from 'react'
import hero from '../assests/hero.png'
import { BiSolidRightArrow } from "react-icons/bi";
import homePageLogo from '../assests/homePageLogo.png'
const Hero = () => {
  return (
    <div className='relative min-h-screen ' >
        <img src={hero} alt='hero' className='absolute top-[-100px] w-[390px] md:w-full  h-[500px] md:h-[600px] z-5'></img>
        <img src={homePageLogo} alt='herologo' className='absolute left-[23%] md:left-[38%] top-[10%] md:top-[0%] w-[200px] h-[200px]  md:w-[370px] md:h-[370px]'></img>
        <div className='absolute top-[300px] md:top-[350px] flex flex-col items-center gap-2 md:gap-4 px-[10px] md:px-[200px]'>
        <h1 className='font-bold text-[32px] md:text-[58px] text-center'>The Best Streaming Experience</h1>
        <p className='text-[18px] text-gray-600 text-center'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
       <button className='flex items-center gap-2 bg-[#E50000] text-[18px] font-semibold text-[#FFFFFF] py-[18px] px-[24px] rounded-[8px]'><BiSolidRightArrow className='text-[24px]'/>Start Watching Now</button>
        </div>
    </div>
  )
}

export default Hero
// /* Card */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 50px;
// gap: 30px;

// width: 512.33px;
// height: 283px;

// background: linear-gradient(221.52deg, rgba(229, 0, 0, 0.5) -208.03%, rgba(229, 0, 0, 0) 41.32%), #0F0F0F;
// /* Black/15 */
// border: 1px solid #262626;
// border-radius: 12px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 1;
