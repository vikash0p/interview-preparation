import React from 'react';

const LocationMap = () => {
  return (
    <div className="rounded-md overflow-hidden shadow-2xl border border-gray-700">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224612.23902474958!2d77.15426288534749!3d28.40216647152685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15f5a424b1%3A0xe4f50576c850e0f2!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1759158232372!5m2!1sen!2sin"
        width="100%"
        height="450"
        loading="lazy"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LocationMap;
