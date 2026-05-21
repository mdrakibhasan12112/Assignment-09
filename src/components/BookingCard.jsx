'use client';
import { Button, Card } from '@heroui/react';
import React, { useState } from 'react';

import { DateField, Label } from '@heroui/react';
import { ArrowRight } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import toast, { Toaster } from 'react-hot-toast';

const BookingCard = ({ cars }) => {
 const { data: session } = authClient.useSession();
 const user = session?.user
  // console.log(user);

 const { _id, CarName, imageUrl, location, carType, dailyRentPrice } = cars;
 
 const [departureDate, setDepartureDate] = useState(null);
 
 const [driverNeeded, setDriverNeeded] = useState('Yes');
 const [specialNote, setSpecialNote] = useState('');

 const handleBooking = async () => {
  const bookingData = {
    userId: user?.id,
    userImage: user?.image,
    userName: user?.name,
    userEmail: user?.email,
    carId: _id,
    CarName,
    location,
    dailyRentPrice,
    carType,
    imageUrl,
    departureDate: new Date(departureDate),
    driverNeeded,
    specialNote,
   };
   
const {data:tokenData} = await authClient.token()

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${tokenData?.token}`,
    },
    body: JSON.stringify(bookingData),
  });
  const data = await res.json()
  toast.success('You booked successfully')
  
} 

  return (
    <Card className="space-y-4 border-2 rounded-none">
      <div className="flex gap-2 ">
        <label className="">Driver Needed :</label>

        <select
          name="driverNeeded"
          className="border"
          onChange={e => setDriverNeeded(e.target.value)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="flex gap-2 items-center">
        <label className="">Special Note :</label>

        <textarea
          name="specialNote"
          onChange={e => setSpecialNote(e.target.value)}
          placeholder="Write your note..."
          className="border"
          rows="2"
        ></textarea>
      </div>

      <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Input>
            {segment => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>
      <Button
        onClick={handleBooking}
        className="bg-black text-white w-full mt-4 p-2 rounded-2xl flex-1"
      >
        Book Now
        <ArrowRight size={20} />
      </Button>
    </Card>
  );
};

export default BookingCard;
