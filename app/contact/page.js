"use client";
import { useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import HomeNav from '@/components/HomeNav';
import React from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export default function Contact() {
    const form = useRef();
    const emlInp = useRef();
    const namInp = useRef();
    const msgInp = useRef();
    const router = useRouter();

    const resetInputs = () => {
        emlInp.current.value = "";
        namInp.current.value = "";
        msgInp.current.value = "";
    };

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_oxsdk4b', 'template_jymofqj', form.current, 'dL1sKw6bMfycAJOwT')
          .then((result) => {
            console.log(result.text);
            Swal.fire({
                icon: "success",
                title: "Message Sent",
                showConfirmButton: false,
                timer: 1500
              });
            resetInputs();
          }, (error) => {
              console.log(error.text);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!"
              });
              resetInputs();
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
            <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Full name
                </label>
                <div className="mt-2.5">
                <input ref={namInp}
                    type="text"
                    name="name_id"
                    id="name_id"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm 
                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 outline-none" required
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
                </label>
                <div className="mt-2.5">
                <input ref={emlInp}
                    type="email"
                    name="email_id"
                    id="email_id"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm 
                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 outline-none" required
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
                </label>
                <div className="mt-2.5">
                <textarea ref={msgInp}
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm 
                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 outline-none"
                    defaultValue={''} required
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
