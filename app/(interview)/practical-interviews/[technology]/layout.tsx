import React from 'react';

interface TechnologyLayoutProps {
	children: React.ReactNode;
  topBar: React.ReactNode;
}

const TechnologyLayout: React.FC<TechnologyLayoutProps> = ({ children, topBar }) => {
	return <main>
    <section className="">{topBar} </section>
    <section className="">{children} </section>
  </main>;
};

export default TechnologyLayout;
