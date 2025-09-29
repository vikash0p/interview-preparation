import React from 'react';
import Link from 'next/link';

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
      {sections.map(section => (
        <div key={section.title} className="bg-gray-950/60 backdrop-blur-sm rounded-md p-8 shadow-2xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-gray-300 flex items-center gap-2">
            <div className="h-1 w-8 bg-gray-300 rounded-full" />
            {section.title}
          </h2>
          <div className="space-y-6">
            {section.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="p-3 bg-gray-800 rounded-md  transition-colors">{item.icon}</div>
                <div className="flex-1">
                  {item.link ? (
                    <Link href={item.link} className="text-lg hover:text-gray-300 transition-colors">
                      {item.text.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </Link>
                  ) : (
                    item.text.split('\n').map((line, i) => (
                      <p key={i} className="text-lg">
                        {line}
                      </p>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
