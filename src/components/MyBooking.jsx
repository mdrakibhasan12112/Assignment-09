'use client';
import {
  FaMapMarkerAlt,
  FaCar,
  FaCalendarAlt,
  FaUserTie,
  FaCheckCircle,
} from 'react-icons/fa';
import React from 'react';
import Image from 'next/image';
import { BookingCancelAlert } from './BookingCancelAlert';

const MyBooking = ({ booking }) => {
  const {
    imageUrl,
    CarName,
    location,
    carType,
    dailyRentPrice,
    departureDate,
    driverNeeded,
    specialNote,
  } = booking;

  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 p-4 sm:p-5 flex flex-col gap-4 transition-all duration-200 hover:shadow-lg">
      {/* Top Section: Split Layout */}
      <div className="flex flex-col sm:flex-row gap-5">
        {/* Left Side: Image */}
        <div className="w-full sm:w-48 h-40 sm:h-auto relative rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={
              imageUrl ||
              'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600'
            }
            alt={CarName}
            className="w-full h-full object-cover"
          />
          {/* Status Badge */}
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
            <FaCheckCircle className="text-xs" /> Booked
          </span>
        </div>

        {/* Right Side: Information */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Car Name & Type */}
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white line-clamp-1">
                {CarName}
              </h3>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded font-medium flex-shrink-0">
                {carType}
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-3">
              <FaMapMarkerAlt className="text-blue-500 flex-shrink-0" />
              <span className="line-clamp-1">{location}</span>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3">
              <div className="flex items-center gap-1.5">
                <FaCalendarAlt className="text-gray-400 flex-shrink-0" />
                <span className="truncate">
                  {new Date(departureDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaUserTie className="text-gray-400 flex-shrink-0" />
                <span> driverNeeded:{driverNeeded }</span>
              </div>
            </div>

            {/* Price Info */}
            <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              Total Paid:{' '}
              <span className="text-blue-600 font-bold">${dailyRentPrice}</span>
            </div>
          </div>

          {/* Special Note */}
          {specialNote && (
            <p className="text-xs text-gray-500 dark:text-gray-400 italic mt-2 line-clamp-1 bg-gray-50 dark:bg-gray-800/50 p-1.5 rounded">
              *{specialNote}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Section: Divider & Cancel Button */}
      <div className="border-t border-gray-100 dark:border-gray-800 pt-3 flex justify-end">
      
     <BookingCancelAlert bookingId= {booking._id}></BookingCancelAlert>
      </div>
    </div>
  );
};

export default MyBooking;
