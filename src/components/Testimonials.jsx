import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    { name: "John D.", role: "CEO, US Tech Firm", text: "MR ROHIT delivered our complex AI infrastructure months ahead of schedule." },
    { name: "Sanya K.", role: "Founder, Indian Startup", text: "The e-commerce and SaaS knowledge combo made our platform unstoppable." },
    { name: "Mike T.", role: "Angel Investor", text: "His ability to spot trends and execute rapidly is exactly what our portfolio needed." },
];

const Testimonials = () => {
    return (
        <section className="section" style={{ padding: '100px 10%' }}>
            <motion.h2
                className="section-title text-gradient"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Signal & Trust
            </motion.h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginTop: '50px' }}>
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        className="glass-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        style={{ flex: '1 1 300px', padding: '40px' }}
                    >
                        <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '30px' }}>
                            "{t.text}"
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--royal-purple)' }} />
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--neon-blue)' }}>{t.name}</h4>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t.role}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
