import React from 'react';
import projectImg from '../../images/projectImg.jpg'
import { Icon } from '@iconify/react';

const PortfolioCard = ({ portfolioDetails }) => {
    const { img, title, description, githubSourceCodeLink, projectLiveLink } = portfolioDetails
    return (
        <div className='md:w-[30%] sm:w-[90%] border-[1px] border-[#ff6d5a] rounded-lg p-4 group'>
            <img src={img} alt="avater" className='w-[100%] group-hover:scale-105 transition-all duration-300' />
            <h2 className='text-center text-3xl font-bold p-4 bg-gradient-to-r from-blue-500 to-[#ff6d5a] text-transparent bg-clip-text group-hover:scale-110 transition-all duration-500'>{title}</h2>
            <p className='text-white text-justify mb-5'>{description}</p>
            <div className='lg:w-[100%] text-center sm:w-[100%]'>
                <button><a href="" className='border-2 border-[#ff6d5a] text-xl px-5 py-[5px] text-[#ff6d5a] group-hover:bg-[#ff6d5a] group-hover:text-white transition-all duration-500 flex sm:mb-5 items-center gap-2 rounded-md'>Github <Icon icon="line-md:github-loop" /></a></button>
                <button><a href="" className='border-2 border-[#ff6d5a] text-xl px-5 py-[5px] text-[#ff6d5a] group-hover:bg-[#ff6d5a] group-hover:text-white transition-all duration-500 flex items-end rounded-md ml-2'>See Details <Icon icon="material-symbols:arrow-right" className='text-2xl' /></a></button>
            </div>
        </div>
    );
};

export default PortfolioCard;