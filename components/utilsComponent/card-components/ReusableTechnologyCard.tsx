import DifficultyRating from "@/components/practical-interview-components/DifficultyRating";
import { IPracticalInterview } from '@/main/types/practical-interview.types';
import { Link } from 'next-view-transitions';
import React from 'react';
import { BiShare } from "react-icons/bi";
import {
	FiClock,
	FiEye,
	FiHeart,
	FiBookmark,
	FiShare2,
	FiCode,
	FiZap,
	FiTrendingUp,
	FiTrendingDown,
	FiActivity,
} from 'react-icons/fi';

interface ReusableTechnologyCardProps {
	interview: IPracticalInterview;
}

const ReusableTechnologyCard: React.FC<ReusableTechnologyCardProps> = ({
	interview,
}) => {
	const getPopularityBadge = (popularity: string) => {
		switch (popularity) {
			case 'high':
				return {
					label: 'Most Popular',
					icon: <FiTrendingUp className='text-orange-400' />,
				};
			case 'normal':
				return {
					label: 'Popular',
					icon: <FiActivity className='text-yellow-400' />,
				};
			case 'low':
			default:
				return {
					label: 'Less Popular',
					icon: <FiTrendingDown className='text-gray-400' />,
				};
		}
	};

	const difficulty = (diff: string) => {
		if (diff === 'easy') return 'bg-green-900/30 text-green-300';
		if (diff === 'medium') return 'bg-yellow-900/30 text-yellow-300';
		if (diff === 'hard') return 'bg-red-900/30 text-red-300';
		return 'bg-gray-900/30 text-gray-300';
	};

	return (
		<article
			className='group relative flex flex-col justify-between bg-gray-950/30 hover:bg-gray-950 rounded-xl shadow-md overflow-hidden border border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
			aria-labelledby={`card-title-${interview._id}`}
		>
			<div className='p-2 flex flex-col gap-4'>
				{/* Header: Tech2nology & Difficulty */}
				<div className='flex justify-between items-center'>
					<span className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-slate-800/50 text-gray-300'>
						<FiCode /> {interview.technology}
					</span>
					<span
						className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm ${difficulty(
							interview.difficulty
						)}`}
					>
						<FiZap /> {interview.difficulty}
					</span>
				</div>

				<div className='flex flex-col gap-1'>
					<h2 className='text-lg text-gray-300 font-semibold group-hover:text-white transition-colors'>
						{interview.title}
					</h2>
					<p className='text-gray-400 text-sm '>
						{' '}
						<span className='font-semibold text-gray-300'>
							Problem Statement -
						</span>{' '}
						{interview.problemStatement}
					</p>
					<p className='text-gray-400 text-sm '>
						{' '}
						<span className='font-semibold text-gray-300'>Tips -</span>{' '}
						{interview.tips}
					</p>
					<p className='text-gray-400 text-sm '>
						{' '}
						<span className='font-semibold text-gray-300'>
							Challenges -
						</span>{' '}
						{interview.challenges}
					</p>
					<p>
						<span className='font-semibold text-gray-300'>Requirements -</span>{' '}
						{interview.requirements.map((value) => (
							<span
								key={value}
								className='inline-block bg-gray-800 text-gray-300 px-2 py-1 rounded-md mr-2 mb-2 text-xs'
							>
								{value}
							</span>
						))}
					</p>
				</div>
				{/* Stats */}
				<div className='flex flex-wrap items-center gap-2 text-xs'>
					<span className='flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-800/50 text-gray-300'>
						<FiClock className='text-teal-500' />
						{interview.estimatedTime.min}-{interview.estimatedTime.max} mins
					</span>

					{/* Popularity */}
					{(() => {
						const { label, icon } = getPopularityBadge(interview.popularity);
						return (
							<span className='flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-800/50 text-gray-300'>
								{icon} {label}
							</span>
						);
					})()}
				</div>

				<div>
					<DifficultyRating rating={interview?.difficultyRating ?? 0} />
				</div>

				<div className='flex items-center gap-2 text-xs'>
					<span className='flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-900/30 text-green-300'>
						<FiEye className='text-green-400' />
						{interview.views}
					</span>

					<span className='flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-900/30 text-pink-300'>
						<FiHeart className='text-pink-400' />
						{interview.likes}
					</span>

					<span className='flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 text-blue-300'>
						<FiBookmark className='text-blue-400' />
						{interview.bookmarks}
					</span>

					<span className='flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-900/30 text-yellow-300'>
						<BiShare className='text-yellow-400' />
						{interview.share}
					</span>
				</div>
			</div>

			{/* Footer */}
			<div className='p-2 py-6 pt-0 mt-auto'>
				<div className='pt-4 border-t border-gray-700 flex items-center justify-between flex-wrap gap-3'>
					<Link
						aria-label={`Solve ${interview.title} interview`}
						title={`Solve ${interview.title} interview`}
						// rel='noopener noreferrer'
						scroll={false}
						href={`/practical-interviews/${interview.technology}/${interview.slug}`}
						className='inline-block px-5 py-2 text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition-all'
					>
						Solve This Challenge{' '}
					</Link>
					<div className='flex gap-2'>
						<button
							className='p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-indigo-400 transition-colors'
							aria-label='Bookmark this interview'
							title='Bookmark'
						>
							<FiBookmark className='w-5 h-5' />
						</button>
						<button
							className='p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-indigo-400 transition-colors'
							aria-label='Share this interview'
							title='Share'
						>
							<FiShare2 className='w-5 h-5' />
						</button>
					</div>
				</div>
			</div>
		</article>
	);
};

export default ReusableTechnologyCard;
