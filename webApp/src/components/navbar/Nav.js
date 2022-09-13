import React, { useState } from "react";
// Router

import { Link } from "react-router-dom";
// React icons
import { IconContext } from "react-icons";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io5";
import * as FaIcons from "react-icons/fa";
// Actions
import { logout } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
// Styles and Animations
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  const authLinks = (
    <>
      <li className="nav-text">
        <Link to="/home">
          <AiIcons.AiFillHome />
          <span className="nav-span"> Home</span>
        </Link>
      </li>
      <li className="nav-text">
        <Link to="/todo">
          <RiIcons.RiCalendarTodoLine />
          <span className="nav-span"> Todo List</span>
        </Link>
      </li>
      <li className="nav-text">
        <Link to="/expense">
          <FaIcons.FaMoneyCheckAlt />
          <span className="nav-span">Expense Tracker</span>
        </Link>
      </li>
      <li className="nav-text">
        <Link to="/fitness">
          <IoIcons.IoFitnessOutline />
          <span className="nav-span">Fitness Zone</span>
        </Link>
      </li>

      <li className="nav-text">
        <Link onClick={logoutHandler} to="/">
          <AiIcons.AiOutlineLogout />
          <span className="nav-span">Logout</span>
        </Link>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li className="nav-text">
        <Link to="/register">
          <AiIcons.AiOutlineLogin />
          <span className="nav-span">Register</span>
        </Link>
      </li>
      <li className="nav-text">
        <Link to="/login">
          <AiIcons.AiOutlineLogin />
          <span className="nav-span">Login</span>
        </Link>
      </li>
    </>
  );
  const [sidebar, setSidebar] = useState(false);

  // functions
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Navbar>
          <Link to="#" className="menu-bars main">
            <BiIcons.BiMenuAltLeft onClick={showSidebar} />
          </Link>
          <div className='logo-header'>
            <h2 > MySpace</h2>
            <svg className='nav-logo'
                version="1.1"
                xmlns="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid meet"
                viewBox="653 295 292 336">
                <g
                    data-item-type="text"
                    data-item="Business"
                    id="logo__item--business"
                    class="logo__item">
                    <g
                        class="logo__item__inner"
                        transform="translate(685 407.57038158720496) scale(1 1) rotate(0 0 0)">
                        <text
                            data-part-id="logo__item--business"
                            dy="0"
                            dominant-baseline="auto"
                            alignment-baseline="auto"
                            font-family="Montserrat"
                            font-size="32px"
                            fill="#E5E5E5"
                            letter-spacing="0"
                            font-weight="bold"
                            font-style="normal"
                            data-font-family="Montserrat"
                            data-font-weight="bold"
                            data-font-style="normal"
                            data-ttf-url="/builder_assets/fontsttf/font-montserrat-bold-normal.ttf"></text>
                    </g>
                </g>
                <g
                    data-item-type="image"
                    data-item="Image"
                    data-logo-item=""
                    id="logo__item--logo_0"
                    class="logo__item">
                    <g
                        class="logo__item__inner"
                        transform="translate(619.8973577906524 281.5) scale(2.422138382974935 2.422138382974935) rotate(0 0 0)">

                        <g>
                            
                            <polygon
                                fill="#808184"
                                points="74,64.6 112,37.8 105.9,34.3 74,56.7"
                                data-part-id="logo__item--logo_0__1"></polygon>
                            <polygon
                                fill="#808184"
                                points="71,86.3 71.3,86.4 71.4,86.3 125,47.6 125,45.5 120.3,42.9 71,76.2"
                                data-part-id="logo__item--logo_0__2"></polygon>
                            <path
                                fill="#808184"
                                d="M71.8,108.4L71.8,108.4c1.9-1.2,45.2-27.5,53.2-32.7v-8L71.7,98.2L71.8,108.4z"
                                data-part-id="logo__item--logo_0__3"></path>
                            <path
                                fill="#808184"
                                d="M80,129.5c2-1.3,38-23.1,45-27.8v-8.2l-45,26.2V129.5z"
                                data-part-id="logo__item--logo_0__4"></path>
                            <polygon
                                fill="#808184"
                                points="65,37.2 65,37.2 65,44.6 94,27.5 87.4,23.8 65,37.2"
                                data-part-id="logo__item--logo_0__5"></polygon>
                            <path
                                fill="#29A9E1"
                                d="M74,6.9L15,41v68.2l59,34.1l59-34.1V41L74,6.9z M23,97.7l56.7,31.9l0-9.8L23,89.4v-8.7l49,27.6V98.1   L23,72.1V58.8l42.2,23.9l5.8,3.5v-9.9L23,50.4v-4.8l6.9-4.2L73,65v-8.2L36.9,37.2l7-3.9L65,44.9V37l-14-7.7l23-13.3l13.6,7.9   l6.5,3.7l11.7,6.7l6.2,3.6l8.7,5.1l4.5,2.6v2v20.1v8v17.8v8.2v3l-51,29.6l-51-29.6V97.7z"
                                data-part-id="logo__item--logo_0__6"></path>
                        </g>

                    </g>
                </g>
            </svg>
          </div>
        </Navbar>
        
        <NavMenu className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul onClick={showSidebar} className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
          </ul>
        </NavMenu>
      </IconContext.Provider>
    </>
  );
};

const Navbar = styled(motion.div)`
  background-color: #121212;
  color: #fff;
  max-height: 8vh;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  font-family: 'Montserrat',sans-serif;

  .menu-bars.main {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
  }
  .logo {
    margin-right: 45%;
    height: 7rem;

    .st0 {
      fill: #ffff;
    }
  }
  
  .logo-header{
    display: flex;
    margin-left: 40%;

    h2{
      padding: 5px;
    }

    svg{
      width: 28px;
    }
  }
`;

const NavMenu = styled(motion.nav)`
  .menu-bars {
    margin-left: 20px;
  }
  z-index: 100;
`;

export default Nav;
