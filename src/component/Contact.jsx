import React, { useState } from "react";
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPinHouse } from 'lucide-react';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, message } = formData;
    const recipient = "otkotk0707@gmail.com";
    const subject = `Message from ${name}`;
    const body = encodeURIComponent(message);

    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="p-6 max-sm:w-full  float sm:mx-auto mt-[100px] flex max-sm:flex-col gap-10 items-center justify-center">


        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full max-w-md border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          <h1 className="text-4xl font-bold text-center">Message <span className="text-yellow">me</span></h1>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 rounded bg-transparent border border-gray-500 text-white"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-2 rounded bg-transparent border border-gray-500 text-white h-32"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg transition-all"
          >
            Send Message
          </button>
        </form>
        <div className="flex flex-col max-w-md w-full items-start gap-4 justify-start mt-10px max-sm:border border-white/10 rounded-xl p-6">
          <h1 className="text-2xl font-bold">Contact</h1>
          <p className="text-gray-400 flex">
            <Mail />
            <span className="ml-2">Email:<span className="text-yellow">otkotk0707@gmail.com</span></span>
          </p>
          <p className="text-gray-400 flex">
            <Phone />
            <span className="ml-2">Phone:<span className="text-yellow">9043242904</span></span>
          </p>
          <p className="text-gray-400 flex">
            <MapPinHouse />
            <span className="ml-2">Address:<span className="text-yellow">Madurai,Tamilnadu,India</span></span>
          </p>
          <div className="w-full flex item-start justify-start gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/arun0707/" className=' text-yellow rounded-full font-bold'><Linkedin /></a>
            <a href="https://github.com/ARUNKUMAR0770" className=' text-yellow rounded-full font-bold'><Github /></a>

          </div>
        </div>

      </div>
    </>
  );
};

export default Contact;
