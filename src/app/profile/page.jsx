'use client';

import React from 'react';
import { authClient } from '@/lib/auth-client';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const ProfilePage = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  return (
    <div className="mt-8 bg-gray-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          y: -8,
          rotateX: 2,
          rotateY: 2,
        }}
        className="relative overflow-hidden w-full max-w-md rounded-[35px] bg-gradient-to-br from-black via-gray-900 to-gray-800 p-[1px] shadow-2xl"
      >
        {/* Glow Effect */}
        <div className="absolute -top-24 -right-20 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl"></div>

        {/* Card */}
        <div className="relative rounded-[35px] bg-[#0f172a] px-8 py-10 text-center">
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-[35px] border border-white/10"></div>

          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="relative mx-auto w-fit"
          >
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-40"></div>

            <img
              src={user?.image}
              alt="user"
              className="relative w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-2xl"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
            }}
            className="mt-6 text-4xl font-black tracking-tight text-white"
          >
            {user?.name}
          </motion.h1>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
            }}
            className="mt-5 flex items-center justify-center gap-2 text-gray-300"
          >
            <Mail size={18} className="text-cyan-400" />

            <p className="text-sm sm:text-base break-all">{user?.email}</p>
          </motion.div>

          {/* Bottom Blur Line */}
          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
