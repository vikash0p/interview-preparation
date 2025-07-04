'use client'
import React from "react";
import { motion } from "framer-motion";
import * as Icons from "react-icons/fa";


const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const footerData = {
  description: {
    title: "Interview Prep",
    text: "Your ultimate resource for interview preparation across all domains.",
  },
  socialLinks: [
    { href: "#", icon: "FaFacebookF" as keyof typeof Icons },
    { href: "#", icon: "FaTwitter" as keyof typeof Icons },
    { href: "#", icon: "FaLinkedinIn" as keyof typeof Icons },
  ],
  quickLinks: ["Home", "Practice Tests", "Mock Interviews", "Resources"],
  categories: ["Technical", "HR", "Behavioral", "Domain Specific"],
  contact: [
    "support@interviewprep.com",
    "+1 (555) 123-4567",
    "123 Interview Street",
    "San Francisco, CA 94105",
  ],
};


const Footer = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto  py-10 md:py-14 xl:py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Description */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <h3 className="text-xl font-bold text-white">
            {footerData.description.title}
          </h3>
          <p className="text-sm">{footerData.description.text}</p>
          <div className="flex space-x-4">
            {footerData.socialLinks.map((link, index) => {
              const IconComponent = Icons[link.icon];
              return (
                <a key={index} href={link.href} className="hover:text-white">
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <h4 className="text-white font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            {footerData.quickLinks.map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Categories */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <h4 className="text-white font-semibold">Categories</h4>
          <ul className="space-y-2">
            {footerData.categories.map((category, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <h4 className="text-white font-semibold">Contact</h4>
          <ul className="space-y-2">
            {footerData.contact.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="border-t border-gray-400 mt-12 pt-8"
        variants={itemVariants}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 Interview Prep. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-sm hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
