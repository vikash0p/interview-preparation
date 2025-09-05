import { motion } from 'framer-motion';
import type { Message } from '@/main/data/home/mockInterviewData';

const ChatBubbleCard: React.FC<{ message: Message }> = ({ message }) => (
  <motion.div
    className="flex items-start space-x-4"
    initial={{ opacity: 0, x: message.type === 'ai' ? -20 : 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.02 }}
  >
    <motion.div
      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg`}
      whileHover={{ scale: 1.1 }}
    >
      <message.icon />
    </motion.div>
    <motion.div
      className={`rounded-md p-4 flex-1 ${
        message.type === 'ai'
          ? 'bg-indigo-500/10 border border-indigo-500/30'
          : 'bg-green-500/10 border border-green-500/30'
      }`}
      whileHover={{
        scale: 1.01,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
      }}
    >
      <p className="text-sm leading-relaxed">{message.content}</p>
    </motion.div>
  </motion.div>
);

export default ChatBubbleCard;
