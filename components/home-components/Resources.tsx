import React from 'react';
import { resourcesData } from '@/main/data/home/ResourceData';
import ResourceCard from '../utilsComponent/card-components/ResourceCard';
import { ReusableHeading } from '../reusable-components/ReusableHeading';

const Resources: React.FC = () => {
  return (
    <section className="">
      <ReusableHeading
        heading="Learning Resources to Sharpen Your Skills"
        description="Comprehensive, expert-curated materials designed to strengthen your concepts, improve problem-solving, and accelerate interview readiness"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resourcesData.map((resource, ) => (
          <ResourceCard key={resource.id} resource={resource}  />
        ))}
      </div>
    </section>
  );
};
export default Resources;
