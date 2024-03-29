import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import './navbar.css';

function Navbar() {
    // Navigation to menu
    const navigate = useNavigate()

    const handleMenu = () => {
        navigate('/menu');
    }

    return (
        <nav>
            <div className="navCont">
                <div className="nav-logo">
                    <h3>apron</h3>
                </div>
                <div className="business-cont">
                    <ul className="ul-bus">
                        <li className="bus-list">
                            <NavLink to='/' >Business</NavLink>
                        </li>
                        <li className="bus-list">
                            <NavLink to='/account' >Finance Professionals</NavLink>
                        </li>
                        <li className="bus-list">
                            <NavLink to='payroll' >Payroll</NavLink>
                        </li>
                        <li className="bus-list">
                            <NavLink to='pay-by-card' >Pay by card</NavLink>
                        </li>
                        <li className="bus-list">
                            <NavLink to='pay-global' >Pay global</NavLink>
                        </li>
                    </ul>
                    <ul className="ul-abt">
                        <li className="prc-list">
                            <NavLink to='pricing' >Pricing</NavLink>
                        </li>
                        <li className="abt-list">
                            <div className="about">
                                <span>About</span>
                                <FaCaretDown />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="log-and-start">
                    <div className="log">
                        <NavLink>Login</NavLink>
                    </div>
                    <div className="start">
                        <NavLink>Start now</NavLink>
                    </div>
                </div>
                <div onClick={handleMenu} className="burger">
                    <GiHamburgerMenu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar