import React from 'react';
import { motion } from 'framer-motion';

function SideOptions() {
  const variants ={
    open: {
      transition: {
        staggerChildren: 0.5
      }
    },
    closed: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
  const itemvariants ={
    open: {
      transition: {
        staggerChildren: 0.5
      },
      // whileHover :{scale: 0.2, opacity: 0}
    },
    closed: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
    const items = [
        "Homepage",
        "Skills",
        "Portfolio",
        "Contact",
        
      ];
      return (
        <motion.div className='links'
        variants={variants}
        // animate= {open ? "open" : "closed"}
        >
          {items.map((item) => {
            return <motion.a href={`#${item}`} key={item}
            variants={itemvariants}
            animate={open ? "open" : "closed"}
            whileHover={{opacity:0.8, scale:1.5}}
            >{item}</motion.a>
          })}
        </motion.div>
      );
}

export default SideOptions;