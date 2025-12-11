import React, { useEffect, useRef } from 'react';

const BubbleBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const bubblesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create bubbles
    const createBubbles = () => {
      bubblesRef.current = [];
      const numBubbles = Math.floor((canvas.width * canvas.height) / 15000); // Responsive bubble count
      
      for (let i = 0; i < numBubbles; i++) {
        bubblesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 6 + 2,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          opacity: Math.random() * 0.6 + 0.2,
          hue: Math.random() * 60 + 200, // Blue to cyan range
        });
      }
    };

    createBubbles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      bubblesRef.current.forEach((bubble, index) => {
        // Update position
        bubble.x += bubble.vx;
        bubble.y += bubble.vy;
        
        // Bounce off edges
        if (bubble.x <= bubble.radius || bubble.x >= canvas.width - bubble.radius) {
          bubble.vx *= -1;
        }
        if (bubble.y <= bubble.radius || bubble.y >= canvas.height - bubble.radius) {
          bubble.vy *= -1;
        }
        
        // Keep bubbles within bounds
        bubble.x = Math.max(bubble.radius, Math.min(canvas.width - bubble.radius, bubble.x));
        bubble.y = Math.max(bubble.radius, Math.min(canvas.height - bubble.radius, bubble.y));
        
        // Pulse effect
        const time = Date.now() * 0.001;
        const pulseOpacity = bubble.opacity + Math.sin(time + index) * 0.1;
        
        // Draw bubble
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        
        // Gradient fill
        const gradient = ctx.createRadialGradient(
          bubble.x - bubble.radius * 0.3,
          bubble.y - bubble.radius * 0.3,
          0,
          bubble.x,
          bubble.y,
          bubble.radius
        );
        
        gradient.addColorStop(0, `hsla(${bubble.hue}, 70%, 80%, ${pulseOpacity})`);
        gradient.addColorStop(0.7, `hsla(${bubble.hue}, 60%, 50%, ${pulseOpacity * 0.6})`);
        gradient.addColorStop(1, `hsla(${bubble.hue}, 50%, 30%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Subtle glow
        ctx.shadowColor = `hsla(${bubble.hue}, 70%, 60%, ${pulseOpacity * 0.5})`;
        ctx.shadowBlur = bubble.radius * 2;
        ctx.fill();
        
        // Reset shadow
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default BubbleBackground;