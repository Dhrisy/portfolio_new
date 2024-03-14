import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Test() {
  const [open, setOpen] = useState(false);
  const variants = {
    visible: {opacity:1, 
      transition:{stiffness:100}},
    hidden: {opacity:0}
  }

  const items =[ 
    "item1", "item2", "item3", "item4"
  ]
  return (
    <div className='course'>
        <motion.ul 
        variants={variants}
        initial= "hidden"
        animate= "visible"
        transition={{ delay:2}}
        
        >
          
          {items.map((item) => {
 return <motion.li key={item}>{item}n</motion.li>
          })}
        </motion.ul>
        {/* <button onClick={() => {
          setOpen(prev => !prev);
        }}>clikc here</button> */}
    </div>
  );
}

export default Test;