"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); 
        }
      });
    }, options);
    const heroElement = document.querySelector('.hero-section');
    if (heroElement) {
      observer.observe(heroElement);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!isInView || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles: Particle[] = [];
    const particleCount = Math.min(100, Math.floor(window.innerWidth / 20)); 
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const initParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => initParticles());
    } else {
      setTimeout(initParticles, 100);
    }
    let animationFrameId: number;
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    }
    animationFrameId = requestAnimationFrame(animate);
    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView]); 
  return (
    <div className="relative h-screen w-full overflow-hidden hero-section">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="relative z-10 h-full w-full px-6 py-12 sm:px-12 lg:px-16 container mx-auto">
        <div className="flex flex-col justify-center h-full">
          <div className="grid grid-cols-1 gap-y-12 md:gap-y-16">
            <motion.div
              className="max-w-[85%] sm:max-w-[60%] lg:max-w-[50%] self-start"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold">
                Expertise for Your Civil Service Journey
              </h1>
            </motion.div>
            <motion.div
              className="self-end ml-auto max-w-[85%] sm:max-w-[60%] lg:max-w-[40%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-lg sm:text-xl text-gray-400 pb-6">
                We are a team of dedicated mentors committed to guiding aspiring
                civil servants with expert insights, strategic preparation, and
                personalized support to help them succeed in their journey.
              </p>
              <Link className="font-bold flex space-x-2" href="">
                <p>Check us out </p>
                <ChevronRight className="bg-purple-500" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}