import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Using react-hook-form to handle form state and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (formData) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;
    const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER;

    if (!serviceId || !templateId || !userId || !phoneNumber) {
      console.error('Environment variables are not set properly.');
      toast.error('Error: Environment variables are missing.');
      return;
    }

    // Initialize EmailJS
    emailjs.init(userId);

    // Send the email
    emailjs
      .send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFormSubmitted(true);
          toast.success('Message sent successfully!');

          // Format WhatsApp message
          const whatsappMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;

          // Check if the user is on a mobile device or desktop
          const isMobile = /Mobi|Android/i.test(navigator.userAgent);

          // Use WhatsApp Web for desktop, and WhatsApp App for mobile devices
          const whatsappURL = isMobile
            ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`
            : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;

          window.open(whatsappURL, '_blank');
          reset(); // Reset the form after submission
        },
        (error) => {
          console.error('FAILED...', error);
          toast.error('Failed to send the message. Please try again later.');
        }
      );
  };

  const handleBackClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <Navbar />
      <div className="relative flex items-center mt-20 justify-center h-auto min-h-screen bg-gray-100 py-12 px-4">
        {!formSubmitted ? (
          <div className="relative z-10 w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#379b4b] text-center mb-6">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register('name', { required: true })}
                  className="mt-1 block w-full p-3 border text-gray-600 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
                {errors.name && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register('email', { required: true })}
                  className="mt-1 block w-full p-3 border text-gray-600 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
                {errors.email && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  {...register('subject', { required: true })}
                  className="mt-1 block w-full p-3 border text-gray-600 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
                {errors.subject && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  {...register('message', { required: true })}
                  className="mt-1 block w-full p-3 text-gray-600 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                ></textarea>
                {errors.message && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full p-3 bg-[#379b4b] hover:bg-[#2a7f3b] text-white font-semibold rounded-md shadow-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        ) : (
          <div className="relative z-10 w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-[#379b4b]">
              Thank you for reaching out!
            </h2>
            <p className="text-center mt-4 text-gray-600">
              We have received your message and will get back to you shortly.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <button
                onClick={handleBackClick}
                className="mt-6 bg-[#692f95] text-white px-4 py-2 border-none rounded-md hover:bg-[#573b7c] duration-300"
              >
                Back
              </button>
            </div>
          </div>
        )}

        {/* Decorative Shapes */}
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="triangle triangle1"></div>
        <div className="triangle triangle2"></div>
      </div>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />

      <Footer />
    </div>
  );
};

export default Contact;
