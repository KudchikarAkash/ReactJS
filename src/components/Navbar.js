//import liraries
import React from 'react';
import { FaFacebook, FaSearch, FaHome, FaRegFlag, FaVideo, FaUsers, FaGamepad, FaPlus, FaFacebookMessenger, FaBell, FaCaretDown } from "react-icons/fa";
// create a component
const Navbar = () => {
    return (
        <div className="navbar">
        <div className="navbar__first">
           <div className="navbar__first-logo">
                <FaFacebook className="navbar__logo"/>
           </div>
           <div className="navbar__first-search">
               <input type="text" className="navbar__first-searchbar" placeholder="Search Facebook" />
                    <FaSearch className="navar__searchIcon"/>
           </div>
        </div>
        <div className="navbar__middle">
            <span className="middleIcon">
                <FaHome className="navbar_middle-icons" />
            </span>
            <span className="middleIcon">
                    <FaRegFlag className="navbar_middle-icons" />
                    <span className="navbar__notify">3</span>
            </span>
            <span className="middleIcon">
                    <FaVideo className="navbar_middle-icons" />
                    <span className="navbar__notify">10</span>
            </span>
            <span className="middleIcon">
                <FaUsers className="navbar_middle-icons" />
                    <span className="navbar__notify">20</span>
            </span>
            <span className="middleIcon">
                <FaGamepad className="navbar_middle-icons" />
                    <span className="navbar__notify">5</span>
            </span>
        </div>
        <div className="navbar__last">
            <span className="navbar__last-section">
                    <FaPlus className="" />
            </span>
            <span className="navbar__last-section">
                    <FaFacebookMessenger className="" />
            </span>
            <span className="navbar__last-section">
                    <FaBell className="" />
            </span>
            <span className="navbar__last-section">
                    <FaCaretDown className="" />
            </span>
        </div>
        </div>
    );
};



//make this component available to the app
export default Navbar;
