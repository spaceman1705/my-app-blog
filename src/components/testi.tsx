"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const testimonials = [
  {
    id: 1,
    name: "Rina Permata",
    role: "Customer",
    message:
      "Dessert-nya enak banget! Teksturnya lembut, manisnya pas, dan tampilan produknya sangat menarik!",
    avatar: "/customer1.png",
  },
  {
    id: 2,
    name: "Andi Wijaya",
    role: "Food Blogger",
    message:
      "Saya suka dessert dengan cita rasa modern tapi tetap ada sentuhan lokal. Presentation-nya keren!",
    avatar: "/customer2.png",
  },
  {
    id: 3,
    name: "Sarah Lestari",
    role: "Regular Customer",
    message:
      "Pelayanan cepat, tempatnya bersih, dan minumannya selalu segar. Setiap kali datang, rasanya selalu memuaskan!",
    avatar: "/customer3.png",
  },
  {
    id: 4,
    name: "Budi Lestari",
    role: "Regular Customer",
    message:
      "Pelayanan cepat, tempatnya bersih, dan minumannya selalu segar. Setiap kali datang, rasanya selalu memuaskan!",
    avatar: "/customer4.png",
  },
];

export default function TestimonialSection() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="w-full py-20 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        Apa Kata Mereka 🍰
      </h2>

      <Carousel
        className="max-w-6xl mx-auto"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {testimonials.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-full sm:basis-1/2 md:basis-1/3 px-4"
            >
              <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                <div className="relative w-36 h-36 mb-4">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover border-4 border-yellow-300"
                  />
                </div>
                <p className="text-gray-700 italic mb-4">“{item.message}”</p>
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-8">
          <CarouselPrevious className="bg-yellow-300 text-gray-900 hover:bg-yellow-400" />
          <CarouselNext className="bg-yellow-300 text-gray-900 hover:bg-yellow-400" />
        </div>
      </Carousel>
    </section>
  );
}