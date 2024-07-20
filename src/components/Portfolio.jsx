import React from 'react';

import java from "../../public/java.png";
import html from "../../public/html.png";
import javascript from "../../public/javascript.png";
import nodejs from "../../public/node.png";
import reactjs from "../../public/reactjs.png";
import springBoot from "../../public/springBoot.jpg";

function Portfolio() {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "HTML",
            videoLink: "https://your-html-video-link.com",
            codeLink: "https://your-html-source-code-link.com"
        },
        {
            id: 2,
            logo: java,
            name: "Java",
            videoLink: "https://your-java-video-link.com",
            codeLink: "https://your-java-source-code-link.com"
        },
        {
            id: 3,
            logo: javascript,
            name: "Javascript",
            videoLink: "https://your-javascript-video-link.com",
            codeLink: "https://your-javascript-source-code-link.com"
        },
        {
            id: 4,
            logo: reactjs,
            name: "ReactJS",
            videoLink: "https://your-reactjs-video-link.com",
            codeLink: "https://your-reactjs-source-code-link.com"
        },
        {
            id: 5,
            logo: nodejs,
            name: "NodeJS",
            videoLink: "https://your-nodejs-video-link.com",
            codeLink: "https://your-nodejs-source-code-link.com"
        },
        {
            id: 6,
            logo: springBoot,
            name: "Spring Boot",
            videoLink: "https://your-spring-boot-video-link.com",
            codeLink: "https://your-spring-boot-source-code-link.com"
        }
    ];

    return (
        <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <div>
                <h1 className='font-bold text-3xl mb-5'>Portfolio</h1>
                <span className='underline font-semibold'>Featured projects</span>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-3'>
                    {
                        cardItem.map(({id, logo, name, videoLink, codeLink}) => (
                            <div 
                                className='md:w-[250px] md:h-[250px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'
                                key={id}
                            >
                                <img 
                                    className='w-[80px] h-[80px] md:w-[120px] md:h-[120px] p-1 rounded-full border-[2px]'
                                    src={logo}
                                    alt={name + " image"} 
                                />
                                <div>
                                    <div className='font-bold text-xl px-2 mb-2'>{name}</div>
                                    <p className='px-2 text-gray-700'>
                                        {/* test to be added later */}
                                        basic project details
                                        <br />
                                    </p>
                                </div>
                                <div className='flex justify-around space-x-4 mt-2'>
                                    <a href={videoLink} target="_blank" rel="noopener noreferrer">
                                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                                    </a>
                                    <a href={codeLink} target="_blank" rel="noopener noreferrer">
                                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default Portfolio;
