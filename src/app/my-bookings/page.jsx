import MyBooking from '@/components/MyBooking';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {
const session = await auth.api.getSession({
  headers: await headers(), // you need to pass the headers object.
});
 const user = session?.user;

 const res = await fetch(`http://localhost:8080/my-bookings/${user?.id}`);
const bookings = await res.json()


 return (
   <div className="max-w-5xl mx-auto">
     <h1 className='text-3xl font-bold mt-8 mb-4'>My Booking</h1>
     <div className="flex flex-col gap-8">
       {bookings.map(booking => (
         <MyBooking key={booking._id} booking={booking}></MyBooking>
       ))}
     </div>
   </div>
 );
};

export default MyBookingPage;