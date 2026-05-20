'use client';

import { authClient } from '@/lib/auth-client';
import { Envelope } from '@gravity-ui/icons';
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from '@heroui/react';
import { MdEditDocument } from 'react-icons/md';

export function EditModel({ cars }) {
 const {
  _id,
   imageUrl,
   CarName,
   dailyRentPrice,
   availabilityStatus,
   carType,
   location,
   seatCapacity,
   description,
 } = cars;


const onSubmit = async e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const cars = Object.fromEntries(formData.entries());
  console.log(cars);

  const { data: tokenData } = await authClient.token();
  const res = await fetch(`http://localhost:8080/explore-car/${_id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${tokenData?.token}`,
    },
    body: JSON.stringify(cars),
  });
  const data = await res.json();
  console.log(data);
};

  return (
    <Modal>
      <Button variant="outline" className={'rounded-none'}>
        <MdEditDocument />
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Car</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  onSubmit={onSubmit}
                  className="p-10 space-y-8 shadow-xl mt-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={CarName}
                        name="CarName"
                        isRequired
                      >
                        <Label>Car Name</Label>
                        <Input placeholder="car name" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <TextField
                      defaultValue={dailyRentPrice}
                      name="dailyRentPrice"
                      isRequired
                    >
                      <Label>dailyRentPrice</Label>
                      <Input
                        type="number"
                        placeholder="000"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Category - Updated Select Component */}
                    <div>
                      <Select
                        defaultValue={carType}
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

                    {/* Price */}
                    <TextField
                      defaultValue={seatCapacity}
                      name="seatCapacity"
                      type="number"
                      isRequired
                    >
                      <Label>Seat Capacity</Label>
                      <Input type="number" className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField
                      defaultValue={location}
                      name="location"
                      isRequired
                    >
                      <Label>Pickup Location</Label>
                      <Input placeholder="Dhaka" className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={availabilityStatus}
                        name="availabilityStatus"
                        type="date"
                        isRequired
                      >
                        <Label>Availability Status</Label>
                        <Input type="text" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
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
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
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
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      Save
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
