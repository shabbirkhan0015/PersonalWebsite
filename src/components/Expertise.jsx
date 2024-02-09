import bannerBackground from '../images/wallpaper.svg'
const Expertise = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className=" mb-16 text-5xl font-bold underline  text-center">
          My Skills
        </h1>

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16 flex-col sm:flex-row"
        >
          <div className="flex text-white justify-center">
            <div className="w-2/3 text-center space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold">I love these technologies</h1>
              <p className="text-wrap text-center px-10">
              With a focus on delivering high-quality, scalable solutions, I leverage my skills in front-end and back-end technologies to create efficient and robust applications.
              </p>
              <button className="text-xl md:text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">
              <a href="https://drive.google.com/file/d/15NatdhwZixwMEpJ8PNFfK8NAl-WjhVbX/view?usp=drive_link" target="_blank">
                Download CV</a>
              </button>
            </div>
          </div>
          <div className="flex justify-center p-2">

            <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
              <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
                Core Java
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Spring Boot Framework
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                J2EE
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Hibernate(ORM Tool)
              </p>
              
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Spring Security
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Javascript
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                ReactJS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Redux
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Tailwind CSS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Docker
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Github
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Python
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Django
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;