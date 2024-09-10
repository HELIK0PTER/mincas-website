// app/contatos/ContactInfo.tsx
'use client';

import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactData {
  type: string;
  title: string;
  content: string;
}

interface ContactInfoProps {
  contactData: ContactData[];
}

const iconMap: { [key: string]: React.ElementType } = {
  email: FaEnvelope,
  phone: FaPhone,
  address: FaMapMarkerAlt,
};

const ContactCard: React.FC<ContactData> = ({ type, title, content }) => {
  const Icon = iconMap[type] || FaEnvelope;
  return (
    <div className="flex items-center p-4 bg-secondary dark:bg-primary rounded-lg shadow-md">
      <Icon className="text-primary dark:text-secondary text-2xl mr-4" />
      <div>
        <h3 className="font-semibold text-primary dark:text-secondary">{title}</h3>
        <p className="text-neutral dark:text-neutral-foreground">{content}</p>
      </div>
    </div>
  );
};

const ContactInfo: React.FC<ContactInfoProps> = ({ contactData }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {contactData.map((info, index) => (
        <ContactCard key={index} {...info} />
      ))}
    </div>
  );
};

export default ContactInfo;