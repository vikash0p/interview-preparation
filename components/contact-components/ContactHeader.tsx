import { motion } from 'framer-motion';

const ContactHeader = () => {
  return (
    <div className="text-center mb-16 space-y-6">
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600"
      >
        Let&apos;s Transform Your Career
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-gray-300 max-w-2xl mx-auto"
      >
        Reach out to our expert team for personalized guidance, technical support, or partnership opportunities.
        We&apos;re here to help you succeed!
      </motion.p>
    </div>
  );
};

export default ContactHeader;
