import React, { useEffect, useRef } from 'react';
const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const PARTICLE_NUM = 500;
    const PARTICLE_BASE_RADIUS = 0.5;
    const FL = 500;
    const DEFAULT_SPEED = 2;
    const BOOST_SPEED = 300;

    let canvas, context, canvasWidth, canvasHeight, centerX, centerY;
    let mouseX, mouseY;
    let speed = DEFAULT_SPEED;
    let targetSpeed = DEFAULT_SPEED;
    const particles = [];

    const randomizeParticle = (p) => {
      // Add your particle randomization logic here
      p.x = Math.random() * canvasWidth;
      p.y = Math.random() * canvasHeight;
      p.z = Math.random() * 500;
      return p;
    };

    const Particle = function() {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.pastZ = 0;
    };

    const initParticles = () => {
      for (let i = 0; i < PARTICLE_NUM; i++) {
        const particle = randomizeParticle(new Particle());
        particle.z -= 500 * Math.random();
        particles.push(particle);
      }
    };

    const loop = () => {
      context.save();
      context.fillStyle = 'rgb(0, 0, 0)';
      context.fillRect(0, 0, canvasWidth, canvasHeight);
      context.restore();

      speed += (targetSpeed - speed) * 0.01;

      context.beginPath();
      particles.forEach((p) => {
        p.pastZ = p.z;
        p.z -= speed;

        if (p.z <= 0) {
          randomizeParticle(p);
          return;
        }

        const f = FL / p.z;
        const x = centerX + (p.x - centerX) * f;
        const y = centerY + (p.y - centerY) * f;
        const r = PARTICLE_BASE_RADIUS * f;

        const pf = FL / p.pastZ;
        const px = centerX + (p.x - centerX) * pf;
        const py = centerY + (p.y - centerY) * pf;
        const pr = PARTICLE_BASE_RADIUS * pf;

        context.moveTo(px, py);
        context.arc(px, py, pr, 0, Math.PI * 2, true);
      });

      context.fill();
      requestAnimationFrame(loop);
    };

    const resizeCanvas = () => {
      canvasWidth = canvas.width = window.innerWidth;
      canvasHeight = canvas.height = window.innerHeight;
      centerX = canvasWidth / 2;
      centerY = canvasHeight / 2;
      context = canvas.getContext('2d');
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseDown = () => {
      targetSpeed = BOOST_SPEED;
    };

    const handleMouseUp = () => {
      targetSpeed = DEFAULT_SPEED;
    };

    if (canvasRef.current) {
      canvas = canvasRef.current;
      resizeCanvas();
      initParticles();

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('resize', resizeCanvas);

      loop();
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" style={{ position: 'absolute', top: 0, left: 0 }} />;
};

export default ParticleCanvas;
