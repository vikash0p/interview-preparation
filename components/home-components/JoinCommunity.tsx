'use client';
import React from 'react';
import { statsData, JoinCommunityData } from '@/main/data/home/JoinCommunityData';
import { ReusableHeading } from '../reusable-components/ReusableHeading';
import { Link } from "next-view-transitions";
import LinkButton from "../utilsComponent/button-components/LinkButton";

const JoinCommunity = () => {
  return (
    <section className="mt-10 md:mt-14 lg:mt-20 " aria-labelledby="join-community-heading">
      <ReusableHeading heading="Be Part of a Growing Interview Prep Network" description="Engage with other candidates, ask questions, share strategies, and grow in a collaborative learning environment." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
        {JoinCommunityData.map(feature => (
          <div
            key={feature.id}
            className="relative overflow-hidden w-full p-6 rounded-2xl transition-all duration-300 ease-in-out border border-gray-700 hover:bg-gradient-to-r hover:from-gray-950 hover:to-gray-900 hover:border-gray-500 bg-gradient-to-t from-gray-900/20 to-gray-950/40"
            role="article"
            aria-label={`Community feature: ${feature.title}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />

            <div className={`w-14 h-14 ${feature.bgColor} rounded-md flex items-center justify-center text-xl text-indigo-400`}>{feature.icon}</div>

            <h3 className="mt-4 text-lg font-semibold text-gray-100 group-hover:text-indigo-300 transition-colors">{feature.title}</h3>
            <p className="mt-2 text-gray-400 text-sm leading-relaxed">{feature.description}</p>

            <div className="flex items-center justify-between text-sm pt-3">
              <span className="text-gray-500">{feature.stats}</span>
              <span className={`${feature.linkColor} font-medium cursor-pointer hover:underline`}>{feature.linkText}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-8 mt-10 lg:mt-16 text-center">
        {statsData.map(stat => (
          <div key={stat.id} className="space-y-1">
            <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 lg:mt-16 text-center">
        

          <LinkButton href="/register" ariaLabel="Join Our Community" size="md">Join Our Community</LinkButton>
        <p className="mt-4 text-gray-400 text-md">
          Already a member?{' '}
          <Link href="/login" className="text-indigo-300 hover:text-indigo-200 underline">
            Log in here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default JoinCommunity;
