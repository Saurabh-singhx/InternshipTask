import React, { useEffect, useState } from 'react'
import backgroundimg from './Image/Background.png'
import logo from './Image/Frame.png'
import menu from './Image/menu.png'

function FirstPart() {

    const [menuclick, setMenuclick] = useState(true)
    const changemenu = () => {
        setMenuclick(!menuclick);
    };
    return (
        <div className='h-screen w-screen'>
            <div className=' h-screen w-screen absolute'>
                <img src={backgroundimg} alt="" className="absolute w-screen h-full z-[-1] backdrop-brightness-95" />

                {/* Navbar */}
                <div className="w-full z-10 mt-[59px] flex px-[55px] justify-between h-[52px] gap-4 Nav">
                    <img src={logo} alt="" className='w-[205.6px] h-[52.15px] logoimg' />
                    <div className=' w-[924px] flex items-center justify-between'>
                        <div className='w-[45%] flex justify-between items-center h-[53px] px-10 font-semibold bg-white rounded-xl NavBar'>
                            <a href="">Home</a>
                            <a href="">Services</a>
                            <a href="">Blog</a>
                            <a href="">Contract</a>
                        </div>
                        <div className='w-[50%] flex px-4 gap-6 h-[40px] justify-end mr-5 NavButtons'>
                            <button className='bg-green-300 py-2 px-8 rounded-md font-bold text-green-600 transition duration-300 hover:bg-green-400 hover:text-white Btn'>
                                Login
                            </button>
                            <button className='bg-green-500 py-2 px-8 rounded-md font-bold transition duration-300 hover:bg-green-600 Btn2'>
                                Book Demo
                            </button>
                        </div>
                    </div>

                    {/* For smaller width */}
                    <div
                        onClick={changemenu}
                        className={`hidden menu h-12 w-16 shrink-0 z-50 `}>
                        <img src={menu} alt="" className='h-12 w-16' />
                    </div>

                    <div
                        className={`absolute top-14 right-0 w-[25%] h-80 bg-white shadow-lg transform ${menuclick ? "translate-x-full":"translate-x-0"
                            } transition-transform duration-300 ease-in-out`}
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg font-semibold">
                            <a href="#" className="hover:text-green-500">Home</a>
                            <a href="#" className="hover:text-green-500">Services</a>
                            <a href="#" className="hover:text-green-500">Blog</a>
                            <a href="#" className="hover:text-green-500">Contact</a>
                        </div>
                    </div>
                </div>

                {/* main */}
                <div className=' w-full h-[80%] mt-8 flex items-center justify-center'>
                    <div className='w-[1017px] h-[345px] flex flex-col items-center gap-8'>
                        <p className='p-1 text-white bg-black w-56 rounded-2xl'>👋Lets save our environment</p>
                        <p className='text-6xl font-bold text1'>Streamline Your Sustainability</p>
                        <div className='text-6xl font-bold flex gap-3'>
                            <span className='text-6xl font-bold text1'>Reporting With</span>
                            <span className='text-green-600 text1'>CARBON CRUNCH</span>
                        </div>
                        <div className='flex gap-2 font-semibold'>
                            <span className='text-green-600 text2'>95%</span>
                            <span className='text3'>Accurate Carbon Calculations Trusted by Industry Leaders</span>
                        </div>
                        <div className='flex gap-10'>
                            <button className='bg-white px-6 py-2 rounded-md shadow-md shadow-yellow-200 transition duration-300 hover:bg-gray-200'>
                                Free Calculator
                            </button>
                            <button className='bg-green-500 px-6 py-2 rounded-md transition duration-300 hover:bg-green-600'>
                                Book Demo
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FirstPart
