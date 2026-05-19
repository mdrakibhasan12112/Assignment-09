'use client';
import React from 'react';
// import React, { useState } from 'react';
import { Check } from '@gravity-ui/icons';
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';
import toast, { Toaster } from 'react-hot-toast';

const SignUpPage = () => {
  const router = useRouter();
  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    // console.log(user);
    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });
    // console.log({data,error});
    if (data) {
      toast.success('Account created successfully!');

      setTimeout(() => {
        router.push('/');
      }, 1500);
    }

    if (error) {
      toast.error(error.message || 'Signup failed');
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
    provider:"google"
  })
}


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <Toaster position="top-right"></Toaster>

      <Card className="w-full max-w-lg p-8 shadow-2xl rounded-3xl bg-white">
        <div className="text-center justify-center mb-5">
          <h1 className="text-3xl font-semibold">Create Account</h1>
          <p className="text-gray-500">Start your adventure with drive-car</p>
        </div>

        <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4 ">
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>
          <TextField isRequired name="image" type="url">
            <Label>Image URL</Label>
            <Input placeholder="Enter your imageURL" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={value => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return 'Please enter a valid email address';
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={value => {
              if (value.length < 8) {
                return 'Password must be at least 8 characters';
              }
              if (!/[A-Z]/.test(value)) {
                return 'Password must contain at least one uppercase letter';
              }
              if (!/[0-9]/.test(value)) {
                return 'Password must contain at least one number';
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button
              type="submit"
              className="bg-[#15A1BF] w-full rounded-none mb-5"
            >
              Create Account
            </Button>
          </div>
        </Form>

        <div className="text-center justify-center space-y-5">
          <p>Or signup with</p>
          <Button
            onClick={handleGoogleSignin}
            variant="outline"
            className="w-full rounded-none text-md font-bold items-center"
          >
            <FcGoogle />
            Signup With Google
          </Button>
          <p>
            Already have an account?{' '}
            <span className="text-[#15A1BF] font-semibold">
              {' '}
              <Link
                href={'/login'}
                className="text-[#15A1BF] font-semibold hover:underline"
              >
                Sign In
              </Link>
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
