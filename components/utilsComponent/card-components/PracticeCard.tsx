import React from 'react';

const PracticeCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactElement }) => (
  <div
    className={`relative overflow-hidden w-full p-6 rounded-lg transition-all duration-300 ease-in-out
        border border-gray-700
        hover:scale-[1.02] hover:-translate-y-1
        hover:bg-gradient-to-r hover:from-gray-950 hover:to-gray-900 hover:border-gray-500
        bg-gradient-to-t from-gray-900/20 to-gray-950/40`}
  >
    <h3 className="text-xl font-semibold mb-4 flex items-center">
      {/* Icon with subtle rotation on hover */}
      <span className={`w-10 h-10 rounded-md flex items-center justify-center mr-3 bg-white/10 transition-transform duration-300 group-hover:rotate-12`}>{React.cloneElement(icon, { className: 'w-6 h-6' })}</span>
      {title}
    </h3>
    <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-200">{description}</p>
  </div>
);

export default PracticeCard;
