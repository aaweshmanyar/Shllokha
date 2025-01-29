import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BounceLoader } from "react-spinners";
import contactusimg from './yogaside.jpeg'

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Message Sent Successfully!");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center  px-4 shadow-2xl md: mt-5">
      <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden max-w-6xl w-full">
        {/* Content Section */}
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center items-center bg-[#f5e7e0] to-white text-black">
            <img
              src={contactusimg} // Replace this with your image URL
              alt="Yoga Instructor"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
            <h1 className="text-4xl font-bold mt-6 text-center">Contact Us</h1>
            <p className="mt-2 text-lg text-center">
              We’d love to hear from you. Share your thoughts with us!
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <ToastContainer />
            {loading && (
              <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75 z-10">
                <BounceLoader color="#3b82f6" loading={loading} size={60} />
              </div>
            )}
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-teal-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-teal-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Whatsapp number</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-teal-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Message</label>
                <textarea
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-teal-400"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black  text-white py-3 rounded-lg font-semibold transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
