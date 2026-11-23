// Centralized site configuration.
// Update these values to match your real business details.
// Do NOT put secrets here; this file is bundled into the client.

export const SITE_CONFIG = {
  companyName: 'Shyfted Next',
  tagline: 'Smart Web Applications Built for Your Business.',

  // Contact details (placeholders — replace with real values)
  whatsappNumber: '8801XXXXXXXXX', // e.g. 88017XXXXXXXX
  email: 'hello@shyftednext.com',
  website: 'https://shyftednext.com',

  socials: {
    facebook: '',
    linkedin: '',
    twitter: '',
    instagram: '',
    github: '',
  },

  // Form endpoint for review submissions (Formspree/EmailJS/etc.).
  // Replace with your real endpoint. Leave empty to disable live submission.
  reviewFormEndpoint: '',

  whatsappMessages: {
    general: 'Hello Shyfted Next, I am interested in your web application services. I would like to discuss my requirements.',
    customDevelopment: 'Hello Shyfted Next, I have an idea for a custom web application. I would like to discuss my requirements.',
    solution: (name: string) =>
      `Hello Shyfted Next, I am interested in your ${name}. I would like to know more about the features and customization options.`,
  },

  mailto: {
    generalSubject: 'Web Application Inquiry — Shyfted Next',
    customSubject: 'Custom Web Application Development Inquiry — Shyfted Next',
  },
};

export function whatsappUrl(message: string): string {
  const num = SITE_CONFIG.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

export function mailtoUrl(subject: string, body: string): string {
  return `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
