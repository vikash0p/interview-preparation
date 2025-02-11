"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaHome, FaSearch } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center flex flex-col items-center max-w-2xl"
      >
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <FaExclamationTriangle className="text-yellow-500 text-6xl mb-4 mx-auto" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-4xl font-bold mb-2"
        >
          404 - Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg text-gray-400 mb-6"
        >
          Oops! The page you are looking for doesn’t exist or has been moved.
          Here are some helpful links:
        </motion.p>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition gap-2"
            >
              <FaHome className="text-lg" />
              Return Home
            </motion.button>
          </Link>
          <Link href="/search">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition gap-2"
            >
              <FaSearch className="text-lg" />
              Search Page
            </motion.button>
          </Link>
        </motion.div>

        {/* Additional Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 text-gray-400"
        >
          <p className="text-sm">
            Need more help?{" "}
            <a href="/contact" className="text-yellow-500 hover:underline">
              Contact Support
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
