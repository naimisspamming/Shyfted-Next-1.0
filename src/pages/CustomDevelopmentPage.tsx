import React from 'react';
import { CUSTOM_SERVICES } from '../data/portfolioData';
import { SITE_CONFIG } from '../config/siteConfig';
import { WhatsAppButton, EmailButton } from '../components/ContactButtons';
import { CheckCircle2 } from 'lucide-react';

const ICONS: Record<string, any> = {};

export function CustomDevelopmentPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">Have a Unique Idea? Let's Build It Together.</h1>
        <p className="text-purple-300/70 max-w-2xl mx-auto">
          We develop custom personal websites based on your specific requirements. From concept to deployment and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {CUSTOM_SERVICES.map((s) => (
          <div key={s.id} className="rounded-2xl border border-purple-500/15 bg-[#0f041e]/90 p-5 shadow-sm border border-purple-500/15">
            <h3 className="font-bold text-white mb-1 text-sm">{s.name}</h3>
            <p className="text-xs text-purple-300/70">{s.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-[#111827] text-white p-6 sm:p-8 mb-12">
        <h2 className="text-xl sm:text-2xl font-black mb-3">What we can build</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-200">
          {[
            'Custom personal portfolio',
            'Personal brand website',
            'Personal landing page',
            'Personal blog',
            'Resume / CV website',
            'Third-party integrations',
            'Existing website improvements',
            'Maintenance and technical support',
          ].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-indigo-400" /> {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-bold text-white mb-4">Discuss your requirements</h2>
        <p className="text-purple-300/70 mb-6 text-sm">Reach out via WhatsApp or Email. No account or registration needed.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <WhatsAppButton message={SITE_CONFIG.whatsappMessages.customDevelopment} label="Chat on WhatsApp" />
          <EmailButton subject={SITE_CONFIG.mailto.customSubject} body={SITE_CONFIG.whatsappMessages.customDevelopment} label="Email Us" />
        </div>
      </div>
    </div>
  );
}
