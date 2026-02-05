import { useEffect, useRef } from 'react';

const GridBackground = () => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const gridSize = 40; // Size of each grid cell
    const lightRadius = 150; // Radius of the lighting effect

    // Set canvas size to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse position
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw base grid lines (always visible, consistent)
      ctx.strokeStyle = 'rgba(200, 200, 220, 0.12)';
      ctx.lineWidth = 1;

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw radial glow around cursor
      const gradient = ctx.createRadialGradient(
        mousePos.current.x,
        mousePos.current.y,
        0,
        mousePos.current.x,
        mousePos.current.y,
        lightRadius
      );
      
      gradient.addColorStop(0, 'rgba(200, 200, 220, 0.2)');
      gradient.addColorStop(0.5, 'rgba(200, 200, 220, 0.1)');
      gradient.addColorStop(1, 'rgba(200, 200, 220, 0)');

      // Draw the glow effect over the grid
      ctx.fillStyle = gradient;
      ctx.fillRect(
        mousePos.current.x - lightRadius,
        mousePos.current.y - lightRadius,
        lightRadius * 2.5,
        lightRadius * 2.9
      );

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: '#0a0a0a' }}
    />
  );
};

export default GridBackground;
