import React from 'react';
import "./Navbar.scss"
import linkedin from "/linkedin.png"
import insta from "/instagram.png"
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';

function NavBar() {
  return (
    <div className='navbar'>
      {/* sidebar */}
      <Sidebar/>
<div className='wrapper'>
    <motion.span
    initial={{opacity : 0, scale: 0.5}}
    animate={{opacity:1, scale: 0.5}}
    transition={{duration:0.5}}
    >Lama dev</motion.span>
    <div className="social">
        <a href=""><img src={insta} alt="Instagram" /></a>
        <a href=""><img src={linkedin} alt="LinkedIn" /></a>
        
</div>
    </div>
    </div>
  );
}

export default NavBar;