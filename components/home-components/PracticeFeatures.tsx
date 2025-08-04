'use client';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import { practiceData } from '@/main/data/home/practiceData';
import PracticeCard from '../utilsComponent/card-components/PracticeCard';
import { Link } from 'next-view-transitions';

const PracticeFeatures = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 50 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className='space-y-6'
		>
			{practiceData.map((feature) => (
				<PracticeCard key={feature.id} {...feature} />
			))}

			<motion.button
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				className='w-full mt-6 bg-gray-900  py-4 rounded-sm hover:bg-gray-800 transition-colors flex items-center justify-center group'
			>
				<Link href={'/coding/ReactJS'} className='flex items-center' passHref>
					<span className='text-gray-400'>View More Practice Questions</span>
					<FaChevronRight className='ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform' />
				</Link>
			</motion.button>
		</motion.div>
	);
};

export default PracticeFeatures;
