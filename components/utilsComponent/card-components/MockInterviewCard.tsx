import type { Feature } from '@/main/data/home/mockInterviewData';

const MockInterviewCard: React.FC<Feature> = ({ icon: Icon, title, description }) => (
  <div
    className="relative overflow-hidden w-full p-6 rounded-lg transition-all duration-300 ease-in-out border border-gray-700 hover:bg-gradient-to-r hover:from-gray-950 hover:to-gray-900 hover:border-gray-500 bg-gradient-to-t from-gray-900/10 to-gray-950"
  >
    <div className={`w-12 h-12  rounded-md flex items-center justify-center mb-4 bg-white/10`}>
      <Icon  />
    </div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-neutral-400">{description}</p>
  </div>
);

export default MockInterviewCard;
