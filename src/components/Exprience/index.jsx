import React from 'react';
import universe from '../../images/exprience-logo/universe.png';
import moonit from '../../images/exprience-logo/moonit.png';
import ictob from '../../images/exprience-logo/ictob.png';

const Exprience = () => {
    return (
        <div id='exprience' className='xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[500px] mx-auto'>
            <div className='xl:w-[16%] lg:w-[18%] md:w-[28%] sm:w-[38%] mx-auto mt-20 mb-24'>
                <h2 className='font-bold text-center text-3xl border-b-4 border-b-[#ff6d5a] pb-2 bg-gradient-to-b from-white to-[#ff6d5a] text-transparent bg-clip-text'>Exprience</h2>
            </div>
            <div className='flex flex-wrap gap-2 justify-around'>
                <div className='lg:w-[30%] text-[#bbb] border-2 border-blue-500 hover:border-[#ff6d5a] transition-all p-3'>
                    <div>
                        <img src={universe} alt="" className='w-[100px] h-[100px] bg-[#979bdf] rounded-full mt-[-60px] mb-4' />
                        <div>
                            <h1 className='text-xl text-blue-500 font-bold'>Junior Full Stack Developer (MERN)</h1>
                            <h2 className='text-lg font-semibold'>Universe Soft Care - <span>Full Time</span></h2>
                            <h3 className='text-sm'>Aug 2023 - Present</h3>
                            <h4 className='text-sm mb-4'>Dhaka, Bangladesh - <span>On-site</span></h4>
                            <h5 className='mb-4 text-lg font-semibold'><span className='text-blue-500 text-xl'>Skills:</span> JavaScript, Reactjs, Tailwind CSS, Nodejs, Expressjs, Mongoose</h5>
                            <p className='text-justify text-sm'>Universe Soft Care is a dynamic software startup based in Bangladesh, is poised to revolutionize the tech industry with innovative solutions. Our team's unwavering dedication to quality and client satisfaction sets us apart in delivering cutting-edge software products and services.</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[30%] text-[#bbb] border-2 border-blue-500 hover:border-[#ff6d5a] transition-all p-3 sm:mt-16 lg:mt-0'>
                    <div>
                        <img src={moonit} alt="" className='w-[100px] h-[100px] bg-[#979bdf] rounded-full mt-[-60px] mb-4' />
                        <div>
                            <h1 className='text-xl text-blue-500 font-bold'>Web Design & Development Trainer</h1>
                            <h2 className='text-lg font-semibold'>Moon It Institute - <span>Part Time</span></h2>
                            <h3 className='text-sm'>Nov 2022 - Jun 2023</h3>
                            <h4 className='text-sm mb-4'>Feni, Chattogram - <span>Physical Job</span></h4>
                            <h5 className='mb-4 text-lg font-semibold'><span className='text-blue-500 text-xl'>Teach:</span> HTML, CSS, Bootstrap, Tailwind, JavaScript Fundamentals, DOM, Reactjs</h5>
                            <p className='text-justify text-sm'>I had the role of a web design and development trainer at Moon IT Institute, where I teaches students in web design and web developemnt, I Also try to give them my best.</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[30%] text-[#bbb] border-2 border-blue-500 hover:border-[#ff6d5a] transition-all p-3 sm:mt-16 lg:mt-0'>
                    <div>
                        <img src={ictob} alt="" className='w-[100px] h-[100px] bg-[#979bdf] rounded-full mt-[-60px] mb-4' />
                        <div>
                            <h1 className='text-xl text-blue-500 font-bold'>Leader - FPI Ambassador Team</h1>
                            <h2 className='text-lg font-semibold'>ICT Olympiad Bangladesh</h2>
                            <h3 className='text-sm'>Feb 2022 - Present</h3>
                            <h4 className='text-sm mb-4'>Dhaka, Bangladesh</h4>
                        </div>
                        <h5 className='mb-4 text-lg font-semibold'><span className='text-blue-500 text-xl'>Skills:</span> Communication, Leadership, ICT Consultancy, Confidentiality</h5>
                        <p className='text-justify text-sm'>Universe Soft Care is a dynamic software startup based in Bangladesh, is poised to revolutionize the tech industry with innovative solutions. Our team's unwavering dedication to quality and client satisfaction sets us apart in delivering cutting-edge software products and services.</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Exprience;