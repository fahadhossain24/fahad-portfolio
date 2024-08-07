import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ScrollAnimation from 'react-animate-on-scroll';
import 'react-circular-progressbar/dist/styles.css';


const SkillsProgressPercentageBar = ({ value, backgroundImage, textColor }) => {
    const { url, size, backgroundPositon } = backgroundImage;

    const [isAnimated, setIsAnimated] = useState(false);
    const [percentage, setPercentage] = useState(0);



        useEffect(() => {
            if (isAnimated) {
                const interval = setInterval(() => {
                    if (percentage < value) {
                        // Increase the percentage value over time (e.g., by 1% every 5ms)
                        setPercentage(percentage + 1);
                    }
                }, 2);
                return () => {
                    clearInterval(interval);
                }
            } else {
                setPercentage(0)
            }
        }, [isAnimated, percentage])


    window.addEventListener('load', () => {
        const circleProgressElement = document.querySelector('#circleProgress');

        const observer = new IntersectionObserver((items) => {
            items.forEach(item => {
                if (item.isIntersecting) {
                    // console.log('visibal');
                    setIsAnimated(true)
                } else {
                    // console.log('invisible');
                    setIsAnimated(false)
                }
            })
        }, {
            threshold: 0.1
        })

        observer.observe(circleProgressElement);
    })





    return (
        <div id='circleProgress' className='lg:w-[80%] sm:w-[80%] mx-auto' style={{
            backgroundImage: `url(${url})`,
            backgroundSize: size,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: backgroundPositon,
        }}>
            <CircularProgressbar
                value={percentage ? percentage: value}
                text={`${percentage? percentage: value}%`}
                styles={buildStyles({
                    pathTransitionDuration: 0.5, 
                    pathColor: `#87433B`,
                    textColor: 'yellow',
                    trailColor: '#d6d6d6',
                    textSize: '15px',
                })}
            />
        </div>
    );
};

export default SkillsProgressPercentageBar;