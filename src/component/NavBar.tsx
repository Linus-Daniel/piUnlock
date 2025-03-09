import { useState } from "react"
import { FaBars,FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube, FaAngleDown, FaSearch } from "react-icons/fa";

import { Link } from "react-router";
import { HiX } from "react-icons/hi";

import logo from "../../public/favicon.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);




  return (
    <div className="flex items-center h-[8vh] sticky top-0 z-50 justify-between bg-[#3f1e74] px-2">
      {/* Brand Name */}
      <div className="brandname text-white text-lg flex items-center gap-5">

        <img src={logo} alt="logo" width={30} />
        <p>
            Pi Network
        </p>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex md:items-center list-none space-x-5 text-white">
        <li>
          <Link className="text-white flex items-center gap-2 mt-3" to="https://minepi.com/pi-blockchain/">
            Pi Blockchain <FaAngleDown />
          </Link>
          <hr />
        </li>
        <li>
          <Link className="text-white flex items-center gap-2 mt-3" to="https://minepi.com/developers/pi-hackathon/">
            Developers <FaAngleDown />
          </Link>
          <hr />
        </li>
        <li>
          <Link className="text-white flex items-center gap-2 mt-3" to="https://minepi.com/about/">About us</Link>
          <hr />
        </li>
        <li>
          <Link className="text-white flex items-center gap-2 mt-3" to="https://minepi.com/blog/">Blog</Link>
          <hr />
        </li>
        <li>
          <Link className="text-white flex items-center gap-2 mt-3" to="https://minepi.com/support/">Support</Link>
          <hr />
        </li>
        <li className="navlinks flex items-center space-x-2">
          <Link className="text-white flex items-center gap-2 mt-3" to="https://twitter.com/PiCoreTeam">
            <FaTwitter  />
          </Link>
          <Link className="text-white flex items-center gap-2 mt-3" to="https://web.facebook.com/PiCoreTeam/?_rdc=1&amp;_rdr">
            <FaFacebook />
          </Link>
          <Link className="text-white flex items-center gap-2 mt-3" to="https://www.youtube.com/c/PiCoreTeam">
            <FaYoutube />
          </Link>
          <Link className="text-white flex items-center gap-2 mt-3" to="https://www.instagram.com/pi_network/">
            <FaInstagram />
          </Link>
        </li>
      </ul>

      {/* Right Section: Search Icon and Toggle Button */}
      <div className="flex items-center space-x-3 md:space-x-2">
        <FaSearch
    
          className="text-white text-lg cursor-pointer"
          onClick={()=>(setIsSearchOpen(true))}
        />
        <button
          className="md:hidden bg-transparent active:outline-none shadow-none border-none "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
         { isMenuOpen?<HiX color="white" />: <FaBars color="white" />}
         </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
       <ul
       role="menu"
       aria-hidden="false"
       className="absolute top-full h-screen transition-all duration-700 ease-in-out list-none max-h-screen overflow-y-auto bg-opacity-90 left-0 w-full bg-[#593b8b] text-white flex flex-col items-start space-y-3 p-4 z-50 md:hidden"
     >
       <li>
         <Link
           className="text-white flex items-center gap-2"
           to="https://minepi.com/pi-blockchain/"
         >
           Pi Blockchain
         </Link>
       </li>
       <li>
         <Link
           className="text-white flex items-center gap-2"
           to="https://minepi.com/developers/pi-hackathon/"
         >
           Developers
         </Link>
       </li>
       <li>
         <Link
           className="text-white flex items-center gap-2"
           to="https://minepi.com/about/"
         >
           About us
         </Link>
       </li>
       <li>
         <Link
           className="text-white flex items-center gap-2"
           to="https://minepi.com/blog/"
         >
           Blog
         </Link>
       </li>
       <li>
         <Link
           className="text-white flex items-center gap-2"
           to="https://minepi.com/support/"
         >
           Support
         </Link>
       </li>
       <li className="flex space-x-4">
         <Link
           className="text-white flex items-center gap-2"
           to="https://twitter.com/PiCoreTeam"
         >
           <FaTwitter />
         </Link>
         <Link
           className="text-white flex items-center gap-2"
           to="https://web.facebook.com/PiCoreTeam/?_rdc=1&amp;_rdr"
         >
           <FaFacebook />
         </Link>
         <Link
           className="text-white flex items-center gap-2"
           to="https://www.youtube.com/c/PiCoreTeam"
         >
           <FaYoutube />
         </Link>
         <Link
           className="text-white flex items-center gap-2"
           to="https://www.instagram.com/pi_network/"
         >
           <FaInstagram />
         </Link>
       </li>
     </ul>
     
      )}

      {
        isSearchOpen && (
            <div
            className={`absolute flex items-end pb-2 h-full bg-[#593b8b] px-3 top-0 z-50 w-[96%] transform transition-transform duration-500 ease-in-out ${
              isSearchOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="w-full h-full flex items-end justify-between py-1 border-b-2 border-[#fab44b]">
              <input
                placeholder="Search"
                className="w-[90%] text-white placeholder:text-white bg-transparent focus:outline-none"
              />
              <button
                className="flex items-center gap-2 text-white bg-transparent active:outline-none shadow-none border-none"
                onClick={() => setIsSearchOpen(false)}
              >
                <HiX />
              </button>
            </div>
          </div>
          )
      }
     
    </div>
  );
};

export default Navbar;
