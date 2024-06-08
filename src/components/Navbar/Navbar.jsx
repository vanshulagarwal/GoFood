import './Navbar.scss';
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowForward, IoClose } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    return (
        <div className="navbar">

            <div className="navDesktop">
                <div className="logo">
                    GO <span>FOOD</span>
                </div>
                <div className="navMenu">
                    <div className="navMenuItem">
                        <div className='dropdownbtn'>Home<IoIosArrowDown /></div>
                        <div className="dropdown">
                            <div className="item"><a href="">Home 1</a></div>
                            <div className="item"><a href="">Home 2</a></div>
                            <div className="item"><a href="">Home 3</a></div>
                        </div>
                    </div>
                    <div className="navMenuItem">
                        <div className='dropdownbtn'>Groceries<IoIosArrowDown /></div>
                        <div className="dropdown">
                            <div className="item"><a href="">Groceries 1</a></div>
                            <div className="item"><a href="">Groceries 2</a></div>
                            <div className="item"><a href="">Groceries 3</a></div>
                        </div>
                    </div>
                    <div className="navMenuItem">
                        <div className='dropdownbtn'>Pages<IoIosArrowDown /></div>
                        <div className="dropdown">
                            <div className="item"><a href="">Pages 1</a></div>
                            <div className="item"><a href="">Pages 2</a></div>
                            <div className="item"><a href="">Pages 3</a></div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="connectWithUs">Connect With Us<IoArrowForward /> </div>
                    <div className="navBtns">
                        <div className="eachBtn">
                            <a href=""><IoSearchOutline /></a>
                        </div>
                        <div className="eachBtn">
                            <a href=""><MdOutlineAccountCircle /></a>
                        </div>
                        <div className="eachBtn">
                            <a href="">
                                <FaRegHeart />
                                <span className='supertext'>2</span>
                            </a>
                        </div>
                        <div className="eachBtn">
                            <a href="">
                                <IoCartOutline />
                                <span className='supertext'>0</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navMobile">
                <div className="logo">
                    GO <span>FOOD</span>
                </div>
                <div className='hamburger'>
                    <span onClick={() => setToggle(!toggle)}><FaBarsStaggered /></span>
                </div>
                <AnimatePresence>
                    {toggle &&
                        <motion.div className="navMenu"
                            initial={{ y: -300, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -300, opacity: 0 }}
                        >
                            <span className='closebtn' onClick={() => {
                                setToggle(!toggle);
                                setActiveDropdown('')
                            }}><IoClose /></span>
                            <div className="navMenuItem">
                                <div className='dropdownbtn' onClick={() => setActiveDropdown('home')}>Home<IoIosArrowDown /></div>
                                {activeDropdown === 'home' &&
                                    <div className="dropdown">
                                        <div className="item"><a href="">Home 1</a></div>
                                        <div className="item"><a href="">Home 2</a></div>
                                        <div className="item"><a href="">Home 3</a></div>
                                    </div>
                                }
                            </div>
                            <div className="navMenuItem">
                                <div className='dropdownbtn' onClick={() => setActiveDropdown('groceries')}>Groceries<IoIosArrowDown /></div>
                                {activeDropdown === 'groceries' &&
                                    <div className="dropdown">
                                        <div className="item"><a href="">Groceries 1</a></div>
                                        <div className="item"><a href="">Groceries 2</a></div>
                                        <div className="item"><a href="">Groceries 3</a></div>
                                    </div>
                                }
                            </div>
                            <div className="navMenuItem">
                                <div className='dropdownbtn' onClick={() => setActiveDropdown('pages')}>Pages<IoIosArrowDown /></div>
                                {activeDropdown === 'pages' &&
                                    <div className="dropdown">
                                        <div className="item"><a href="">Pages 1</a></div>
                                        <div className="item"><a href="">Pages 2</a></div>
                                        <div className="item"><a href="">Pages 3</a></div>
                                    </div>
                                }
                            </div>
                            <div className="navMenuItem">
                                <div className="dropdwnbtn connectWithUs">Connect With Us<IoArrowForward /> </div>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
                <div className="right">
                    <div className="navBtns">
                        <div className="eachBtn">
                            <a href=""><IoSearchOutline /></a>
                        </div>
                        <div className="eachBtn">
                            <a href=""><MdOutlineAccountCircle /></a>
                        </div>
                        <div className="eachBtn">
                            <a href="">
                                <FaRegHeart />
                                <span className='supertext'>2</span>
                            </a>
                        </div>
                        <div className="eachBtn">
                            <a href="">
                                <IoCartOutline />
                                <span className='supertext'>0</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;