import React from 'react';
import {NavLink} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DialpadIcon from '@mui/icons-material/Dialpad';
import InfoIcon from '@mui/icons-material/Info';
import "../component_styles/Menu.css";

const Menu = () => {
    return (
        <div>
           <nav>
               <ul>
                   <li><NavLink to='/'>Logo</NavLink></li>
                   <li><NavLink to="/">Home <span><HomeIcon/></span></NavLink></li>
                   <li><NavLink to="/projects">Projects <span><LaptopMacIcon/></span></NavLink></li>
                   <li><NavLink to="/Dashboard">Dashboard <span><DashboardIcon/></span></NavLink></li>
                    <li><NavLink to="/contact">Contact <span><DialpadIcon/></span></NavLink></li> 
                   <li><NavLink to="/about">About <span><InfoIcon/></span></NavLink></li>
               </ul>
           </nav>
        </div>
    )
}

export default Menu