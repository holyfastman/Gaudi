"use client";

import { useEffect, useRef } from "react";

interface SparklesCoreProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  speed?: number;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  phase: number;
  drift: number;
}

export function SparklesCore({
  id,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 900,
  particleColor = "#ffffff",
  speed = 0.5,
  className,
}: SparklesCoreProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let particles: Particle[] = [];
    let animation = 0;
    let width = 0;
    let height = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const makeParticles = () => {
      const densityScale = Math.max(0.35, particleDensity / 1200);
      const count = Math.min(460, Math.max(90, Math.round((width * height / 3400) * densityScale)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: minSize + Math.random() * Math.max(0.1, maxSize - minSize),
        alpha: 0.16 + Math.random() * 0.74,
        phase: Math.random() * Math.PI * 2,
        drift: (Math.random() - 0.5) * 0.11,
      }));
    };

    const resize = () => {
      const ratio = Math.min(2, window.devicePixelRatio || 1);
      const bounds = canvas.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      makeParticles();
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      if (background !== "transparent") {
        context.fillStyle = background;
        context.fillRect(0, 0, width, height);
      }

      context.fillStyle = particleColor;
      for (const particle of particles) {
        if (!reducedMotion) {
          particle.y -= speed * 0.035;
          particle.x += particle.drift;
          if (particle.y < -3) particle.y = height + 3;
          if (particle.x < -3) particle.x = width + 3;
          if (particle.x > width + 3) particle.x = -3;
        }
        const pulse = reducedMotion ? 1 : 0.52 + Math.sin(time * 0.0016 + particle.phase) * 0.48;
        context.globalAlpha = particle.alpha * Math.max(0.08, pulse);
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
      if (!reducedMotion) animation = window.requestAnimationFrame(draw);
    };

    resize();
    draw(0);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animation);
    };
  }, [background, maxSize, minSize, particleColor, particleDensity, speed]);

  return <canvas ref={canvasRef} id={id} className={className} aria-hidden="true" />;
}
