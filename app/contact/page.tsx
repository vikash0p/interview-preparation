"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
  FaRegSmile,
} from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sections = [
    {
      title: "Connect With Us",
      items: [
        {
          icon: <FaPhone className="w-6 h-6" />,
          text: "+1 (555) 123-4567",
          link: "tel:+15551234567",
        },
        {
          icon: <FaEnvelope className="w-6 h-6" />,
          text: "support@interviewprep.com",
          link: "mailto:support@interviewprep.com",
        },
        {
          icon: <FaMapMarkerAlt className="w-6 h-6" />,
          text: "Tech Valley Hub\n789 Coding Blvd\nSan Francisco, CA 94107",
        },
      ],
    },
    {
      title: "Operation Hours",
      items: [
        {
          icon: <FaClock className="w-6 h-6" />,
          text: "Weekdays: 8:00 AM - 8:00 PM PST",
        },
        {
          icon: <FaClock className="w-6 h-6" />,
          text: "Weekends: 10:00 AM - 6:00 PM PST",
        },
        {
          icon: <FaRegSmile className="w-6 h-6" />,
          text: "24/7 Online Support Available",
        },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, name: "Facebook", url: "#" },
    { icon: <FaTwitter />, name: "Twitter", url: "#" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "#" },
    { icon: <FaGithub />, name: "GitHub", url: "#" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen  px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600"
          >
            Let&apos;s Transform Your Career
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Reach out to our expert team for personalized guidance, technical
            support, or partnership opportunities. We&apos;re here to help you
            succeed!
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Contact Cards */}
            <AnimatePresence>
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-gray-700"
                >
                  <h2 className="text-2xl font-bold mb-6 text-indigo-400 flex items-center gap-2">
                    <div className="h-1 w-8 bg-indigo-500 rounded-full" />
                    {section.title}
                  </h2>
                  <div className="space-y-6">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 group">
                        <div className="p-3 bg-gray-700 rounded-lg group-hover:bg-indigo-500 transition-colors">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          {item.link ? (
                            <Link
                              href={item.link}
                              className="text-lg hover:text-indigo-400 transition-colors"
                            >
                              {item.text.split("\n").map((line, i) => (
                                <p key={i}>{line}</p>
                              ))}
                            </Link>
                          ) : (
                            item.text.split("\n").map((line, i) => (
                              <p key={i} className="text-lg">
                                {line}
                              </p>
                            ))
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Social Media Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6 text-indigo-400">
                Stay Connected
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg hover:bg-indigo-500 transition-colors"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span className="font-medium">{link.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-8 text-indigo-400">
                Send Your Inquiry
              </h2>
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <FaCheckCircle className="text-6xl text-green-500 mx-auto" />
                  <h3 className="text-3xl font-bold">Message Sent!</h3>
                  <p className="text-gray-300">
                    Thank you for contacting us. We&apos;ll respond within 24
                    hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-indigo-500 text-gray-900 font-bold rounded-lg hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900" />
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Location Map */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="rounded-xl overflow-hidden shadow-2xl border border-gray-700"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.681003147675!2d-122.4194155846854!3d37.77492997975923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTech%20Valley%20Hub!5e0!3m2!1sen!2sus!4v1629786006781!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all"
              />
            </motion.div>
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-gray-400 border-t border-gray-800 pt-8 mt-12"
        >
          <p className="text-sm">
            © 2024 InterviewPrep. All rights reserved.
            <Link href="#" className="hover:text-indigo-400 ml-2">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="#" className="hover:text-indigo-400 ml-2">
              Terms of Service
            </Link>
          </p>
          <p className="mt-2 text-xs">
            Proudly serving 50,000+ developers worldwide
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
