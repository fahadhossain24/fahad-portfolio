import React from 'react';
import clientImg from '../../images/review-person-image/yousuf.png';
import clientImg2 from '../../images/review-person-image/arefindipu.jpg';
import { Icon } from '@iconify/react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';


const Reviews = () => {
    const [ref, inView] = useInView();
    const cardAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(1)' : 'translateY(80px)',
        config: { duration: 800 },
    });
    return (
        <div id='reviews' ref={ref} className='xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[100%] mx-auto'>
            <div className='xl:w-[12%] lg:w-[15%] md:w-[25%] sm:w-[40%] mx-auto mt-20 mb-24'>
                <h2 className='font-bold text-center text-3xl border-b-4 border-b-[#ff6d5a] pb-2 bg-gradient-to-b from-white to-[#ff6d5a] text-transparent bg-clip-text'>Reviews</h2>
            </div>

            <div className='w-[100%] flex flex-wrap px-8 items-center mb-8'>
                <div className='xl:w-[12%] md:w-[60%] sm:w-[100%] '>

                    <animated.div style={cardAnimation} className=' w-[120px] h-[100px] rounded-xl border-2 border-[#ff6d5a] sm:mx-auto md:mx-0'>
                        <img src={clientImg} alt="avater" className='w-full h-full rounded-xl transition-transform transform hover:scale-110' />
                    </animated.div>

                </div>
                <animated.div className='lg:w-[88%]' style={cardAnimation}>
                    <h2 className='text-3xl font-bold text-[#bbb] mb-3 mt-3 sm:text-center md:text-left'>Engr. Yousuf Shahin
                        <p className='text-sm font-medium '>Chairman & CEO, Moon IT Institute, Feni</p>
                        <p className='flex text-sm mt-[4px] text-yellow-500 sm:justify-center md:justify-start'>
                            <Icon icon="ic:sharp-star" />
                            <Icon icon="ic:sharp-star" />
                            <Icon icon="ic:sharp-star" />
                            <Icon icon="ic:sharp-star" />
                            <Icon icon="ic:sharp-star" />
                        </p>
                    </h2>
                    <p className='text-lg text-justify text-blue-200 opacity-70'>&nbsp;&nbsp;&nbsp;&nbsp;<Icon icon="icomoon-free:quotes-left" className='inline-block text-xl text-[#ff6d5a] mt-[-12px]' /> As a mentor, Fahad exhibited outstanding teaching skills and a genuine passion for helping students develop their skills. He had a unique ability to explain complex concepts in a simple and understandable manner, making learning an enjoyable experience for our students. He was not only a knowledgeable and skilled mentor but also a fantastic communicator. He fostered a collaborative and supportive learning environment where students felt comfortable asking questions and seeking guidance<Icon icon="icomoon-free:quotes-right" className='inline-block text-xl text-[#ff6d5a] mb-4' /></p>
                </animated.div>
            </div>

            <div className='w-[100%] flex flex-wrap px-8 items-center'>
                <div className='xl:w-[12%] md:w-[60%] sm:w-[100%]'>

                    <animated.div style={cardAnimation} className=' w-[120px] h-[100px] rounded-xl border-2 border-[#ff6d5a] sm:mx-auto md:mx-0'>
                        <img src={clientImg2} alt="avater" className='w-full h-full rounded-xl transition-transform transform hover:scale-110' />
                    </animated.div>

                </div>
                <animated.div className='lg:w-[88%]' style={cardAnimation}>
                    <h2 className='text-3xl font-bold text-[#bbb] mb-3 mt-3 sm:text-center md:text-left'>Arefin Dipu
                        <p className='text-sm font-medium '>Member of Governing Body, ICT Olympiad Bangladesh</p>
                        <p className='flex text-sm mt-[4px] sm:justify-center md:justify-start'>
                            <Icon icon="ic:sharp-star" className='text-yellow-500'/>
                            <Icon icon="ic:sharp-star" className='text-yellow-500'/>
                            <Icon icon="ic:sharp-star" className='text-yellow-500'/>
                            <Icon icon="ic:sharp-star" className='text-yellow-500'/>
                            <Icon icon="ic:sharp-star" className='text-[#bbb]'/>
                        </p>
                    </h2>
                    <p className='text-lg text-justify text-blue-200 opacity-70'>&nbsp;&nbsp;&nbsp;&nbsp;<Icon icon="icomoon-free:quotes-left" className='inline-block text-xl text-[#ff6d5a] mt-[-12px]' /> As a member of the governing body, I have the utmost respect and admiration for Fahad's contributions to our organization ICT Olympiad Bangladesh. I believe that Her leadership and expertise have left a lasting and positive impression on the ICT Olympiad Bangladesh, and I have no doubt that they will continue to excel in any endeavor they pursue. Have a protential future in the ICT sector<Icon icon="icomoon-free:quotes-right" className='inline-block text-xl text-[#ff6d5a] mb-4' /></p>
                </animated.div>
            </div>
        </div>
    );
};

export default Reviews;