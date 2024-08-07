import React from 'react';
import projectImg from '../../images/projectImg.jpg'
import { Icon } from '@iconify/react';

const PortfolioCard = ({ portfolioDetails }) => {
    const { img, title, description, githubSourceCodeLink, projectLiveLink } = portfolioDetails
    return (
        <div className='md:w-[90%] lg:w-[30%] sm:w-[90%] border-[1px] border-[#ff6d5a] rounded-lg p-4 group sm:mt-8 lg:mt-0'>
            <img src={img} alt="avater" className='w-[100%] h-[150px] group-hover:scale-105 transition-all duration-300' />
            <h2 className='h-[17%] text-center text-3xl font-bold p-4 bg-gradient-to-r from-blue-500 to-[#ff6d5a] text-transparent bg-clip-text group-hover:scale-110 transition-all duration-500'>{title}</h2>
            <p className='h-[200px] text-[#bbb] text-justify mb-5'>{description}</p>
            <div className='lg:w-[100%] text-center sm:w-[100%]'>
                {githubSourceCodeLink && <button><a href={githubSourceCodeLink} target="_blank" className='border-2 border-[#ff6d5a] text-xl px-5 py-[5px] text-[#ff6d5a] group-hover:bg-[#ff6d5a] group-hover:text-white transition-all duration-500 flex sm:mb-5 items-center gap-2 rounded-md'>Github <Icon icon="line-md:github-loop" /></a></button>}
                <button><a href={projectLiveLink} target="_blank" className='border-2 border-[#ff6d5a] md:text-xl sm:text-sm px-5 py-[5px] text-[#ff6d5a] group-hover:bg-[#ff6d5a] group-hover:text-white transition-all duration-500 flex items-end rounded-md ml-2 mb-4'>Go to website <Icon icon="material-symbols:arrow-right" className='text-2xl' /></a></button>
            </div>
        </div>
    );
};

export default PortfolioCard;