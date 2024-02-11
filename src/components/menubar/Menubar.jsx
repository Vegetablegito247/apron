import React from 'react';
import './menubar.css';
import { NavLink } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { FaCaretDown } from 'react-icons/fa6';

function Menubar() {
    return (
        <div className='menubar'>
            <div className="closebar">
                <div className="nav-logo">
                    <h3>apron</h3>
                </div>
                <div className="menu-close">
                    <MdClose />
                </div>
            </div>
            <div className="menu-cont">
                <ul className="menu-log">
                    <li className="prc-list">
                        <NavLink to='our-story' >Log in</NavLink>
                    </li>
                    <li className="prc-list">
                        <NavLink to='careers' >Start now</NavLink>
                    </li>
                </ul>
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
                    <li className="prc-list">
                        <NavLink to='our-story' >Our story</NavLink>
                    </li>
                    <li className="prc-list">
                        <NavLink to='careers' >Careers</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menubar