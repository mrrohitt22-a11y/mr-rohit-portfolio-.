import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = "Building AI Powered Digital Empires";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '0 10%' }}>
            <div style={{ flex: 1, zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.5 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}
                >
                    <Terminal size={20} color="var(--neon-blue)" />
                    <span style={{ color: 'var(--neon-blue)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
                        System Initialized
                    </span>
                </motion.div>

                <h1 style={{ fontSize: '4.5rem', lineHeight: '1.2', marginBottom: '20px', minHeight: '130px' }}>
                    {typedText}
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        style={{ color: 'var(--neon-blue)', display: 'inline-block', width: '20px' }}
                    >_</motion.span>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 5.5 }}
                    style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px' }}
                >
                    Full Stack Developer <span style={{ color: 'var(--royal-purple)' }}>|</span> SaaS Architect <span style={{ color: 'var(--gold)' }}>|</span> AI Automation Expert
                </motion.p>

                <motion.a
                    href="#contact"
                    className="interactive magnetic-btn"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 6 }}
                >
                    Work With MR ROHIT <ArrowRight size={20} />
                </motion.a>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 4 }}
                style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', zIndex: 10 }}
            >
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'relative',
                        width: '450px',
                        height: '450px',
                        borderRadius: '30%',
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--neon-blue)',
                        boxShadow: '0 0 40px rgba(0, 240, 255, 0.2), inset 0 0 20px rgba(112, 0, 255, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}
                >
                    {/* We assume avatar.png is in public folder */}
                    <img src="/avatar.png" alt="MR ROHIT Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
