
import React from 'react';

import { motion } from 'framer-motion';
import CarDetailsCard from '@/components/CarDetailsCard';
import Link from 'next/link';
import { EditModel } from '@/components/EditModel';

const CarsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:8080/explore-car/${id}`);
  const cars = await res.json();
  console.log(cars);

  return (
    <div className="py-10 px-4 ">
   
      <CarDetailsCard cars={cars} />
    </div>
  );
};

export default CarsDetailsPage;
