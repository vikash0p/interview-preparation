'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="bg-gray-950/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-indigo-400 text-center">📩 Get in Touch</h2>
      <p className="text-gray-400 text-center mb-10">Have questions or doubts? Fill out the form below and our team will connect with you soon.</p>

      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <FaCheckCircle className="text-6xl text-green-500 mx-auto" />
          <h3 className="text-3xl font-bold text-gray-200">Message Sent!</h3>
          <p className="text-gray-400">Thanks for reaching out. We’ll get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-gray-800/70 text-gray-200 rounded-lg border border-gray-700
              focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-500"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@studentmail.com"
              className="w-full px-4 py-3 bg-gray-800/70 text-gray-200 rounded-lg border border-gray-700
              focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
              value={formData.email}
              onChange={handleChange}
            />
            <p className="text-xs text-gray-500 mt-1">We’ll never share your email with anyone else.</p>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number (optional)</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 bg-gray-800/70 text-gray-200 rounded-lg border border-gray-700
              focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              required
              placeholder="E.g. Doubt about admissions"
              className="w-full px-4 py-3 bg-gray-800/70 text-gray-200 rounded-lg border border-gray-700
              focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 bg-gray-800/70 text-gray-200 rounded-lg border border-gray-700
              focus:ring-2 focus:ring-indigo-500 placeholder-gray-500 resize-none"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-indigo-500 text-white font-semibold rounded-lg
            hover:bg-indigo-600 transition-all duration-300 flex items-center justify-center gap-2
            disabled:opacity-70 shadow-md hover:shadow-lg"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
            ) : (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
