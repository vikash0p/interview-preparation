import React from 'react';
import { motion } from 'framer-motion';

const LocationMap = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.8 }}
			className='rounded-sm overflow-hidden shadow-2xl border border-gray-700'
		>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.681003147675!2d-122.4194155846854!3d37.77492997975923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTech%20Valley%20Hub!5e0!3m2!1sen!2sus!4v1629786006781!5m2!1sen!2sus'
				width='100%'
				height='300'
				style={{ border: 0 }}
				allowFullScreen
				loading='lazy'
				className='grayscale hover:grayscale-0 transition-all'
			/>
		</motion.div>
	);
};

export default LocationMap;
