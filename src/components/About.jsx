import React from 'react';
import { motion } from 'framer-motion';
import { Code, ShoppingBag, Cpu, Cloud, Youtube } from 'lucide-react';

const timelineData = [
    { year: "Phase 1", title: "Tech Learning Phase", icon: <Code />, description: "Mastering the fundamentals of development and system design." },
    { year: "Phase 2", title: "Shopify & E-commerce", icon: <ShoppingBag />, description: "Building profitable storefronts and optimizing conversion rates." },
    { year: "Phase 3", title: "AI Automation", icon: <Cpu />, description: "Integrating LLMs and n8n workflows for hyper-efficiency." },
    { year: "Phase 4", title: "SaaS Building", icon: <Cloud />, description: "Architecting scalable web apps with React and Next.js." },
    { year: "Phase 5", title: "Content Empire", icon: <Youtube />, description: "Scaling a digital presence through automated YouTube channels." },
];

const About = () => {
    return (
        <section id="about" className="section" style={{ padding: '100px 10%' }}>
            <motion.h2
                className="section-title text-gradient"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Origin & Evolution
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '40px' }}>
                {timelineData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="glass-card"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            padding: '30px',
                            borderLeft: '4px solid var(--neon-blue)'
                        }}
                    >
                        <div style={{
                            background: 'rgba(112, 0, 255, 0.2)',
                            padding: '15px',
                            borderRadius: '50%',
                            color: 'var(--neon-blue)'
                        }}>
                            {item.icon}
                        </div>
                        <div>
                            <span style={{ color: 'var(--gold)', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.9rem' }}>{item.year}</span>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', marginTop: '5px' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default About;
