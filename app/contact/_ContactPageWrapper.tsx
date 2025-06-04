'use client'

import dynamic from "next/dynamic"
import React from 'react'
const ContactComponent = dynamic(() => import("@/components/contact-components/ContactContainer"))
const ContactPageWrapper = () => {
  return (
    <div>
      <ContactComponent />
    </div>
  );
}

export default ContactPageWrapper