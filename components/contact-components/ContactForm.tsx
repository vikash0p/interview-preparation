import React, { ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

interface FormData {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
}

interface ContactFormProps {
	formData: FormData;
	setFormData: (data: FormData) => void;
	submitted: boolean;
	isLoading: boolean;
	handleSubmit: (e: FormEvent) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
	formData,
	setFormData,
	submitted,
	isLoading,
	handleSubmit,
}) => {
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: 50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ delay: 0.4 }}
			className='bg-gray-800/50 backdrop-blur-sm p-8 rounded-sm shadow-2xl border border-gray-700'
		>
			<h2 className='text-2xl font-bold mb-8 text-indigo-400'>
				Send Your Inquiry
			</h2>
			{submitted ? (
				<motion.div
					initial={{ scale: 0.5 }}
					animate={{ scale: 1 }}
					className='text-center py-12 space-y-4'
				>
					<FaCheckCircle className='text-6xl text-green-500 mx-auto' />
					<h3 className='text-3xl font-bold'>Message Sent!</h3>
					<p className='text-gray-300'>
						Thank you for contacting us. We&apos;ll respond within 24 hours.
					</p>
				</motion.div>
			) : (
				<form onSubmit={handleSubmit} className='space-y-6'>
					<div>
						<label className='block text-sm font-medium mb-2'>
							Full Name *
						</label>
						<input
							type='text'
							name='name'
							required
							className='w-full px-4 py-3 bg-gray-700 rounded-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
							value={formData.name}
							onChange={handleChange}
						/>
					</div>

					<div className='grid md:grid-cols-2 gap-6'>
						<div>
							<label className='block text-sm font-medium mb-2'>Email *</label>
							<input
								type='email'
								name='email'
								required
								className='w-full px-4 py-3 bg-gray-700 rounded-sm focus:ring-2 focus:ring-indigo-500'
								value={formData.email}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label className='block text-sm font-medium mb-2'>Phone</label>
							<input
								type='tel'
								name='phone'
								className='w-full px-4 py-3 bg-gray-700 rounded-sm focus:ring-2 focus:ring-indigo-500'
								value={formData.phone}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div>
						<label className='block text-sm font-medium mb-2'>Subject *</label>
						<input
							type='text'
							name='subject'
							required
							className='w-full px-4 py-3 bg-gray-700 rounded-sm focus:ring-2 focus:ring-indigo-500'
							value={formData.subject}
							onChange={handleChange}
						/>
					</div>

					<div>
						<label className='block text-sm font-medium mb-2'>Message *</label>
						<textarea
							name='message'
							required
							rows={5}
							className='w-full px-4 py-3 bg-gray-700 rounded-sm focus:ring-2 focus:ring-indigo-500'
							value={formData.message}
							onChange={handleChange}
						/>
					</div>

					<button
						type='submit'
						disabled={isLoading}
						className='w-full py-4 bg-indigo-500 text-gray-900 font-bold rounded-sm hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2'
					>
						{isLoading ? (
							<div className='animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900' />
						) : (
							<>
								<FaPaperPlane />
								Send Message
							</>
						)}
					</button>
				</form>
			)}
		</motion.div>
	);
};

export default ContactForm;
