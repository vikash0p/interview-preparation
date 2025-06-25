import React from 'react';
import Accordion from '@/components/global-components/Accordion';
import { JavaScriptMetaData } from '@/main/meta/JavaScriptMetaData';
export const metadata = JavaScriptMetaData;

interface JavascriptMOckInterviewLayoutProps {
	children: React.ReactNode;
}

const JavascriptMOckInterviewLayout :React.FC<JavascriptMOckInterviewLayoutProps> = ({children}) => {
	return (
		<div className='w-full min-h-screen lg:flex lg:pl-1/4 '>
			<div className='lg:w-1/4 h-screen fixed top-20 mt-3 left-0    overflow-y-scroll  custom-scrollbar '>
				<Accordion />
			</div>
			<div className='lg:w-3/4 ml-auto p-5 lg:pl-8'>{children}</div>
		</div>
	);
};

export default JavascriptMOckInterviewLayout;
