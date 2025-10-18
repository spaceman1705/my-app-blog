"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-gray-800 py-20 px-6 md:px-20">
      <div className="mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition"
        >
          <span className="text-2xl">←</span>
          <span className="font-medium">Kembali</span>
        </Link>
      </div>
      <section className="max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tentang Perusahaan Kami
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Kami berdedikasi untuk menciptakan dessert yang tidak hanya lezat, tetapi juga membawa kebahagiaan dan kenangan manis di setiap momen.
          </p>
        </motion.div>

        {/* Bagian foto dan deskripsi */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/abotus.jpg"
              alt="Tim kami"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Visi & Misi</h2>
            <p className="text-lg leading-relaxed mb-4">
              Visi kami adalah menjadi brand dessert lokal yang dikenal secara nasional karena kualitas, inovasi, dan keaslian rasa.
            </p>
            <p className="text-lg leading-relaxed">
              Misi kami adalah menghadirkan produk manis berkualitas tinggi dari bahan alami, mendukung petani lokal, dan memberikan pengalaman rasa yang menyenangkan bagi semua pelanggan kami.
            </p>
          </motion.div>
        </div>

        {/* Nilai perusahaan */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Nilai yang Kami Junjung</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Kualitas",
                desc: "Kami hanya menggunakan bahan terbaik untuk menjaga rasa dan keaslian produk.",
              },
              {
                title: "Inovasi",
                desc: "Kami terus berinovasi menciptakan dessert baru yang menggugah selera.",
              },
              {
                title: "Kepuasan Pelanggan",
                desc: "Setiap produk kami dibuat dengan tujuan memberikan kebahagiaan bagi pelanggan.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
