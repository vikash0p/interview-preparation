import { motion } from 'framer-motion';
import type { Feature } from '@/main/data/home/mockInterviewData';

const MockInterviewCard: React.FC<Feature> = ({
	icon: Icon,
	title,
	description,
	color,
}) => (
	<motion.div
		className='group relative bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-700 p-6 rounded-xl hover:border-indigo-500 transition-opacity duration-300'
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, margin: '-100px' }}
		transition={{ duration: 0.4 }}
		whileHover={{
			y: -5,
			boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
		}}
	>
		<div className='absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl' />
		<div
			className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}
		>
			<Icon />
		</div>
		<h4 className='text-lg font-semibold mb-2'>{title}</h4>
		<p className='text-neutral-400'>{description}</p>
	</motion.div>
);

export default MockInterviewCard;
