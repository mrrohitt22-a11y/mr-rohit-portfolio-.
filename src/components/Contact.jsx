import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('success'), 2000);
    };

    return (
        <section id="contact" className="section" style={{ padding: '100px 10%' }}>
            <motion.h2
                className="section-title text-gradient"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Initiate Protocol
            </motion.h2>

            <motion.div
                className="glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ maxWidth: '600px', margin: '60px auto 0', padding: '50px' }}
            >
                {status === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ textAlign: 'center', padding: '40px 0' }}
                    >
                        <div style={{
                            width: '80px', height: '80px', borderRadius: '50%',
                            background: 'var(--neon-blue)', margin: '0 auto 20px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 0 30px var(--neon-blue)'
                        }}>
                            <Send size={40} color="var(--bg-navy)" />
                        </div>
                        <h3 style={{ fontSize: '2rem', color: 'var(--neon-blue)' }}>Transmission Received</h3>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>MR ROHIT will review your data shortly.</p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Identify</label>
                            <input
                                type="text"
                                required
                                className="interactive"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--glass-border)',
                                    color: '#fff',
                                    padding: '15px 20px',
                                    borderRadius: '10px',
                                    fontSize: '1.1rem',
                                    outline: 'none',
                                    transition: '0.3s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--neon-blue)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Frequency (Email)</label>
                            <input
                                type="email"
                                required
                                className="interactive"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--glass-border)',
                                    color: '#fff',
                                    padding: '15px 20px',
                                    borderRadius: '10px',
                                    fontSize: '1.1rem',
                                    outline: 'none',
                                    transition: '0.3s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--neon-blue)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Message Code</label>
                            <textarea
                                required
                                rows="4"
                                className="interactive"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--glass-border)',
                                    color: '#fff',
                                    padding: '15px 20px',
                                    borderRadius: '10px',
                                    fontSize: '1.1rem',
                                    outline: 'none',
                                    transition: '0.3s',
                                    resize: 'none'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--neon-blue)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                            />
                        </div>

                        <button
                            type="submit"
                            className="interactive magnetic-btn"
                            style={{ marginTop: '20px', justifyContent: 'center' }}
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Transmitting...' : 'Send Uplink'}
                        </button>
                    </form>
                )}
            </motion.div>
        </section>
    );
};

export default Contact;
