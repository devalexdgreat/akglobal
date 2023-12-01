"use client";
import { useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import HomeNav from '@/components/HomeNav';
import React from 'react';
import emailjs from '@emailjs/browser';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='w-full relative'>
        <HomeNav />
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Drop a Message to Reach out to us!
            </p>
        </div>


        <form ref={form} onSubmit={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                First name
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 
                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                    focus:ring-blue-500 sm:text-sm sm:leading-6 outline-none"
                />
                </div>
            </div>
            <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Last name
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm 
                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 outline-none"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
                </label>
                <div className="mt-2.5">
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm 
                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 outline-none"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
                </label>
                <div className="mt-2.5">
                <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm 
                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 outline-none"
                    defaultValue={''}
                />
                </div>
            </div>
            </div>
            <div className="mt-10">
            <button
                type="submit"
                className="block w-full rounded-md bg-blue-500 px-3.5 py-2.5 
                text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                focus-visible:outline-indigo-600"
            >
                Send Message
            </button>
            </div>
        </form>
        </div>
    </div>
    
  )
}
