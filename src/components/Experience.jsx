import React from "react";

import java from "../../public/java.png";
import html from "../../public/html.png";
import javascript from "../../public/javascript.png";
import css from "../../public/css.jpg";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";
import oracle from "../../public/oracle.png";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "Javascript",
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 6,
      logo: spring,
      name: "Spring",
    },
    {
      id: 7,
      logo: springBoot,
      name: "Spring Boot",
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="font-bold text-3xl mb-5">Experience</h1>
        <p className="">
          As a passionate and dedicated Computer Science graduate, I am eager to
          apply my technical skills and innovative mindset to real-world
          challenges. While I may be a fresher, I bring a solid foundation in
          software development, problem-solving, and a relentless drive for
          continuous learning and growth. My goal is to contribute effectively
          to dynamic teams and make a meaningful impact in the tech industry.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 my-5">
          {cardItem.map(({ id, logo, name }) => {
            return (
              <div
                className="flex flex-col items-center justify-center border-[2px] rounded-full w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img
                  className="w-[60px] sm:w-[90px] md:w-[120px] rounded-full"
                  src={logo}
                  alt={name + " image"}
                />
                <div className="text-center mt-2 text-sm sm:text-base md:text-lg">
                  {name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
