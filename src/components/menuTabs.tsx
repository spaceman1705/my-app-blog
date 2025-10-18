"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type MenuItem = {
  id: number;
  name: string;
  image: string;
  price: string;
  category: "Dessert" | "Drinks" | "Promo";
};

const menuData: MenuItem[] = [
  {
    id: 1,
    name: "Taro Boba Milk",
    image: "/menu/taro-boba-milk.png",
    price: "Rp 25.000",
    category: "Drinks",
  },
  {
    id: 2,
    name: "Mango Sago Delight",
    image: "/menu/mango-sago.png",
    price: "Rp 28.000",
    category: "Dessert",
  },
  {
    id: 3,
    name: "Brown Sugar Boba",
    image: "/menu/bown-sugar-boba.png",
    price: "Rp 30.000",
    category: "Drinks",
  },
  {
    id: 4,
    name: "Signature Taro Bowl",
    image: "/menu/signature-taro-bowl.png",
    price: "Rp 35.000",
    category: "Dessert",
  },
  {
    id: 5,
    name: "Buy 2 Get 1 Free",
    image: "/menu/promo.png",
    price: "Promo",
    category: "Promo",
  },
  {
    id: 6,
    name: "Ice Cream Cone",
    image: "/menu/ice-cream-cone.png",
    price: "Rp 12.000",
    category: "Dessert",
  },
];

export default function MenuTabs() {
  const [activeTab, setActiveTab] = useState<"Dessert" | "Drinks" | "Promo">("Dessert");

  const filteredMenu = menuData.filter((item) => item.category === activeTab);

  return (
    <div id="menu" className="max-w-6xl mx-auto px-6 md:px-12 text-center pt-5">
      <div className="flex justify-center gap-4 mb-10">
        {["Dessert", "Drinks", "Promo"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
              activeTab === tab
                ? "bg-yellow-400 text-black shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-yellow-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div className="relative w-full h-60 overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                <p className="text-yellow-600 font-medium">{item.price}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
