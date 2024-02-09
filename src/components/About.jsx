import { useState } from "react";
const About = () => {
  const [data, setData] = useState({
    title: "Java Developer & React Developer",
    desc1: `Worked on Spring Boot based Application which response to user correspondence.
    Contributed in all phases of the development cycle as well as wrote testable, scalable & efficient code.
    `,
    desc2: `working on React for around 1.5 years, build various feature for clients and very much capable of developing highly interactive and responsive web application`,
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="items-center flex flex-col md:flex-row">
          {/* image container */}
          <div className="w-full flex justify-center px-10">
            <h1 className="text-justify text-2xl">A highly motivated programmer with 3 years experience in technologies like Java, springboot, hibernate and highly passionate to learn and work on latest technologies. Have good knowledge of Data structures and algorithms along with database. In frontend technologies, I have good understanding and hands-on experience in React js. In last projects, worked directly with client and built good rapport with client time</h1>
          </div>

          <div className="w-full  flex justify-center py-2 md:py-0">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p className="text-justify text-lg"> {data.desc1}</p>
              <p className="text-justify text-lg">{data.desc2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;