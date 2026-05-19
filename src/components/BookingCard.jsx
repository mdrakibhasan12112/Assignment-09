'use client';
import { Button, Card } from '@heroui/react';
import React, { useState } from 'react';

import { DateField, Label } from '@heroui/react';
import { ArrowRight } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

const BookingCard = ({ cars }) => {
  const { data: session } = authClient.useSession();
  console.log(session);

  const [date, setDate] = useState(null);
  console.log(new Date(date));
  return (
    <Card className="space-y-4 border-2 rounded-none">
      <div className="flex gap-2 ">
        <label className="">Driver Needed :</label>

        <select name="driverNeeded" className="border">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="flex gap-2 items-center">
        <label className="">Special Note :</label>

        <textarea
          name="specialNote"
          placeholder="Write your note..."
          className="border"
          rows="2"
        ></textarea>
      </div>

      <DateField onChange={setDate} className="w-[256px]" name="date">
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Input>
            {segment => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>
      <Button className="bg-black text-white w-full mt-4 p-2 rounded-2xl flex-1">
        Book Now
        <ArrowRight size={20} />
      </Button>
    </Card>
  );
};

export default BookingCard;
