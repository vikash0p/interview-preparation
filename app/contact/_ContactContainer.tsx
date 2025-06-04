'use client'

import dynamic from "next/dynamic"
import React from 'react'
const ContactComponent = dynamic(() => import("@/components/contact-components/ContactContainer"))
const Contact = () => {
  return (
    <div>
      <ContactComponent />
    </div>
  );
}

export default Contact