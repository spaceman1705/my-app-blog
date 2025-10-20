"use client";

import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">Taroto Dessert</h2>
          <p className="text-sm leading-relaxed mb-4">
            Menghadirkan manisnya kebahagiaan melalui dessert dan minuman berkualitas tinggi.
          </p>
          <div className="flex items-center gap-3">
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="w-5 h-5 hover:text-yellow-400 transition" />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-5 h-5 hover:text-yellow-400 transition" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="#abot" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link href="#menu" className="hover:text-yellow-400">Menu / Services</Link></li>
            <li><Link href="#teams" className="hover:text-yellow-400">Teams</Link></li>
            <li><Link href="#blog" className="hover:text-yellow-400">Article</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-yellow-400" />
              <span>Jl. Manis Bahagia No. 88, Surabaya</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-yellow-400" />
              <span>+62 812 3456 7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-yellow-400" />
              <span>hello@tarotodessert.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}.
      </div>
    </footer>
  );
}
