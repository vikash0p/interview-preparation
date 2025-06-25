'use client';
import ReusableHeading from '@/components/reusable-components/ReusableHeading';
import { frontendTopics } from '@/main/data/common/frontendTopicsData';
import InterviewCard from '@/components/utilsComponent/card-components/InterviewCard';

export default function Frontend() {
	return (
		<main className='min-h-screen px-4 py-16 text-white'>
			<section className='max-w-6xl mx-auto'>
				<ReusableHeading
					heading='Frontend Interview Topics'
					description='Master core frontend technologies and land your dream role with focused interview preparation.'
				/>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
					{frontendTopics.map((topic, index) => (
						<InterviewCard
							key={index}
							name={topic.name}
							href={topic.href}
							icon={topic.icon}
							comingSoon={topic.comingSoon}
							animationDelay={index * 0.1}
							actionLevel={topic.actionLabel}
						/>
					))}
				</div>
			</section>
		</main>
	);
}
