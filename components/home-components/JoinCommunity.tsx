'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { statsData, JoinCommunityData } from '@/main/data/home/JoinCommunityData';
import { ReusableHeading } from '../reusable-components/ReusableHeading';

const JoinCommunity = () => {
  return (
    <section className="mt-10 md:mt-14 lg:mt-20 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <ReusableHeading
        heading="Be Part of a Growing Interview Prep Network"
        description="Engage with other candidates, ask questions, share strategies, and grow in a collaborative learning environment"
      />

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {JoinCommunityData.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="group relative bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-700 p-6 rounded-md hover:border-indigo-500 transition-all duration-300 space-y-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-md pointer-events-none" />

            <div
              className={`w-14 h-14 ${feature.bgColor} rounded-md flex items-center justify-center ${
                feature.title === 'Live Events' ? 'text-green-400' : ''
              }`}
            >
              {feature.icon}
            </div>

            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>

            <div className="flex items-center justify-between text-sm pt-2">
              <span className="text-gray-400">{feature.stats}</span>
              <span className={`${feature.linkColor}`}>{feature.linkText}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 lg:mt-16">
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.id}
            className="text-center space-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          >
            <div className={`text-4xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-neutral-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 lg:mt-16 text-center">
        <motion.button
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md transition-all transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Join Our Community
        </motion.button>

        <motion.p
          className="mt-4 text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Already a member?{' '}
          <a href="#" className="text-indigo-400 hover:text-indigo-300">
            Sign in
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default JoinCommunity;
