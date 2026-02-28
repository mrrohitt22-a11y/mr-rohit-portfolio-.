import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, ease: 'easeOut' } }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'var(--bg-navy)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000,
            }}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    fontSize: '3rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    letterSpacing: '0.2em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                }}
            >
                <span className="text-gradient">MR ROHIT</span>
            </motion.div>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: 200 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--neon-blue), var(--royal-purple))',
                    marginTop: '20px',
                    boxShadow: '0 0 10px var(--neon-blue)',
                }}
            />
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                style={{
                    marginTop: '30px',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3em',
                    fontSize: '0.8rem'
                }}
            >
                Initializing AI Empire
            </motion.p>
        </motion.div>
    );
};

export default Loader;
