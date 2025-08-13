import React from 'react';
import { FaPhone, FaMailBulk, FaUser } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

const SERVICE_ID = 'service_6qu9rol';
const TEMPLATE_ID = 'template_rpab7vr';
const PUBLIC_KEY  = 'fGj3cNzSSGh9XRYmL';

export default function Contact() {
const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setMsg('');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      toast.success('Message sent successfully! 🎉');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      toast.error('Message failed to send. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen py-10 flex justify-start items-start ml-32 gap-x-0">
      {/* Sol taraf */}
      <div className="flex flex-col w-full items-start max-w-2xl space-y-6">
        <h1 className="
          text-4xl 
          font-extrabold 
          tracking-wide 
          text-transparent 
          bg-clip-text 
          bg-gradient-to-r 
          from-black 
          to-gray-700
          hover:from-blue-950
          hover:to-orange-800 
          transition-colors 
          duration-500  
          drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]
        ">
          Get in Touch
        </h1>

        <div className="flex space-x-2">
          <span className="w-16 h-2 bg-black rounded"></span>
          <span className="w-12 h-2 bg-black rounded"></span>
          <span className="w-8 h-2 bg-black rounded"></span>
        </div>

        <h2 className="text-2xl font-bold text-[rgb(241,144,74)]">
          I'd like to hear from you!
        </h2>

        <p className="text-1xl text-black max-w-xl font-mono">
          If you have any inquiries, any feedback or just want to say hi, please use the contact form!
        </p>
        {/* Sağ taraf */}
      <div className="flex flex-col w-[90%] bg-black/10 items-start mt-12 p-4 space-y-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-125 hover:shadow-2xl"
          >
        <h3 className="text-3xl font-bold">Contact Info</h3>

        <div className="space-y-5">
          {/* Name */}
          <div className="flex items-start">
            <FaUser className="text-white text-2xl mt-1 mr-3 w-6" />
            <div className="border-l-2 border-gray-600 pl-4 flex flex-col items-start">
              <h4 className="font-semibold mb-1">Name</h4>
              <p className="text-gray-300">Sena AKAT</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start">
            <FaPhone className="text-green-400 text-2xl mt-1 mr-3 w-6" />
            <div className="border-l-2 border-gray-600 pl-4 flex flex-col items-start">
              <h4 className="font-semibold mb-1">Call Me</h4>
              <p className="text-gray-300">+90 505 637 69 84</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start">
            <FaMailBulk className="text-green-400 text-2xl mt-1 mr-3 w-6" />
            <div className="border-l-2 border-gray-600 pl-4 flex flex-col items-start">
              <h4 className="font-semibold mb-1">Email Me</h4>
              <p className="text-gray-300">senaakatt@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Alt taraftaki form kutusu */}
      <form 
         ref={formRef}
         onSubmit={sendEmail}
         className="flex flex-col w-[40%] bg-black/10 items-center mt-8 p-6 space-y-6 rounded-lg shadow-lg ">
      <h3 className=" text-4xl font-extrabold ">Message Me 😊</h3>

      {/* First & Last Name */}
      <div className="flex w-full space-x-4">
         <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
            className="w-1/2 p-3 rounded bg-black/20 text-white border border-gray-500 focus:outline-none focus:border-[rgb(241,144,74)]"
         />
         <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
            className="w-1/2 p-3 rounded bg-black/20 text-white border border-gray-500 focus:outline-none focus:border-[rgb(241,144,74)]"
         />
      </div>

         {/* Email */}
         <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="w-full p-3 rounded bg-black/20 text-white border border-gray-500 focus:outline-none focus:border-[rgb(241,144,74)]"
         />

         {/* Message */}
         <textarea
            name="message"
            placeholder="Your Message..."
            rows="5"
            required
            className="w-full p-3 rounded bg-black/20 text-white border border-gray-500 focus:outline-none focus:border-[rgb(241,144,74)]"
         ></textarea>

         {/* Gönder Butonu */}
         <button 
            type="submit"
            disabled={sending}
            className="bg-[rgb(241,144,74)] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition duration-300">
            {sending ? 'Gönderiliyor…' : 'Send Message'}
         </button>
         {msg && <p className="text-sm text-white/90">{msg}</p>}
      </form>
    </div>
  );
}
