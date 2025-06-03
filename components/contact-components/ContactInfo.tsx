import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface SectionItem {
  icon: JSX.Element;
  text: string;
  link?: string;
}

interface Section {
  title: string;
  items: SectionItem[];
}

interface ContactInfoProps {
  sections: Section[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({ sections }) => {
  return (
    <div className="space-y-10">
      <AnimatePresence>
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-indigo-400 flex items-center gap-2">
              <div className="h-1 w-8 bg-indigo-500 rounded-full" />
              {section.title}
            </h2>
            <div className="space-y-6">
              {section.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="p-3 bg-gray-700 rounded-lg group-hover:bg-indigo-500 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    {item.link ? (
                      <Link
                        href={item.link}
                        className="text-lg hover:text-indigo-400 transition-colors"
                      >
                        {item.text.split("\n").map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </Link>
                    ) : (
                      item.text.split("\n").map((line, i) => (
                        <p key={i} className="text-lg">
                          {line}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ContactInfo;
