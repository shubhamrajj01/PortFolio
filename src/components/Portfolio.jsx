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
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:java,
            name:"Java"
        },
        {
            id:3,
            logo:javascript,
            name:"Javascript"
        },
        {
            id:4,
            logo:reactjs,
            name:"ReactJS"
        },
        {
            id:5,
            logo:nodejs,
            name:"NodeJS"
        },
        {
            id:6,
            logo:springBoot,
            name:"Spring Boot"
        }
        
    ]
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
        <div>
            <h1 className='font-bold text-3xl mb-5'>Portfolio</h1>
            <span className='underline font-semibold'>Featured projects</span>
            
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-3 '>
                {
                    cardItem.map(({id, logo, name})=>{
                        return (
                            <div className='md:w-[250px] md:h-[270px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 '
                                key={id}
                            >
                                <img 
                                className='w-[120px] h-[120px] p-1 rounded-full border-[2px] '
                                src={logo} 
                                alt= {name + "image"} />
                                <div>
                                    <div className='font-bold text-xl px-2 mb-2'>{name}</div>
                                    <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div  className='justify-around space-x-4'>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

        </div>
    </div>
  )
}

export default Portfolio