// 'use client'
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

import { motion } from 'framer-motion';
import CarDetailsCard from '@/components/CarDetailsCard';

const fetchCarDetails = async (id) => {
 const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/explore-car/${id}`);
 const data = await res.json();
 return data || [];
}

const CarsDetailsPage =async ({ params }) => {
 const { id } = await params;
 const car = await fetchCarDetails(id)

 // console.log(car);

 return (
   <div className="py-10 px-4">
     <CarDetailsCard car={car} />
   </div>
 );
};

export default CarsDetailsPage;