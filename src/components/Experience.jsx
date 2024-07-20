import React from 'react';

import java from "../../public/java.png";
import html from "../../public/html.png";
import javascript from "../../public/javascript.png";
import css from "../../public/css.jpg";
import reactjs from "../../public/reactjs.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";
import oracle from "../../public/reactjs.png";

function Experience() {
    const cardItem = [
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:css,
            name:"CSS"
        },
        {
            id:3,
            logo:java,
            name:"Java"
        },
        {
            id:4,
            logo:javascript,
            name:"Javascript"
        },
        {
            id:5,
            logo:oracle,
            name:"Oracle"
        },
        {
            id:6,
            logo:spring,
            name:"Spring"
        },
        {
            id:7,
            logo:springBoot,
            name:"Spring Boot"
        }
        
    ]
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
            <h1 className='font-bold text-3xl mb-5'>Experience</h1>
            <p className=''>I am a fresher but definatly want to fill this section</p>
            
            <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3 '>
                {
                    cardItem.map(({id, logo, name})=>{
                        return (
                            <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px]  p-1 cursor-pointer hover:scale-110 duration-300 '
                                key={id}
                            >
                                <img 
                                className='w-[150px]   rounded-full '
                                src={logo} 
                                alt= {name + "image"} 
                                />
                                <div>
                                    <div>{name} </div>
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

export default Experience