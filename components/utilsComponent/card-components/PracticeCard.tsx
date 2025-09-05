import React from 'react';

const PracticeCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactElement }) => (
  <div
    className="card cursor-default"
  >
    <h3 className="text-xl font-semibold mb-4 flex items-center">
      <span className={`w-10 h-10 rounded-md flex items-center justify-center mr-3 bg-white/10 transition-transform duration-300 group-hover:rotate-12`}>{React.cloneElement(icon, { className: 'w-6 h-6' })}</span>
      {title}
    </h3>
    <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-200">{description}</p>
  </div>
);

export default PracticeCard;
