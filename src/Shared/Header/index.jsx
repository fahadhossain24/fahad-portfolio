import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-scroll';


const index = () => {
    const [isMenuShow, setIsMenuShow] = useState(false);
    const [activeNav, setActiveNav] = useState('');


    return (
        <div>
            <div className='xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] mx-auto  h-[70px] fixed z-10 bg-[#050266]'>

                <div className='xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[100%] flex mt-3 text-white xl:justify-between lg:justify-around md:justify-between sm:justify-between items-center mx-auto'>
                    <h2 className='text-3xl font-bold'>F<span className='text-[#ff6d5a] text-4xl'>A</span>H<span className='text-[#ff6d5a] text-4xl'>A</span>D</h2>

                    <ul className={`md:w-[200px] md:absolute xl:static lg:static xl:w-[1024px] lg:w-[768px] md:mt-[480px] sm:mt-[480px] sm:absolute sm:right-0 xl:mt-0 lg:mt-0 text-[#bbb] xl:flex lg:flex gap-2 justify-center text-xl ${isMenuShow ? 'md:block sm:block' : ' md:hidden sm:hidden'} `}>

                        <li className=' p-2 hover:border-b-2 hover:border-b-[#ff6d5a] hover:text-[#ff6d5a] h-[45px]  cursor-pointer'>
                            <Link activeClass='text-[#ff6d5a] h-[50px] cursor-pointer' to="home" spy={true} smooth={true}>Home</Link>
                        </li>

                        <li className='p-2 hover:border-b-2 hover:border-b-[#ff6d5a] hover:text-[#ff6d5a] h-[50px] cursor-pointer'>
                            <Link activeClass=' pt-5  text-[#ff6d5a] h-[50px] cursor-pointer' to="skills" spy={true} smooth={true} duration={700}>Skills</Link>
                        </li>

                        <li className='p-2 hover:border-b-2 hover:border-b-[#ff6d5a] hover:text-[#ff6d5a] h-[50px] cursor-pointer'>
                            <Link activeClass=' text-[#ff6d5a] h-[50px] cursor-pointer' to="services" spy={true} smooth={true} duration={900} >Services</Link>
                        </li>

                        <li className='p-2 hover:border-b-2 hover:border-b-[#ff6d5a] hover:text-[#ff6d5a] h-[50px] cursor-pointer'>
                            <Link activeClass='text-[#ff6d5a] h-[50px] cursor-pointer' to="protfolio" spy={true} smooth={true} duration={1500} >Portfolio</Link>
                        </li>

                        <li className='p-2 hover:border-b-2 hover:border-b-[#ff6d5a] hover:text-[#ff6d5a] h-[50px] cursor-pointer'>
                            <Link activeClass='text-[#ff6d5a] h-[50px] cursor-pointer' to="reviews" spy={true} smooth={true} duration={1800} >Reviews</Link>
                        </li>

                        <li className='p-2 hover:border-b-2 hover:border-b-[#ff6d5a] hover:text-[#ff6d5a] h-[50px] cursor-pointer'>
                            <Link activeClass=' text-[#ff6d5a] h-[50px] cursor-pointer' to="exprience" spy={true} smooth={true} duration={1800} >Exprience</Link>
                        </li>


                        <li className='p-2 hover:border-b-2 hover:border-b-[#ff6d5a] hover:text-[#ff6d5a] h-[50px] cursor-pointer'>
                            <Link activeClass=' text-[#ff6d5a] h-[50px] cursor-pointer' to="achivement" spy={true} smooth={true} duration={1800} >Achivement</Link>
                        </li>

                        {/* <li className='p-2 hover:border-b-2 hover:border-b-[#ff6d5a] hover:text-[#ff6d5a] h-[50px] cursor-pointer'>
                            <Link activeClass=' text-[#ff6d5a] h-[50px] cursor-pointer' to="about" spy={true} smooth={true} duration={1500} >About Me</Link>
                        </li> */}

                        <li className='p-2 hover:border-b-2 hover:border-b-[#ff6d5a] hover:text-[#ff6d5a] h-[50px] cursor-pointer'>
                            <Link activeClass=' text-[#ff6d5a] h-[50px] cursor-pointer' to="reachMe" spy={true} smooth={true} duration={2100}>Reach Me</Link>
                        </li>
                    </ul>

                    <Link to='reachMe' spy={true} smooth={true} duration={1200} className='bg-[#ff6d5a] py-2 px-6 text-lg font-medium rounded-xl md:hidden sm:hidden xl:block lg:block cursor-pointer'>Hire Me</Link>
                    <p onClick={() => setIsMenuShow(!isMenuShow)} className='text-[#ff6d5a] py-2 px-2 text-5xl cursor-pointer md:block xl:hidden lg:hidden'><Icon icon="uil:bars" /></p>
                </div>
            </div>
        </div>
    );
};

export default index;