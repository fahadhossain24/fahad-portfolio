import React from 'react';
import clientImg from '../../images/hero_img.png'
import { Icon } from '@iconify/react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Reviews = () => {
    const [ref, inView] = useInView();
    const cardAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(1)' : 'translateY(80px)',
        config: { duration: 600 },
    });
    return (
        <div id='reviews' ref={ref} className='xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[500px] mx-auto'>
            <div className='xl:w-[12%] lg:w-[15%] md:w-[25%] sm:w-[35%] mx-auto mt-20 mb-24'>
                <h2 className='font-bold text-center text-3xl border-b-4 border-b-[#ff6d5a] pb-2 bg-gradient-to-b from-white to-[#ff6d5a] text-transparent bg-clip-text'>Reviews</h2>
            </div>
        
            <div className='w-[100%] flex flex-wrap'>
                <div className='lg:w-[40%] md:w-[60%] sm:w-[100%]'>
                    <div className='lg:w-[40%] md:w-[50%] lg:h-[300px] sm:w-[50%] sm:h-[300px] bg-[#ff6d5a]  relative mx-auto md:mr-16'>

                    </div>
                    <div className='lg:w-[20%] lg:h-[200px] md:w-[35%] md:h-[200px] sm:w-[60%] sm:h-[200px] bg-blue-300 absolute lg:top-[3400px] md:top-[4480px] sm:top-[5750px] lg:left-[245px] md:left-[190px] sm:left-[140px]'>
                        <div className='md:w-[60%] md:h-[80%] sm:w-[50%] sm:h-[80%] md:overflow-hidden lg:overflow-hidden sm:overflow-hidden bg-[#0a093a] rounded-full mx-auto md:mt-5 sm:mt-5 border-2 border-[#ff6d5a]'>
                            <img src={clientImg} alt="avater" className='w-full h-full rounded-full transition-transform transform hover:scale-110' />
                        </div>
                    </div>
                </div>
                <animated.div className='lg:w-[50%]' style={cardAnimation}>
                    <h2 className='text-3xl font-bold text-[#bbb] mb-5 mt-3'>Jhon Deo</h2>
                    <p className='text-lg text-justify text-blue-200 opacity-70'>&nbsp;&nbsp;&nbsp;&nbsp;<Icon icon="icomoon-free:quotes-left" className='inline-block text-xl text-[#ff6d5a] mt-[-12px]' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatibus omnis id reprehenderit laudantium, sequi enim ut. Earum repudiandae velit necessitatibus molestias? Iste nostrum, natus molestias esse obcaecati atque ad debitis adipisci numquam provident eaque. Libero quam nulla odit maiores, in praesentium? Asperiores assumenda explicabo reiciendis debitis voluptatum nemo mollitia. <Icon icon="icomoon-free:quotes-right" className='inline-block text-xl text-[#ff6d5a] mb-4'/></p>
                </animated.div>
            </div>
        </div>
    );
};

export default Reviews;