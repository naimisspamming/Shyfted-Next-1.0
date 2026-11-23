import React from 'react';
import { SITE_CONFIG, whatsappUrl, mailtoUrl } from '../config/siteConfig';
import { MessageCircle, Mail } from 'lucide-react';

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = SITE_CONFIG.whatsappMessages.general,
  label = 'Chat on WhatsApp',
  className = '',
}) => (
  <a
    href={whatsappUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#20BD5A] transition-colors ${className}`}
  >
    <MessageCircle className="h-4 w-4" />
    {label}
  </a>
);

interface EmailButtonProps {
  subject?: string;
  body?: string;
  label?: string;
  className?: string;
}

export const EmailButton: React.FC<EmailButtonProps> = ({
  subject = SITE_CONFIG.mailto.generalSubject,
  body = SITE_CONFIG.whatsappMessages.general,
  label = 'Email Us',
  className = '',
}) => (
  <a
    href={mailtoUrl(subject, body)}
    className={`inline-flex items-center gap-2 rounded-xl border border-purple-500/15 bg-white px-5 py-3 text-sm font-bold text-purple-950 shadow-sm hover:border-purple-400 hover:text-purple-400 transition-colors ${className}`}
  >
    <Mail className="h-4 w-4" />
    {label}
  </a>
);
