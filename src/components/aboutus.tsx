"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="abot" className="w-full py-20 px-6 md:px-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/abotus.jpg"
            alt="About our dessert"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tentang Kami
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Kami adalah brand dessert lokal yang menghadirkan cita rasa manis dan segar dari bahan-bahan alami berkualitas tinggi. 
            Setiap produk kami dibuat dengan cinta, memastikan setiap gigitan membawa kebahagiaan.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Dari minuman sehat hingga dessert lembut, kami percaya bahwa kebahagiaan bisa datang dari hal sederhana — seperti satu sendok dessert yang sempurna.
          </p>
          <Link href="/about">
            <button className="mt-4 px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition">
              Pelajari Lebih Lanjut
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
