import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ventures = [
    { id: 1, title: 'E-commerce Empire', category: 'Drop & Brand', stats: 'MRR: $100k+', color: 'var(--neon-blue)' },
    { id: 2, title: 'AI Ad Agency', category: 'B2B Services', stats: 'Clients: 50+', color: 'var(--royal-purple)' },
    { id: 3, title: 'YouTube Automation', category: 'Content Matrix', stats: 'Views: 10M+', color: 'var(--gold)' },
    { id: 4, title: 'SaaS Alpha', category: 'Productivity Tool', stats: 'Users: 10k+', color: '#ff0055' },
];

const Ventures = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    // Apply useSpring for ultra-smooth buttery luxury scrolling
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    const x = useTransform(smoothProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section
            ref={targetRef}
            className="section"
            style={{
                height: '300vh', // long scroll to allow horizontal movement
                padding: '0',
                position: 'relative'
            }}
        >
            <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                <motion.h2
                    className="section-title text-gradient"
                    style={{ position: 'absolute', top: '100px', left: '10%', zIndex: 10 }}
                >
                    Active Ventures
                </motion.h2>

                <motion.div style={{ x, display: 'flex', gap: '50px', paddingLeft: '10%' }}>
                    {ventures.map((v, i) => (
                        <motion.div
                            key={v.id}
                            className="glass-card interactive"
                            whileHover={{ scale: 1.05, borderColor: v.color, boxShadow: `0 0 40px ${v.color}` }}
                            transition={{ duration: 0.3 }}
                            style={{
                                width: '600px',
                                height: '400px',
                                flexShrink: 0,
                                padding: '40px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: v.color }} />

                            <div>
                                <span style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px' }}>{v.category}</span>
                                <h3 style={{ fontSize: '2.5rem', marginTop: '10px' }}>{v.title}</h3>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileHover={{ opacity: 1, y: 0 }}
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '20px',
                                    borderRadius: '15px',
                                    border: `1px solid ${v.color}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    color: v.color
                                }}
                            >
                                {v.stats}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Ventures;
