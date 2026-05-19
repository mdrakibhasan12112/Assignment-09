'use client';

import { Button } from '@heroui/react';
import {
  MapPin,
  Users,
  CarFront,
  BadgeCheck,
  ArrowRight,
  Fuel,
} from 'lucide-react';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { EditModel } from './EditModel';
import { DeleteCarAlert } from './DeleteCarAlert';
import { FaArrowLeft } from 'react-icons/fa';
import BookingCard from './BookingCard';

const CarDetailsCard = ({ cars }) => {
  const {
    imageUrl,
    CarName,
    dailyRentPrice,
    availabilityStatus,
    carType,
    location,
    seatCapacity,
    description,
  } = cars;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group max-w-5xl mx-auto overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      <div className="flex justify-between space-x-5 p-8 mt-3 mb-3">
        <div>
          <Link href={'/explore-car'} className="border p-2 flex gap-2 items-center justify-center">
            <FaArrowLeft /> Back to Explore car
          </Link>
        </div>
        <div className="flex gap-4">
          <EditModel cars={cars}></EditModel>

          <DeleteCarAlert cars={cars}></DeleteCarAlert>
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={CarName}
            width={800}
            height={600}
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-10">
          <div className="flex justify-between gap-4">
            <div>
              <h1 className="text-4xl font-black">{CarName}</h1>

              <p className="text-gray-500 mt-2">
                Luxury & premium driving experience
              </p>
            </div>

            <div className="text-right">
              <h2 className="text-4xl font-black">${dailyRentPrice}</h2>

              <p className="text-gray-500 text-sm">Per Day</p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-gray-100 rounded-2xl p-4 flex items-center gap-3">
              <Users />
              <div>
                <p className="text-sm text-gray-500">Seats</p>
                <h3 className="font-bold">{seatCapacity} Persons</h3>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-4 flex items-center gap-3">
              <CarFront />
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <h3 className="font-bold">{carType}</h3>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-4 flex items-center gap-3">
              <MapPin />
              <div>
                <p className="text-sm text-gray-500">Pickup</p>
                <h3 className="font-bold">{location}</h3>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-4 flex items-center gap-3">
              <Fuel />
              <div>
                <p className="text-sm text-gray-500">Status</p>

                <h3 className="font-bold">
                  {availabilityStatus ? 'Available' : 'Booked'}
                </h3>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <BadgeCheck />
              Description
            </h2>

            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
           
            <BookingCard cars={cars}></BookingCard>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarDetailsCard;
