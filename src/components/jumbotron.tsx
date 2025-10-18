"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    image: "/herobg/bg1.jpg",
    title: "Fresh Dessert Everyday",
    subtitle: "Nikmati manisnya setiap hari dengan bahan segar pilihan.",
  },
  {
    id: 2,
    image: "/herobg/bg4.jpg",
    title: "Healthy & Tasty Drinks",
    subtitle: "Minuman segar yang memanjakan lidah dan menyehatkan tubuh.",
  },
  {
    id: 3,
    image: "/herobg/bg5.jpg",
    title: "Sweet Moments with Us",
    subtitle: "Setiap gigitan adalah cerita manis yang tak terlupakan.",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="utama" className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }} //fade
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt={slides[index].title}
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {slides[index].title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-2xl mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {slides[index].subtitle}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#menu">
                <Button
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold rounded-full px-8 py-6 text-lg"
                
              >
                Lihat Menu 🍰
              </Button>
              </a>
              
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-yellow-400 scale-125" : "bg-white/60 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </section>
  );
}