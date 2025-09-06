import type { Testimonial as TestimonialInterface } from '@/main/data/home/testimonialsData';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

interface TestimonialCardProps {
  testimonial: TestimonialInterface;
  index: number;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div
      className="relative overflow-hidden w-full p-6 rounded-2xl transition-all duration-300 ease-in-out border border-gray-700 hover:bg-gradient-to-r hover:from-gray-950 hover:to-gray-900 hover:border-gray-500 bg-gradient-to-t from-gray-900/20 to-gray-950/40"
      role="article"
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      <FaQuoteLeft className="absolute top-4 right-4 text-indigo-400/80 text-4xl pointer-events-none" />

      {/* Header: Avatar & Name */}
      <div className="relative z-10 flex items-center mb-4">
        <Image src={testimonial.image} alt={testimonial.name} width={56} height={56} className="rounded-full border border-gray-700/60 shadow-sm" />
        <div className="ml-4">
          <h4 className="font-semibold text-gray-100 transition-colors">{testimonial.name}</h4>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="relative z-10 text-gray-300 text-sm md:text-base leading-relaxed italic">“{testimonial.text}”</p>
    </div>
  );
};

export default TestimonialCard;
