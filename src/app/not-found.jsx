'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CarFront } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-3xl text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="w-28 h-28 rounded-full bg-black text-white flex items-center justify-center shadow-2xl">
            <CarFront size={50} />
          </div>
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-7xl md:text-9xl font-extrabold text-black"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-3xl md:text-5xl font-bold text-gray-900"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-5 text-gray-500 text-lg leading-relaxed max-w-xl mx-auto"
        >
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <Link href="/">
            <button className="group inline-flex items-center gap-2 rounded-2xl bg-black px-7 py-4 text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-900">
              <ArrowLeft
                size={20}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back To Home
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
