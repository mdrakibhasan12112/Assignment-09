'use client';
import React from 'react';
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
  Card,
} from '@heroui/react';
import { authClient } from '@/lib/auth-client';

const AddCarPage = () => {
  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const cars = Object.fromEntries(formData.entries());
    console.log(cars);

      const { data: tokenData } = await authClient.token();
    const res = await fetch(`http://localhost:8080/explore-car`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${tokenData?.token}`,
      },
       body: JSON.stringify(cars),
    });
const data = await res.json()
    console.log(data);
    
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-5xl font-bold text-center mb-4">Add New Car</h1>

      <form onSubmit={onSubmit} className="p-10 space-y-8 max-w-3xl mx-auto shadow-2xl mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Destination Name */}
          <div className="md:col-span-2">
            <TextField name="CarName" isRequired>
              <Label>Car Name</Label>
              <Input placeholder="car name" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          <TextField name="dailyRentPrice" isRequired>
            <Label>dailyRentPrice</Label>
            <Input type="number" placeholder="000" className="rounded-2xl" />
            <FieldError />
          </TextField>

          <div>
            <Select
              name="carType"
              isRequired
              className="w-full"
              placeholder="Select category"
            >
              <Label>CarType</Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id=" Luxury" textValue=" Luxury">
                    Luxury
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Hatchback" textValue="Hatchback">
                    Hatchback
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Sedan" textValue="Sedan">
                    Sedan
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="SUV" textValue="SUV">
                    SUV
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          <TextField name="seatCapacity" type="number" isRequired>
            <Label>Seat Capacity</Label>
            <Input type="number" className="rounded-2xl" />
            <FieldError />
          </TextField>

          <TextField name="location" isRequired>
            <Label>Pickup Location</Label>
            <Input placeholder="Dhaka" className="rounded-2xl" />
            <FieldError />
          </TextField>

          <div className="md:col-span-2">
            <TextField name="availabilityStatus" type="date" isRequired>
              <Label>Availability Status</Label>
              <Input type="text" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          <div className="md:col-span-2">
            <TextField name="imageUrl" isRequired>
              <Label>Image URL</Label>
              <Input
                type="url"
                placeholder="https://example.com/bali-paradise.jpg"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <TextField name="description" isRequired>
              <Label>Description</Label>
              <TextArea
                placeholder="Describe the travel experience..."
                className="rounded-3xl"
              />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Buttons */}

        <Button
          type="submit"
          variant="outline"
          // isLoading={isPending}
          className=" rounded-none w-full bg-cyan-500 text-white"
        >
          {/* {isPending ? 'Adding Package...' : 'Add Travel Package'} */}
          Add Car
        </Button>
      </form>
    </div>
  );
};

export default AddCarPage;
