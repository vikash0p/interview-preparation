import type { Feature } from '@/main/data/home/mockInterviewData';

const MockInterviewCard: React.FC<Feature> = ({ icon: Icon, title, description }) => (
  <div
    className="card cursor-default"
  >
    <div className="icon text-3xl">
      <Icon  />
    </div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-neutral-400">{description}</p>
  </div>
);

export default MockInterviewCard;
