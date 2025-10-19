"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const teamMembers = [
  {
    id: 1,
    name: "Rama",
    role: "CEO & Founder",
    image: "/team/andi.png",
  },
  {
    id: 2,
    name: "Dina",
    role: "Marketing Manager",
    image: "/team/dina.png",
  },
  {
    id: 3,
    name: "Andi",
    role: "Pastry Chef",
    image: "/team/rama.png",
  },
  {
    id: 4,
    name: "Sinta",
    role: "Designer",
    image: "/team/sinta.png",
  },
];

export default function TeamsSection() {
  return (
    <section id="teams" className="w-full py-10 px-6 md:px-16 bg-white text-gray-800 pt-15">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Tim Kami
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600"
        >
          Kami bekerja dengan semangat, kreativitas, dan dedikasi untuk menghadirkan dessert terbaik bagi Anda.
        </motion.p>
      </div>

      {/* Grid tim */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
          >
            <div className="relative w-full h-64">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-yellow-500 font-medium">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/teams">
          <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition">
            Lihat Semua Tim
          </button>
        </Link>
      </div>
    </section>
  );
}
