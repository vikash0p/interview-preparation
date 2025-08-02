import React from 'react';
import { ISlugLayoutProps } from '@/main/types/practical-interview.types';
import SlugLayoutContainer from "@/components/practical-interview-components/SlugLayoutContainer";

const PracticalInterviewSlugLayout: React.FC<ISlugLayoutProps> = ({ children,sideBar }) => {
	return <SlugLayoutContainer child={children} sideBar={sideBar} />;
};

export default PracticalInterviewSlugLayout;
