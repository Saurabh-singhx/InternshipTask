import React, { useEffect, useRef, useState } from 'react'
function SecondPart() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
    return (
        <div className='h-screen bg-neutral-800 flex items-center justify-center w-screen secondmain'>
            <div className=' h-[80%] w-[80%] flex'>
                <div className='bg-[#C4C4C4] w-[50%]'></div>
                <div className=' w-[50%] flex flex-col items-center justify-center py-4'>

                    <div className='bg-[#28B30E] h-44 w-80 flex flex-col gap-2 p-2 rounded-lg z-30 mt-20 div1'>
                        <div className='text-5xl font-bold div1htext'>3X</div>
                        <div className='text-2xl div1text'>ESG High Performers Deliver A High Total Shareholder Return</div>
                    </div>



                    <div className={`bg-[#3A3A3A] text-white w-80 p-2 rounded-lg -translate-y-6 z-20 flex flex-col gap-2 h-32 transition-transform ease-in-out duration-700 ${scrollY<533?"-translate-x-0":"-translate-x-60 small"} div2`}>

                        <div className='text-4xl font-bold div2htext'>98%</div>
                        <div className='text-2xl font-light div2text'>Of CEOs Agree Sustainability is Their Responsibility</div>
                    </div>



                    <div className='bg-[#2D2D2D] w-56 text-white flex items-end flex-col px-4 py-2 text-right -translate-x-16 -translate-y-14 z-10 rounded-lg gap-x-24 h-32 div3'>
                        <div className='text-4xl font-bold div3htext'>18%</div>
                        <div className='div3text'>Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050</div>
                    </div>



                    <div className={`bg-[#FFFFFF] w-80 text-[#28B30E] px-4 py-2 rounded-lg font-normal flex flex-col gap-2 h-36 -translate-y-20 transition-transform ease-in-out duration-1000 ${scrollY<533?"-translate-x-0":"-translate-x-64 small"} div4`} >
                        <div className='text-4xl font-bold div4htext'>37%</div>
                        <div className='text-left div4text'>Of The World's Largest Companies Have A Public Net Zero Target Nearly All Are Off Track</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondPart