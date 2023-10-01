import React from 'react';
import projectImg from '../../images/projectImg.jpg'
import PortfolioCard from './PortfolioCard';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { Icon } from '@iconify/react';

const Portfolio = () => {
    const [ref, inView] = useInView();
    const cardAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(1)' : 'translateY(80px)',
        config: { duration: 700 },
    });
    return (
        <div id='protfolio' ref={ref} className='xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[500px] mx-auto'>
            <div className='xl:w-[12%] lg:w-[15%] md:w-[25%] sm:w-[35%] mx-auto mt-20 mb-24'>
                <h2 className='font-bold text-center text-3xl border-b-4 border-b-[#ff6d5a] pb-2 bg-gradient-to-b from-white to-[#ff6d5a] text-transparent bg-clip-text'>Portfolio</h2>
            </div>
            <animated.div className='flex flex-wrap justify-evenly' style={cardAnimation}>
                <PortfolioCard portfolioDetails={{
                    img: projectImg,
                    title: 'Project title here',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, reiciendis sapiente sunt quod laboriosam amet culpa pariatur. Optio assumenda vel sapiente aperiam, aliquam dolorem fuga veniam numquam. Dolore in est quam, eum soluta qui minus necessitatibus eveniet beatae dicta consectetur mollitia pariatur labore voluptas quasi repellendus eos optio id animi.',
                    githubSourceCodeLink: '',
                    projectLiveLink: ''
                }}/>
                <PortfolioCard portfolioDetails={{
                    img: projectImg,
                    title: 'Project title here',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, reiciendis sapiente sunt quod laboriosam amet culpa pariatur. Optio assumenda vel sapiente aperiam, aliquam dolorem fuga veniam numquam. Dolore in est quam, eum soluta qui minus necessitatibus eveniet beatae dicta consectetur mollitia pariatur labore voluptas quasi repellendus eos optio id animi.',
                    githubSourceCodeLink: '',
                    projectLiveLink: ''
                }}/>
                <PortfolioCard portfolioDetails={{
                    img: projectImg,
                    title: 'Project title here',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, reiciendis sapiente sunt quod laboriosam amet culpa pariatur. Optio assumenda vel sapiente aperiam, aliquam dolorem fuga veniam numquam. Dolore in est quam, eum soluta qui minus necessitatibus eveniet beatae dicta consectetur mollitia pariatur labore voluptas quasi repellendus eos optio id animi.',
                    githubSourceCodeLink: '',
                    projectLiveLink: ''
                }}/>
            </animated.div>
        </div>
    );
};

export default Portfolio;