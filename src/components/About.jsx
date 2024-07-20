import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="font-bold text-3xl mb-5">About</h1>
        <p>
          Hello, I'm Shubham, a passionate Web developer with a keen eye for
          React. With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />

        <h1 className="font-semibold text-green-600 text-xl">
          Education & Training
        </h1>
        <span>
          Bachelor of Technology (B.Tech) in Computer Science and Engineering
          (CSE) <br />
          Kalinga Institute of Industrial Technology (KIIT University) <br />
          2022 - 2026
        </span>

        <br />
        <br />

        <h1 className="font-semibold text-green-600 text-xl">
          Skill & Expertise
        </h1>
        <span>
          Proficient in HTML, CSS, JavaScript, and React with experience in
          building responsive, dynamic web applications. Familiar with Tailwind
          CSS, Git, and deployment tools like Netlify. Specialized in
          component-based architecture and state management with React, and
          skilled in performance optimization and enhancing user experience.
        </span>
        <br />
        <br />

        <h1 className="font-semibold text-green-600 text-xl">
          Professional Experience
        </h1>
        {/* <span>
          Intern, Software Development, XYZ Company, May 2024 - August 2024
        </span> */}
        <br />
        <span>
          Developed and maintained web applications using React and Node.js.
          Collaborated with a team of developers to enhance the user experience.
        </span>
        <br />
        {/* <br />
         <h1 className="font-semibold text-green-600 text-xl">
          Achievements & Awards
        </h1>
        <span>Winner, Hackathon XYZ, 2023</span>
        <br />
        <span>Awarded Best Innovative Project at ABC Conference, 2022</span>
        <br /> */}
        <br />
        <h1 className="font-semibold text-green-600 text-xl">
          Mission Statement
        </h1>
        <span>
          To leverage my skills in software development to create innovative
          solutions that address real-world problems and contribute to the
          advancement of technology.
        </span>
        <br />
        <br />
      </div>
    </div>
  );
}

export default About;
