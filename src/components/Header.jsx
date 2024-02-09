import { useState } from "react";
import { Link } from "react-router-dom";
const Header = ()=>{
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    return(
        <>
        <div className=" flex justify-between items-center border h-16 px-8 sm:px-16 bg-gray-100 overflow-hidden" >
        <div>
            <h1 className="text-xs sm:text-lg">Shabbir Khan</h1>
        </div>
        <div className="hidden justify-end sm:flex space-x-3">
            <Link to="/" className="nav-link hover:text-orange-600">Home</Link>
            <Link to="#" className="nav-link hover:text-orange-600">About</Link>
            <Link to="/skills" className="nav-link hover:text-orange-600">Skills</Link>
        </div>
        <div className="space-x-6 flex">
            <button className="bg-orange-500 shadow rounded-full px-3 py-2 text-xs sm:text-lg"><a href="https://drive.google.com/file/d/15NatdhwZixwMEpJ8PNFfK8NAl-WjhVbX/view?usp=drive_link" target="_blank">Download CV</a></button>
            <button onClick={() => setIsNavOpen(!isNavOpen)}  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <img src="images/menu.png" alt="menu" />
            </button>
        </div>
    </div>
    {isNavOpen && (
        <div className="basis-full sm:hidden bg-gray-100 flex flex-col items-center overflow-hidden space-y-2">
            <Link to="/" className="w-full block border border-transparent border-b-2 hover:bg-orange-600 hover:text-white text-center">Home</Link>
            <Link to="#" className="w-full block border border-transparent border-b-2 hover:bg-orange-600 hover:text-white text-center">About</Link>
            <Link to="/skills" className="w-full block border border-transparent border-b-2 hover:bg-orange-600 hover:text-white text-center">Skills</Link>
     
        </div>
      )}

   </>
    )
    
}
export default Header;