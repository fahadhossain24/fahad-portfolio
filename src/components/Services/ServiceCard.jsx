import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { Icon } from '@iconify/react';

const ServiceCard = () => {
    const [ref, inView] = useInView();

    const cardAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(1)' : 'translateY(80px)',
        config: { duration: 700 },
    });

    return (
        <div className='flex flex-wrap justify-center gap-4'>
            <animated.div ref={ref} className='lg:w-[45%] group p-4 cursor-pointer' style={cardAnimation}>
                <span className='lg:w-[20%] sm:w-fit text-[#ff6d5a] text-9xl block mx-auto'>
                    <Icon icon='material-symbols:linked-services' />
                </span>
                <h2 className='text-white text-center text-3xl font-bold mt-3 group-hover:text-[#ff6d5a]'>
                    <span className='text-[#ff6d5a]'>F</span>rontend{' '}
                    <span className='text-[#ff6d5a]'>D</span>evelopment
                </h2>
                <p className='px-4 mt-5 mx-auto text-[#bbb] text-xl text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quasi?adipisicing
                    elit. Quam, quasi?adipisicing elit. Quam, quasi?
                </p>
            </animated.div>

            <animated.div ref={ref} className='lg:w-[45%] group p-4 cursor-pointer' style={cardAnimation}>
                <span className='lg:w-[20%] sm:w-fit text-[#ff6d5a] text-9xl block mx-auto'>
                <Icon icon="streamline:interface-upload-website-action-actions-computer-website-device-display-upload-monitor-screen" />
                </span>
                <h2 className='text-white text-center text-3xl font-bold mt-3 group-hover:text-[#ff6d5a]'>
                    <span className='text-[#ff6d5a]'>C</span>ustom{' '}
                    <span className='text-[#ff6d5a]'>W</span>ebsite{' '}
                    <span className='text-[#ff6d5a]'>D</span>esign
                </h2>
                <p className='px-4 mt-5 mx-auto text-[#bbb] text-xl text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quasi?adipisicing
                    elit. Quam, quasi?adipisicing elit. Quam, quasi?
                </p>
            </animated.div>

            <animated.div ref={ref} className='lg:w-[45%] group p-4 cursor-pointer' style={cardAnimation}>
                <span className='lg:w-[20%] sm:w-fit text-[#ff6d5a] text-9xl block mx-auto'>
                <Icon icon="gg:database" />
                </span>
                <h2 className='text-white text-center text-3xl font-bold mt-3 group-hover:text-[#ff6d5a]'>
                    <span className='text-[#ff6d5a]'>B</span>ackend{' '}
                    <span className='text-[#ff6d5a]'>D</span>evelopment
                </h2>
                <p className='px-4 mt-5 mx-auto text-[#bbb] text-xl text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quasi?adipisicing
                    elit. Quam, quasi?adipisicing elit. Quam, quasi?
                </p>
            </animated.div>

            <animated.div ref={ref} className='lg:w-[45%] group p-4 cursor-pointer' style={cardAnimation}>
                <span className='lg:w-[20%] sm:w-fit text-[#ff6d5a] text-9xl block mx-auto'>
                <Icon icon="ion:server" />
                </span>
                <h2 className='text-white text-center text-3xl font-bold mt-3 group-hover:text-[#ff6d5a]'>
                    <span className='text-[#ff6d5a]'>F</span>ull stack{' '}
                    <span className='text-[#ff6d5a]'>D</span>evelopment
                </h2>
                <p className='px-4 mt-5 mx-auto text-[#bbb] text-xl text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quasi?adipisicing
                    elit. Quam, quasi?adipisicing elit. Quam, quasi?
                </p>
            </animated.div>
        </div>
    );
};

export default ServiceCard;