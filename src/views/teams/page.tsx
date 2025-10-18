"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/components/team";

export default function TeamsPage() {
  return (
    <main className="min-h-screen text-gray-800 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition"
        >
          <span className="text-2xl">←</span>
          <span className="font-medium">Kembali</span>
        </Link>
      </div>
      <section className="max-w-6xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Tim Hebat Kami
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600"
        >
          Setiap anggota tim kami berkontribusi untuk menjaga kualitas dan inovasi produk kami.
        </motion.p>
      </section>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
          >
            <div className="relative w-full h-72">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-yellow-500 font-medium mb-3">{member.role}</p>
              <p className="text-sm text-gray-600">
                “Kami percaya setiap hidangan memiliki cerita — dan kami di sini untuk membuatnya manis.”
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
