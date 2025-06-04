import React from 'react';
import Accordion from '@/components/global-components/Accordion';
import { JavaScriptMetaData } from '@/main/meta/JavaScriptMetaData';
export const metadata = JavaScriptMetaData;

const ReactInterviewQuestionLayout = ({children,}: {children: React.ReactNode;}) => {
	return (
		<div className='w-full min-h-screen lg:flex lg:pl-1/4 '>
			{/* Sidebar */}
			<div className='lg:w-1/4 h-screen fixed top-24 left-0  bg-gradient-to-b from-gray-900 to-gray-900  overflow-y-scroll  custom-scrollbar '>
				<Accordion />
			</div>
			{/* Main Content */}
			<div className='lg:w-3/4 ml-auto p-5 lg:pl-8'>{children}</div>
		</div>
	);
};

export default ReactInterviewQuestionLayout;
