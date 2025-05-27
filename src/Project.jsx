import React from 'react'
import Skills from './assets/Skills'
import Navbar from './assets/Navbar'
import Projectsgrid from './assets/Projectsgrid'
import { motion } from 'framer-motion';

function Project() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-screen"
        >
            <div className='relative w-full min-h-screen '>
                <div
                    className='absolute top-0 left-0 w-full h-full z-0'
                    style={{
                        backgroundImage: "url('/pbg.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />

                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10'></div>

                <div className='relative z-10 w-full h-full sm:p-2'>
                    <Navbar />
                    <Skills />
                    <Projectsgrid />
                </div>
            </div>
        </motion.div>
    )
}

export default Project
