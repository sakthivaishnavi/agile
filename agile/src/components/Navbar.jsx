import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import kec from '../assets/kec.jpeg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring', stiffness: 200, damping: 15,
            },
        },
    };

    const textHover = {
        scale: 1.1,
        transition: { duration: 0.3 },
    };

    return (
        <div id='navbar' className='flex items-center justify-between bg-white px-8 fixed w-full '>
                        <div className='flex flex-shrink-0 items-center text-5xl font-bold cursor-pointer mt-1'>
                <a href="#home">
                    <img src={kec} width={24} height={24} />
                </a>
            </div>
          
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial="hidden" animate="visible" exit="hidden" variants={menuVariants}
                        className={`lg:flex items-center justify-center gap-2.5 text-xl cursor-pointer flex flex-col absolute top-6 right-0 shadow-lg rounded-2xl py-4 px-7 lg:flex-row`}>
                        
                        <motion.a href="#home" whileHover={textHover} onClick={() => setIsOpen(false)}>Home</motion.a>
                        <motion.a href="#cart" whileHover={textHover} onClick={() => setIsOpen(false)}>Cart</motion.a>
                        <motion.a href="#contact-us" whileHover={textHover} onClick={() => setIsOpen(false)}>Contact Us</motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className='hidden lg:flex items-center justify-center gap-9 text-xl cursor-pointer'>
                <motion.a href="#home" whileHover={textHover} onClick={() => setIsOpen(false)}>Home</motion.a>
                <motion.a href="#cart" whileHover={textHover} onClick={() => setIsOpen(false)}>Cart</motion.a>
                <motion.a href="#contact-us" whileHover={textHover} onClick={() => setIsOpen(false)}>Contact Us</motion.a>
            </div>
        </div>
    );
}

export default Navbar;
