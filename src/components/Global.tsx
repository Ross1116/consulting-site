"use client";
import { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { Loader } from "lucide-react";
const preloadWorldMap = () => {
  import("./ui/world-map").catch(() => {});
};
const DynamicWorldMap = dynamic(
  () => import("./ui/world-map").then((mod) => mod.WorldMap),
  {
    loading: () => <Loader /> ,
    ssr: false,
  }
);
export default function Global() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const hasStartedLoading = useRef(false);
  const mapData = useMemo(
    () => [
      {
        start: { lat: -34.9285, lng: 138.6007 },
        end: { lat: -37.8136, lng: 144.9631 },
      },
      {
        start: { lat: -34.9285, lng: 138.6007 },
        end: { lat: -35.2809, lng: 149.13 },
      },
      {
        start: { lat: -34.9285, lng: 138.6007 },
        end: { lat: 13.0827, lng: 80.2707 },
      },
      {
        start: { lat: -34.9285, lng: 138.6007 },
        end: { lat: 1.3521, lng: 103.8198 },
      },
      {
        start: { lat: -34.9285, lng: 138.6007 },
        end: { lat: 37.7749, lng: -122.4194 },
      },
      {
        start: { lat: -34.9285, lng: 138.6007 },
        end: { lat: 40.7128, lng: -74.006 },
      },
    ],
    []
  );
  useEffect(() => {
    const handleScroll = () => {
      if (!hasStartedLoading.current) {
        hasStartedLoading.current = true;
        preloadWorldMap();
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    const timer = setTimeout(() => {
      if (!hasStartedLoading.current) {
        hasStartedLoading.current = true;
        preloadWorldMap();
      }
    }, 3000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "200px 0px" }
    );
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  return (
    <section ref={sectionRef} className="py-24 container mx-auto">
      <motion.div
        className="container mx-auto px-6 md:px-12 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          We Deliver Solutions Worldwide
        </h2>
        <p className="text-xl text-white/80 text-center max-w-4xl mx-auto">
          With clients in over 50+ countries, we bring innovation everywhere.
          Our global network ensures we understand local markets while
          delivering world-class solutions.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {isInView ? <DynamicWorldMap dots={mapData} /> : <Loader /> }
      </motion.div>
    </section>
  );
}