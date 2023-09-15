import React from 'react';
import './module.home.css'
import bigImg from '../../images/hero_img.png';
import { Icon } from '@iconify/react';

const Home = () => {
    return (
        <div className='bg-[#09072d] bg-gradient-to-br from-[#0c0b25] via-[#0c0b25] to-[#050266]'>
            <div className=''>
                <div className='w-[1280px] mx-auto flex text-white justify-between items-center  h-[70px]'>
                    <h2 className='text-3xl font-bold'>F<span className='text-[#ff6d5a] text-4xl'>A</span>H<span className='text-[#ff6d5a] text-4xl'>A</span>D</h2>
                    <ul className='text-[#bbb] flex gap-5 justify-center text-xl '>
                        <li className='p-2  border-b-2 border-b-[#ff6d5a] text-[#ff6d5a] hover:border-b-2 hover:border-b-[#ff6d5a] hover:text-[#ff6d5a] h-[50px] transition-all'>Home</li>
                        <li className='p-2 hover:border-b-2 hover:border-b-[#ff6d5a] hover:text-[#ff6d5a] h-[50px] transition-all'>About Me</li>
                        <li className='p-2 hover:border-b-2 hover:border-b-[#ff6d5a] hover:text-[#ff6d5a] h-[50px] transition-all'>Services</li>
                        <li className='p-2 hover:border-b-2 hover:border-b-[#ff6d5a] hover:text-[#ff6d5a] h-[50px] transition-all'>Protfolio</li>
                        <li className='p-2 hover:border-b-2 hover:border-b-[#ff6d5a] hover:text-[#ff6d5a] h-[50px] transition-all'>Reviews</li>
                        <li className='p-2 hover:border-b-2 hover:border-b-[#ff6d5a] hover:text-[#ff6d5a] h-[50px] transition-all'>Get In Touch</li>
                    </ul>
                    <button className='bg-[#ff6d5a] py-2 px-6 text-lg font-medium rounded-xl'>Hire Me</button>
                </div>
            </div>

            <div className='xl:w-[1280px] lg:w-[1024px] md:w-[768px] h-[650px] sm:w-[500px] mx-auto xl:relative'>
                <div className='xl:w-[50%] lg:w-[65%] md:w-[75%] sm:w-[95%] mx-auto p-8 my-radial-gradient rounded-full'>
                    <img src={bigImg} alt="" className='w-[70%] ml-[90px]' />
                </div>
                <div>
                    <h1 className='text-[#afadd3] text-7xl text-center mt-[-130px] font-bold'>Fahad Hossain</h1>
                    <p className='text-[#aaa] text-center text-2xl font-semibold'>Do you have a project? <span className='text-[#ff6d5a]'>Let's Talk</span></p>
                </div>
            </div>



            <div className='xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[500px] mx-auto flex xl:justify-between lg:justify-evenly md:justify-around sm:justify-center sm:gap-2 xl:absolute top-[190px] right-0 left-0'>
                <div>
                    <div className='bg-gradient-to-r from-[#09091b] to-[#0c0961] w-[230px] hover:w-[250px]  transition-all p-2 rounded-tr-full rounded-br-full'>
                        <h2 className='text-[#ff6d5a] font-medium text-lg'>Web Developer (MERN)</h2>
                        <p className='text-[#aaa] text-md'>Based in Bangladesh</p>
                    </div>
                    <div className='bg-gradient-to-r from-[#09091b] to-[#0c0961] w-[230px] hover:w-[250px] transition-all p-2 rounded-tr-full rounded-br-full mt-11'>
                        <h2 className='text-[#969595] font-medium text-xl'>Say hello to</h2>
                        <p className='text-[#e2e1e1] text-md font-normal'>fahadhossaim24@gmail.com</p>
                    </div>
                    <div className='flex gap-4 w-[250px] text-3xl mt-11 text-[#47449e] '>
                        <a href='#' className='hover:text-[#ff6d5a] hover:text-4xl transition-all w-[15%]'><Icon icon="line-md:facebook" /></a>
                        <a href='#' className='hover:text-[#ff6d5a] hover:text-4xl transition-all w-[15%]'><Icon icon="line-md:linkedin" /></a>
                        <a href='#' className='hover:text-[#ff6d5a] hover:text-4xl transition-all w-[15%]'><Icon icon="line-md:twitter" /></a>
                        <a href='#' className='hover:text-[#ff6d5a] hover:text-4xl transition-all w-[15%]'><Icon icon="line-md:github-loop" /></a>
                    </div>
                </div>
                <div>
                    <div className='w-[160px] mt- text-right border-b-[1px] border-b-[#342d5c] hover:border-b-[#ff6d5a] hover:scale-x-110 transition-all'>
                        <h2 className='text-white text-3xl font-bold'>100%</h2>
                        <p className='text-[#aaa] text-medium text-xl'>Client Satisfaction</p>
                        <br />
                    </div>
                    <div className='w-[160px] mt- text-right border-b-[1px] border-b-[#342d5c] hover:border-b-[#ff6d5a] hover:scale-x-110 transition-all'>
                        <h2 className='text-white text-3xl font-bold'>12+</h2>
                        <p className='text-[#aaa] text-medium text-xl'>Project Done</p>
                        <br />
                    </div>
                    <div className='w-[160px] mt- text-right border-b-[1px] border-b-[#342d5c] hover:border-b-[#ff6d5a] hover:scale-x-110 transition-all'>
                        <h2 className='text-white text-3xl font-bold'>2+</h2>
                        <p className='text-[#aaa] text-medium text-xl'>Experience</p>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;