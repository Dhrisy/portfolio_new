import React, { useState } from 'react';
import "./Sidebar.scss"

import ToggleButton from './togglebutton/ToggleButton';
import { motion } from 'framer-motion';
import SideOptions from './sideoptions/SideOptions';

function Sidebar() {
    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(2500px at 50px 50px)",
            transition: {
                // type: "spring",
                
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                // delay: 0,
                // type: "spring",
                
            }
        }
    }
    return (
        <motion.div className="sidebar"
            variants={variants}
            animate={open ? "open" : "closed"}
            >
            <motion.div className="bg">
                <SideOptions/>
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    );
}

export default Sidebar;