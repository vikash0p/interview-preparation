import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaRegSmile, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';



export  const contactDataFirst = [
    {
      title: 'Connect With Us',
      items: [
        {
          icon: <FaPhone className="w-6 h-6" />,
          text: '+1 (555) 123-4567',
          link: 'tel:+15551234567',
        },
        {
          icon: <FaEnvelope className="w-6 h-6" />,
          text: 'support@interviewprep.com',
          link: 'mailto:support@interviewprep.com',
        },
        {
          icon: <FaMapMarkerAlt className="w-6 h-6" />,
          text: 'Tech Valley Hub\n789 Coding Blvd\nSan Francisco, CA 94107',
        },
      ],
    },
    {
      title: 'Operation Hours',
      items: [
        {
          icon: <FaClock className="w-6 h-6" />,
          text: 'Weekdays: 8:00 AM - 8:00 PM PST',
        },
        {
          icon: <FaClock className="w-6 h-6" />,
          text: 'Weekends: 10:00 AM - 6:00 PM PST',
        },
        {
          icon: <FaRegSmile className="w-6 h-6" />,
          text: '24/7 Online Support Available',
        },
      ],
    },
  ];

export  const socialLinks = [
    { icon: <FaFacebook />, name: 'Facebook', url: '#' },
    { icon: <FaTwitter />, name: 'Twitter', url: '#' },
    { icon: <FaLinkedin />, name: 'LinkedIn', url: '#' },
    { icon: <FaGithub />, name: 'GitHub', url: '#' },
  ];