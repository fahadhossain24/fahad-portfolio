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
        <div ref={ref} className='flex flex-wrap justify-center gap-4'>
            <animated.div ref={ref} className='lg:w-[45%] p-4 cursor-pointer group' style={cardAnimation}>
                <span className='lg:w-[20%] sm:w-fit text-[#ff6d5a] text-9xl block mx-auto'>
                    <Icon icon='material-symbols:linked-services' />
                </span>
                <h2 className='text-white text-center text-3xl font-bold mt-3 group-hover:scale-110 transition duration-400'>
                    <span className='text-[#ff6d5a]'>F</span>rontend{' '}
                    <span className='text-[#ff6d5a]'>D</span>evelopment
                </h2>
                <p className='md:px-4 sm:px-0 mt-5 mx-auto text-[#bbb] text-xl text-justify'>
                I work to bring your digital stracture to life. It may be your life or your business. Whether it's creating responsive layouts, optimizing performance, or ensuring cross-browser compatibility, I'm dedicated to delivering top-notch frontend services that captivate and engage your audience. Let's collaborate to make your online presence truly remarkable.
                </p>
            </animated.div>

            <animated.div className='lg:w-[45%] group p-4 cursor-pointer ' style={cardAnimation}>
                <span className='lg:w-[20%] sm:w-fit text-[#ff6d5a] text-9xl block mx-auto'>
                <Icon icon="streamline:interface-upload-website-action-actions-computer-website-device-display-upload-monitor-screen" />
                </span>
                <h2 className='text-white text-center text-3xl font-bold mt-3 group-hover:scale-110 transition duration-400'>
                    <span className='text-[#ff6d5a]'>C</span>ustom{' '}
                    <span className='text-[#ff6d5a]'>W</span>ebsite{' '}
                    <span className='text-[#ff6d5a]'>D</span>esign
                </h2>
                <p className='md:px-4 sm:px-2 mt-5 mx-auto text-[#bbb] text-xl text-justify'>
                I specialize in creating websites that reflect your brand's personality and goals.Whether you're looking for a one-of-a-kind portfolio site, an e-commerce platform, or anything in between, I'm here to bring your ideas to life with precision and creativity. Let's collaborate to design a web experience that sets you apart in the digital landscape.
                </p>
            </animated.div>

            <animated.div ref={ref} className='lg:w-[45%] group p-4 cursor-pointer ' style={cardAnimation}>
                <span className='lg:w-[20%] sm:w-fit text-[#ff6d5a] text-9xl block mx-auto'>
                <Icon icon="gg:database" />
                </span>
                <h2 className='text-white text-center text-3xl font-bold mt-3 group-hover:scale-110 transition duration-400'>
                    <span className='text-[#ff6d5a]'>B</span>ackend{' '}
                    <span className='text-[#ff6d5a]'>D</span>evelopment
                </h2>
                <p className='md:px-4 sm:px-2 mt-5 mx-auto text-[#bbb] text-xl text-justify'>
                As a backend developer, I focus on crafting efficient server-side logic, managing databases, and ensuring data security. My goal is to provide the seamless functionality that allows your frontend to shine. Whether it's optimizing API endpoints, scaling for high traffic, or enhancing system performance, I'm here to empower your applications with a robust and reliable backend. Let's collaborate to create a strong digital backbone for your online success.
                </p>
            </animated.div>

            <animated.div ref={ref} className='lg:w-[45%] group p-4 cursor-pointer ' style={cardAnimation}>
                <span className='lg:w-[20%] sm:w-fit text-[#ff6d5a] text-9xl block mx-auto'>
                <Icon icon="ion:server" />
                </span>
                <h2 className='text-white text-center text-3xl font-bold mt-3 group-hover:scale-110 transition duration-400'>
                    <span className='text-[#ff6d5a]'>F</span>ull{' '}
                    <span className='text-[#ff6d5a]'>S</span>tack{' '}
                    <span className='text-[#ff6d5a]'>W</span>eb{' '}
                    <span className='text-[#ff6d5a]'>D</span>evelopment
                </h2>
                <p className='md:px-4 sm:px-2 mt-5 mx-auto text-[#bbb] text-xl text-justify'>
                I offer a complete package for your digital needs. With expertise in both frontend and backend development, I can take your project from concept to execution. I specialize in designing intuitive user interfaces, implementing complex server-side logic, and optimizing database systems. Whether it's crafting responsive designs, securing data, or ensuring cross-platform compatibility, I'm your one-stop solution to build a versatile and dynamic online presence. Let's work together to turn your vision into a reality.






                </p>
            </animated.div>
        </div>
    );
};

export default ServiceCard;