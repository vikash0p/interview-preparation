import ReusableContainer from '@/components/reusable-components/ReusableContainer';
import { CodingLinkData } from '@/main/data/ReactData/ReactPractical/ReactPracticalData';
import React from 'react';

export function generateStaticParams() {
	return CodingLinkData.map((post) => ({
		id: post.url.toString(),
	}));
}

interface ReactByIdProps {
	params: { id: string };
}

const ReactById: React.FC<ReactByIdProps> = ({ params }) => {
	const singleData = CodingLinkData.find(
		(value) => value.url.toString() === params.id
	);

	if (!singleData) {
		return (
			<section className='h-screen flex items-center justify-center'>
				<p className='text-red-500 text-lg'>Data not found!</p>
			</section>
		);
	}

	return (
		<section className='h-screen'>
			<ReusableContainer data={singleData} />
		</section>
	);
};

export default ReactById;
