import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Lightbulb, TrendingUp, Handshake, Zap } from 'lucide-react';

const targets = [
    { group: "USA Clients", icon: <Globe />, text: "Scalable global tech solutions." },
    { group: "Indian Startups", icon: <Lightbulb />, text: "MVP building and rapid scaling." },
    { group: "Investors", icon: <TrendingUp />, text: "High-ROI digital assets." },
    { group: "Agencies", icon: <Handshake />, text: "White-label AI & dev services." },
    { group: "SaaS Owners", icon: <Zap />, text: "Architecture and optimization." },
];

const Services = () => {
    return (
        <section className="section" style={{ minHeight: '100vh', padding: '100px 10%' }}>
            <motion.h2
                className="section-title text-gradient"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Target Partnerships
            </motion.h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '40px',
                marginTop: '60px'
            }}>
                {targets.map((t, i) => (
                    <motion.div
                        key={i}
                        className="glass-card interactive"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ y: -10, borderColor: 'var(--neon-blue)', boxShadow: "0 10px 30px rgba(0, 240, 255, 0.2)" }}
                        style={{ padding: '40px', textAlign: 'center', cursor: 'none' }}
                    >
                        <div style={{ color: 'var(--royal-purple)', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                            {React.cloneElement(t.icon, { size: 40 })}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{t.group}</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>{t.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
