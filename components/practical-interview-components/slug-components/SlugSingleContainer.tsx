'use client';
import { useParams } from 'next/navigation';
import { useGetInterviewBySlugQuery } from '@/main/redux-toolkit/services/practical-interviews/practicalInterviewApi';
import SlugLoading from '@/components/utilsComponent/loading-components/SlugLoading';
import SlugError from '@/components/utilsComponent/error-components/SlugError';
import SlugHeader from './SlugHeader';
import SlugSideBar from './SlugSideBar';
import SlugMainContent from './SlugMainContent';

const SlugSingleContainer = () => {
	const params = useParams();
	const slug = params?.slug as string;
	const technology = params?.technology as string;

	const { data, isLoading, isError } = useGetInterviewBySlugQuery({
		technology,
		slug,
	});

	if (isLoading) return <SlugLoading />;

	if (isError || !data) return <SlugError />;

	if (!data?.data) return null;

	return (
		<div className='bg-gray-900 min-h-screen text-gray-300'>
			{/* Header Section */}
			<SlugHeader data={data?.data} />
			{/* Main Content */}
			<div className=' pb-12'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					<SlugMainContent data={data?.data} />

					{/* Sidebar */}
					<SlugSideBar data={data?.data} />
				</div>
			</div>
		</div>
	);
};

export default SlugSingleContainer;
