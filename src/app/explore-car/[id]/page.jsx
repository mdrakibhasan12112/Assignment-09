import React from 'react';

import { motion } from 'framer-motion';
import CarDetailsCard from '@/components/CarDetailsCard';
import Link from 'next/link';
import { EditModel } from '@/components/EditModel';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const CarsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token);

  const res = await fetch(`http://localhost:8080/explore-car/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const cars = await res.json();
  console.log(cars);

  return (
    <div className="py-10 px-4 ">
      <CarDetailsCard cars={cars} />
    </div>
  );
};

export default CarsDetailsPage;
