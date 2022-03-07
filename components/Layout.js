import {motion} from "framer-motion";
import React from "react";

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
}

export const Layout = ({ children }) => (
    <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
    >
        {children}
    </motion.main>
)