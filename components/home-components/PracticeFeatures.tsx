'use client';
import { practiceData } from '@/main/data/home/practiceData';
import PracticeCard from '../utilsComponent/card-components/PracticeCard';

const PracticeFeatures = () => {
  return (
    <div

      className="space-y-6"
    >
      {practiceData.map(feature => (
        <PracticeCard key={feature.id} {...feature} />
      ))}


    </div>
  );
};

export default PracticeFeatures;
