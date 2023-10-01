import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    return (
        <div id='services' className='xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[500px] mx-auto'>
            <div className='xl:w-[35%] lg:w-[45%] md:w-[55%] sm:w-[75%] mx-auto mt-24'>
                <h2 className='font-bold text-center text-3xl border-b-4 border-b-[#ff6d5a] pb-2 bg-gradient-to-b from-[#ff6d5a] to-white text-transparent bg-clip-text'>The Services I Want to Provide</h2>
            </div>
            <div className='lg:w-[100%] sm:w-[100%] mt-24'>
                    <ServiceCard/>
            </div>
        </div>
    );
};

export default Services;