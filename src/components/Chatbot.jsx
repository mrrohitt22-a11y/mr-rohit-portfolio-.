import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setTimeout(() => {
                setMessages([{
                    sender: 'ai',
                    text: "Hi, I'm MR ROHIT’s AI Assistant. How can we build your digital empire?"
                }]);
            }, 500);
        }
    }, [isOpen]);

    return (
        <>
            <motion.button
                className="interactive glass-card"
                onClick={() => setIsOpen(true)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px var(--neon-blue)' }}
                style={{
                    position: 'fixed',
                    bottom: '40px',
                    right: '40px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9000,
                    background: 'linear-gradient(135deg, var(--neon-blue), var(--royal-purple))',
                    padding: 0
                }}
            >
                <MessageSquare color="#fff" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="glass-card"
                        style={{
                            position: 'fixed',
                            bottom: '120px',
                            right: '40px',
                            width: '350px',
                            height: '500px',
                            zIndex: 9001,
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(112,0,255,0.2)'
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '20px',
                            background: 'rgba(255,255,255,0.05)',
                            borderBottom: '1px solid var(--glass-border)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--neon-blue)', boxShadow: '0 0 10px var(--neon-blue)' }} />
                                <span style={{ fontWeight: 'bold' }}>Rohit AI Nexus</span>
                            </div>
                            <button
                                className="interactive"
                                onClick={() => setIsOpen(false)}
                                style={{ background: 'transparent', padding: '5px' }}
                            >
                                <X color="var(--text-secondary)" size={20} />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {messages.map((m, i) => (
                                <div key={i} style={{
                                    alignSelf: m.sender === 'ai' ? 'flex-start' : 'flex-end',
                                    background: m.sender === 'ai' ? 'rgba(255,255,255,0.1)' : 'var(--royal-purple)',
                                    padding: '12px 18px',
                                    borderRadius: '15px',
                                    borderBottomLeftRadius: m.sender === 'ai' ? 0 : '15px',
                                    borderBottomRightRadius: m.sender === 'user' ? 0 : '15px',
                                    maxWidth: '85%',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.4'
                                }}>
                                    {m.text}
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div style={{ padding: '20px', borderTop: '1px solid var(--glass-border)' }}>
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="interactive"
                                style={{
                                    width: '100%',
                                    background: 'rgba(0,0,0,0.3)',
                                    border: '1px solid var(--glass-border)',
                                    color: '#fff',
                                    padding: '12px 15px',
                                    borderRadius: '25px',
                                    outline: 'none',
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && e.target.value) {
                                        setMessages([...messages, { sender: 'user', text: e.target.value }]);
                                        e.target.value = '';
                                        setTimeout(() => {
                                            setMessages(prev => [...prev, { sender: 'ai', text: "Data received. Connecting to mainframe..." }]);
                                        }, 1000);
                                    }
                                }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
