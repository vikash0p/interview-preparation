import React from 'react';
import DomainCard from '../utilsComponent/card-components/DomainCard';
import { ReusableHeading } from '../reusable-components/ReusableHeading';
import { MOCK_INTERVIEWS_DATA } from "@/main/data/link/mockTechnologiesData";

const Domains = () => {
  return (
    <section className="mt-10 md:mt-14 lg:mt-20">
      <ReusableHeading
        heading="Professional Domains Where I Apply My Skills"
        description="Explore my expertise in diverse technical areas, including web development, UI/UX design, APIs, and system architecture"
      />

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {MOCK_INTERVIEWS_DATA.map((domain, index) => (
          <DomainCard key={index} domain={domain}  />
        ))}
      </div>
    </section>
  );
};

export default Domains;
