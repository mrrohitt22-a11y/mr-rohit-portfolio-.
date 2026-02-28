import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'React / Next.js', level: 95 },
    { name: 'AI Tools & LLM Integration', level: 90 },
    { name: 'Shopify & E-commerce Systems', level: 85 },
    { name: 'n8n Automation & Workflow', level: 92 },
    { name: 'App Development (Full Stack)', level: 88 },
    { name: 'UI/UX & Conversion Design', level: 90 },
];

const TiltCard = ({ skill, index }) => {
    return (
        <motion.div
            className="glass-card interactive"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
            whileHover={{
                scale: 1.03,
                rotateX: 5,
                rotateY: -5,
                boxShadow: "0 15px 35px rgba(0, 240, 255, 0.15)"
            }}
            style={{
                padding: '40px 30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                cursor: 'none'
            }}
        >
            <h3 style={{ fontSize: '1.2rem', textAlign: 'center' }}>{skill.name}</h3>
            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    style={{ height: '100%', background: 'linear-gradient(90deg, var(--neon-blue), var(--royal-purple))' }}
                />
            </div>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Proficiency: {skill.level}%</span>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="section" style={{ padding: '100px 10%' }}>
            <motion.h2
                className="section-title text-gradient"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', alignSelf: 'center' }}
            >
                Arsenal of Technologies
            </motion.h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px',
                marginTop: '60px'
            }}>
                {skills.map((skill, index) => (
                    <TiltCard key={index} skill={skill} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
