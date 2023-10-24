import React from 'react';
import messProject from '../../images/messProject.png'
import pharmacyProject from '../../images/pharmacyProject.png'
import bikeProject from '../../images/bikeProject.png'
import abinash from '../../images/project-ss/abinash.png'
import taskManager from '../../images/project-ss/task-manager.png'
import PortfolioCard from './PortfolioCard';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { Icon } from '@iconify/react';

const Portfolio = () => {
    const [ref, inView] = useInView();
    const cardAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(1)' : 'translateY(80px)',
        config: { duration: 900 },
    });

    const cardsInfo = [
        {
            img: abinash,
            title: 'Abinash Foundation',
            description: 'This is real time client project which made by Universe Soft Care. This project creates for Abinash Foundation. This is an NGO typed Project. I contributed to this project as a MERN stack developer. That was really nice journey for me. I\'m sorry to say you can\'t see the project source code for security purpose.',
            githubSourceCodeLink: null,
            projectLiveLink: 'https://abinashfoundation.com/home'
        },
        {
            img: messProject,
            title: 'Bachelor Trip',
            description: 'Bachelor Trip is a bachelor mess management system. Any person if her needed mess, then he can be find mess by any specific location or a person who want to create mess. He could be find mess and manage it by using this system. Mess admin each and everything control by using this system',
            githubSourceCodeLink: 'https://github.com/fahadhossain24/my-mess.git',
            projectLiveLink: 'https://my-mess-e50e9.web.app/'
        },
        {
            img: pharmacyProject,
            title: 'Medicine Park',
            description: 'Medicine Park is a pharmacy management system. Where a pharmacist can entry all his medicines. If a customar asks about any medicine, he can search it and tell it along with its quantity and he can add all the types of medicine required by that customar to the card and finally he can print the slip',
            githubSourceCodeLink: 'https://github.com/fahadhossain24/pharmacy-management.git',
            projectLiveLink: 'https://medicine-park-29ca8.web.app/home'
        },
        // {
        //     img: bikeProject,
        //     title: 'Expert Bike Service',
        //     description: 'Expert Bike Service is a system where a user can be use in two approach. A bike rider have taken service for bike issue. Any king of bike problem, rider just come into this website then he can be take service. Other side a service men or mechanic register her service and he can be sell her service.',
        //     githubSourceCodeLink: 'https://github.com/fahadhossain24/experts-bike-service-frontend.git',
        //     projectLiveLink: 'https://expert-bike-service.web.app/'
        // },
        // {
        //     img: taskManager,
        //     title: 'Bachelor Trip',
        //     description: 'Bachelor Trip is a bachelor mess management system. Any person if her needed mess, then he can be find mess by any specific location or a person who want to create mess. He could be find mess and manage it by using this system. Mess admin each and everything control by using this system',
        //     githubSourceCodeLink: 'https://github.com/fahadhossain24/my-mess.git',
        //     projectLiveLink: 'https://my-mess-e50e9.web.app/'
        // },
        

    ]

    return (
        <div id='protfolio' ref={ref} className='xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[100%] mx-auto'>
            <div className='xl:w-[12%] lg:w-[15%] md:w-[25%] sm:w-[45%] mx-auto mt-20 mb-24'>
                <h2 className='font-bold text-center text-3xl border-b-4 border-b-[#ff6d5a] pb-2 bg-gradient-to-b from-white to-[#ff6d5a] text-transparent bg-clip-text'>Portfolio</h2>
            </div>
            <animated.div className='flex flex-wrap justify-evenly' style={cardAnimation}>
            {
                cardsInfo.map((cardInfo, index) => <PortfolioCard key={index} portfolioDetails={cardInfo}/>)
            } 
            </animated.div>
        </div>
    );
};

export default Portfolio;