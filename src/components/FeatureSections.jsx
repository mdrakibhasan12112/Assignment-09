'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  CarFront,
  Clock3,
  BadgeDollarSign,
  Star,
  MapPin,
} from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Premium Cars',
    description:
      'Choose from luxury SUVs, sedans, sports cars, and premium electric vehicles.',
    icon: CarFront,
  },
  {
    id: 2,
    title: 'Safe & Secure',
    description:
      'All vehicles are fully insured and verified for your safety and comfort.',
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: '24/7 Support',
    description:
      'Our support team is always ready to help you anytime, anywhere.',
    icon: Clock3,
  },
  {
    id: 4,
    title: 'Affordable Pricing',
    description:
      'Get the best deals with transparent pricing and no hidden charges.',
    icon: BadgeDollarSign,
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Rakib Hasan',
    location: 'Dhaka',
    review:
      'Amazing experience! The car was super clean and the booking process was very smooth.',
  },
  {
    id: 2,
    name: 'Nafis Ahmed',
    location: 'Chittagong',
    review:
      'One of the best car rental services I have used. Highly recommended!',
  },
  {
    id: 3,
    name: 'Tanvir Islam',
    location: 'Sylhet',
    review:
      'Professional service with premium quality cars. Loved the experience.',
  },
];

const FeatureSections = () => {
  return (
    <div className="space-y-24 py-16">
      {/* ================= FEATURES SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Us
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Experience premium car rental service with comfort, safety, and
            affordable pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-5">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= PROMO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px]"
        >
          <img
            src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="promo"
            className="h-[500px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white">
            <motion.h2
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold max-w-2xl leading-tight"
            >
              Drive Your Dream Car Today
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-5 text-lg text-gray-200 max-w-xl"
            >
              Luxury, comfort, and performance — all in one place. Book your
              favorite car in minutes.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="mt-8 w-fit rounded-2xl bg-white text-black px-7 py-3 font-bold shadow-lg"
            >
              Explore Cars
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">What Clients Say</h2>

          <p className="text-gray-500 mt-4">
            Trusted by thousands of happy customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white border border-gray-200 p-7 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-1 text-yellow-500 mb-4">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                “{item.review}”
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">{item.name}</h4>

                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin size={14} />
                    {item.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeatureSections;
