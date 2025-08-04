import { motion } from 'framer-motion';
import type { testimonialInterface } from '@/main/data/home/testimonialsData';
import { FaStar } from 'react-icons/fa';

interface TestimonialCardProps {
  testimonial: testimonialInterface;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const initials = testimonial.name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <motion.div
      className="group relative bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-700 p-6 rounded-sm transition-all duration-300 hover:border-indigo-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -5,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
      }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.05 }}
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Header: Avatar & Name */}
      <div className="relative z-10 flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-xl font-bold text-black shadow-md">
          {initials}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold ">{testimonial.name}</h4>
          <p className="text-sm ">{testimonial.role}</p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="relative z-10 mb-2 flex text-yellow-400" aria-label="5 star rating">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar key={i} className="w-5 h-5" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="relative z-10  leading-relaxed">{testimonial.text}</p>
    </motion.div>
  );
};

export default TestimonialCard;
