import { motion } from 'framer-motion';
import type { testimonialInterface } from '@/main/data/common/testimonialsData';
import { FaStar } from 'react-icons/fa';

interface TestimonialCardProps {
	testimonial: testimonialInterface;
	index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
	return (
		<motion.div
			key={index}
			className='group relative bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-700 p-6 rounded-xl hover:border-indigo-500 transition-opacity duration-300'
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			whileHover={{
				y: -5,
				boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
			}}
			transition={{ delay: index * 0.2 }}
		>
			<div className='absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl' />

			<div className='flex items-center mb-6'>
				<div
					className={`w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl font-bold text-black `}
				>
					{testimonial.name.split(' ').map((word) => word.charAt(0))}
				</div>
				<div className='ml-4'>
					<h4 className='font-semibold text-neutral-200'>{testimonial.name}</h4>
					<p className='text-neutral-400 text-sm'>{testimonial.role}</p>
				</div>
			</div>
			<div className='mb-6'>
				<div className='flex text-yellow-400 mb-2'>
					{[...Array(5)].map((_, i) => (
						<FaStar key={i} className='w-5 h-5' />
					))}
				</div>
			</div>
			<p className='text-neutral-400'>{testimonial.text}</p>
		</motion.div>
	);
};

export default TestimonialCard;
