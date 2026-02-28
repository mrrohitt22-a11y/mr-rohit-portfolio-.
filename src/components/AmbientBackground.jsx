import React, { useEffect, useRef } from 'react';

const AmbientBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: false }); // Optimization for performance
        let animationFrameId; // Track animation frame

        const init = () => {
            // Handle high refresh rate / DPI scaling
            const dpr = window.devicePixelRatio || 1;
            const width = window.innerWidth;
            const height = window.innerHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.scale(dpr, dpr);

            const particles = [];
            const particleCount = 120; // Slightly more particles for dense, soft feel

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 2 + 0.5,
                    // Slower, softer float
                    dx: (Math.random() - 0.5) * 0.3,
                    dy: (Math.random() - 0.5) * 0.3,
                    alpha: Math.random() * 0.4 + 0.1,
                });
            }

            return { particles, width, height };
        };

        let { particles, width, height } = init();

        const render = () => {
            // Soft trail effect instead of harsh clear rect
            ctx.fillStyle = 'rgba(5, 5, 10, 0.4)'; // match base dark bg but semi-transparent
            ctx.fillRect(0, 0, width, height);

            particles.forEach((particle) => {
                particle.x += particle.dx;
                particle.y += particle.dy;

                if (particle.x < 0 || particle.x > width) particle.dx *= -1;
                if (particle.y < 0 || particle.y > height) particle.dy *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                // glowing blur effect natively
                ctx.shadowBlur = 10;
                ctx.shadowColor = `rgba(0, 240, 255, ${particle.alpha})`;
                ctx.fillStyle = `rgba(0, 240, 255, ${particle.alpha})`;
                ctx.fill();
                ctx.closePath();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        const handleResize = () => {
            cancelAnimationFrame(animationFrameId);
            const newInit = init();
            particles = newInit.particles;
            width = newInit.width;
            height = newInit.height;
            render();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="canvas-ambient"
            style={{ position: 'fixed', top: 0, left: 0, zIndex: 1, pointerEvents: 'none' }}
        />
    );
};

export default AmbientBackground;
