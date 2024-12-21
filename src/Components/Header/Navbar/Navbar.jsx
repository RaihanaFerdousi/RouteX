import { useState } from 'react';
import logo from '../../../assets/icons/Logo.png';
import icon1 from '../../../assets/icons/1.png'
import arrow from '../../../assets/icons/arrow.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <nav className="flex flex-wrap items-center justify-between pt-5 px-5">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-8 w-8" />
                    <h3 className="text-[#034833] text-lg sm:text-xl lg:text-2xl font-bold">RouteX</h3>
                </div>

                <ul className="hidden lg:flex text-[#034833] list-none gap-4 sm:gap-6">
                    <NavLink className="flex items-center gap-2 font-bold">
                        <NavLink to="/">Home</NavLink>
                        <img src={icon1} alt="home icon" />
                    </NavLink>
                    
                    <li className="relative">
                        <div className="flex items-center gap-2 font-bold">
                            <NavLink>About Us</NavLink>
                            <img 
                                src={icon1} 
                                alt="dropdown" 
                                className="cursor-pointer"
                                onClick={toggleDropdown}
                            />
                        </div>
                        
                        {isDropdownOpen && (
                            <ul id="dropdown" className="absolute bg-white text-black mt-2 p-2 rounded-md shadow-lg z-50">
                                <li className="p-2 hover:bg-gray-200">
                                    <NavLink>Discover Us</NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    
                    <NavLink className="flex items-center gap-2 font-bold">
                        Projects
                        <img src={icon1} alt="projects icon" />
                    </NavLink>

                    <NavLink className="flex items-center gap-2 font-bold">
                        Blog
                        <img src={icon1} alt="blog icon" />
                    </NavLink>

                    <NavLink className="flex items-center gap-2 font-bold">
                        Page
                        <img src={icon1} alt="page icon" />
                    </NavLink>

                    <NavLink className="flex items-center gap-2 font-bold">
                        Contact
                        <img src={icon1} alt="contact icon" />
                    </NavLink>
                </ul>

                <button className="bg-[#83CD20] font-bold px-5 py-2 lg:py-4 rounded-full text-white flex items-center whitespace-nowrap mt-4 lg:mt-0">
                    Get An Appointment 
                    <img src={arrow} alt="arrow icon" className="ml-2 h-4 w-4" />
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
