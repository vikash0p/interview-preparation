'use client';
import { ErrorIcon } from "@/components/utilsComponent/error-components/ErrorIcon";
import Link from 'next/link';
import {  FaHome, FaEnvelope } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen px-4 flex flex-col items-center py-16">
      <div className="max-w-4xl w-full text-center flex flex-col items-center">

<ErrorIcon />

        {/* Main Content */}
        <div className="space-y-6">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">InterViewPrep Page Not Found</h1>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto"> This might be because the content has moved, the URL was entered incorrectly, or the resource is temporarily unavailable. Don&apos;t worry though - we have plenty of other materials to help you ace your technical interviews.</p>

          <Link href="/" className="group mt-3 inline-block">
            <div className="h-full px-6 py-2 bg-indigo-600  rounded-md hover:bg-indigo-700 transition-all ">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black/50 rounded-md  transition">
                  <FaHome className="text-xl" />
                </div>
                <div className="text-left text-white ">
                  <h3 className="font-semibold text-lg">Return Home</h3>
                  <p className="text-sm ">Back to the main dashboard</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Additional Help */}
          <div className="mt-12 pt-6 border-t border-gray-700/50">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full">
              <FaEnvelope className="text-yellow-400" />
              <span className="text-sm">Need help?</span>
              <Link href="/contact" className="text-yellow-400 hover:underline font-medium text-sm">
                Contact our support team
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-6 text-center text-xs text-gray-500">
        <p>InterViewPrep Platform • Helping developers succeed in technical interviews since 2025 </p>
      </div>
    </div>
  );
}
