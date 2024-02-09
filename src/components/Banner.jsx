import bannerBackground from '../images/wallpaper.svg'
import { useEffect } from 'react';
import Typed from "typed.js";
import { useRef } from "react";


const Banner=()=>{
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Frontend Developer", "Java Backend Developer"], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 100,
          typeSpeed: 50,
          backSpeed: 10,
          backDelay: 100,
          loop: true,
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);

      
    return(
        <div 
            style={{
            backgroundImage: `url(${bannerBackground})`,backgroundSize: "cover",}}
        className="main flex flex-col md:flex-row">
            <div className="w-full  flex justify-center items-center py-2">
                <div className="w-2/3 space-y-2  ms-10 ">
                    <h3 className="text-3xl font-semibold text-white">Hi, I am</h3>
                    <h1 className="text-5xl font-bold text-white">Shabbir Khan</h1>
                    <h2 className="text-3xl text-white ">
                        I am A <span className="font-bold underline text-white" ref={el}></span>
                    </h2>
                    <p className="text-justify bold text-white">
                        As a React and Java developer, I bring proficiency in building dynamic and interactive user interfaces using React.js, coupled with strong expertise in backend development with Java
                    </p>
                    
                    <div className="icons-container flex space-x-5">
                        <a href="https://github.com/shabbirkhan0015?tab=repositories" target="_blank" className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-300">
                        <i class="fa-brands text-4xl fa-github"></i>
                        </a>
                        <a href="https://twitter.com/coding_forlife" target="_blank" className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-300">
                        <i class="fa-brands text-4xl fa-x-twitter"></i>
                        </a>
                     </div>
                         <br />
                    
                    
                </div>
            </div>
         
            <div className="w-full flex justify-center py-2">
                <img className="rounded-full shadow-lg w-fit" src="images/myimage.jpg" alt=""/>
            </div>
        </div>
    )
}
export default Banner;