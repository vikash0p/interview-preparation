import SlugContainer from "@/components/practical-interview-components/SlugContainer";
import React from 'react';
import { ISlugLayoutProps } from '@/main/types/practical-interview.types';


const PracticalInterviewSlugLayout: React.FC<ISlugLayoutProps> = ({ children,sideBar }) => {
	return <SlugContainer child={children} sideBar={sideBar} />
};

export default PracticalInterviewSlugLayout;
