import React from 'react';

import {
  MapPin,
  Phone,
  Mail,
  Car,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 relative border-t border-slate-800 mt-8">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-red-600 to-indigo-600" />

      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg shadow-lg shadow-blue-600/20">
              <Car className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tight text-white">
              Drive<span className="text-blue-500">Fleet</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            প্রিমিয়াম গাড়ি ভাড়ার বিশ্বস্ত প্ল্যাটফর্ম। আপনার প্রতিটি ভ্রমণকে
            নিরাপদ, আরামদায়ক এবং সাশ্রয়ী করতে আমরা বদ্ধপরিকর।
          </p>
          {/* Requirement: New X Logo & Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-9 h-9 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              <FaFacebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
              title="Follow on X"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors duration-300"
            >
              <FaSquareInstagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold tracking-wider text-sm uppercase mb-6 border-l-2 border-blue-500 pl-3">
            Useful Links
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { title: 'Home Route', path: '/' },
              { title: 'Explore All Cars', path: '/cars' },
              { title: 'Add New Car', path: '/add-car' },
              { title: 'My Bookings', path: '/my-bookings' },
              { title: 'Privacy Policy', path: '#' },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.path}
                  className="hover:text-blue-400 flex items-center gap-1 group transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-blue-400 transition-colors" />
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold tracking-wider text-sm uppercase mb-6 border-l-2 border-blue-500 pl-3">
            Our Fleet Types
          </h3>
          <ul className="space-y-3 text-sm text-slate-400">
            {[
              'Luxury Sedans',
              'Offroad SUVs',
              'Electric Vehicles',
              'Family Hatchbacks',
              'Sports Cars',
            ].map((type, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between hover:text-slate-200 cursor-pointer group"
              >
                <span>{type}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-blue-400 transition-all" />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold tracking-wider text-sm uppercase mb-6 border-l-2 border-blue-500 pl-3">
            Contact Info
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-slate-400">
                House 42, Road 11, Banani, Dhaka, Bangladesh
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-500 shrink-0" />
              <span className="text-slate-400">+880 1712-345678</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-500 shrink-0" />
              <span className="text-slate-400">support@drivefleet.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} DriveFleet Platform. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-400">
              Security Matrix
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
