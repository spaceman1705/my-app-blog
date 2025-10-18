"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const featuredItems = [
  {
    id: 1,
    name: "Signature Taro Bowl",
    description: "Perpaduan sempurna antara taro lembut, boba kenyal, dan susu segar.",
    image: "/menu/signature-taro-bowl.png",
    price: "Rp 35.000",
  },
  {
    id: 2,
    name: "Brown Sugar Boba",
    description: "Boba klasik dengan sirup brown sugar dan creamy milk yang nikmat.",
    image: "/menu/bown-sugar-boba.png",
    price: "Rp 30.000",
  },
  {
    id: 3,
    name: "Ice Cream Cone",
    description: "Ice Cream yang enak dengan Cone yang sangat renyah.",
    image: "/menu/ice-cream-cone.png",
    price: "Rp 12.000",
  },
];

export default function FeaturedMenu() {
  return (
    <div id="menuandalan" className="max-w-6xl mx-auto px-6 md:px-12 pt-8 pb-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        BEST SELLER 🍰
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {featuredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <div className="relative w-full h-64 overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 text-left flex flex-col justify-between h-[240px]">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="flex">
                <span className="text-yellow-600 font-semibold">
                  {item.price}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
