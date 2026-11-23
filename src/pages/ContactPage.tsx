import React, { useState } from 'react';
import { SITE_CONFIG, whatsappUrl, mailtoUrl } from '../config/siteConfig';
import { WhatsAppButton, EmailButton } from '../components/ContactButtons';
import { MessageCircle, Mail, Send } from 'lucide-react';

export function ContactPage() {
  const [form, setForm] = useState({ name: '', business: '', service: '', rating: '5', text: '' });
  const [submitted, setSubmitted] = useState(false);
  const [hp, setHp] = useState(''); // honeypot

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hp) return; // spam
    if (!form.name || !form.text) return;
    // If a form endpoint is configured, submit there; otherwise just show thank-you.
    if (SITE_CONFIG.reviewFormEndpoint) {
      fetch(SITE_CONFIG.reviewFormEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, approved: false }),
      }).catch(() => {});
    }
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-black text-white mb-6">Contact Us</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <div className="rounded-2xl border border-purple-500/15 bg-[#0f041e]/90 p-5 border border-purple-500/15">
          <div className="flex items-center gap-2 font-bold text-white mb-2">
            <MessageCircle className="h-5 w-5 text-[#25D366]" /> WhatsApp
          </div>
          <p className="text-sm text-purple-300/70 mb-3">Chat with us directly on WhatsApp.</p>
          <WhatsAppButton message={SITE_CONFIG.whatsappMessages.general} label="Open WhatsApp" />
        </div>
        <div className="rounded-2xl border border-purple-500/15 bg-[#0f041e]/90 p-5 border border-purple-500/15">
          <div className="flex items-center gap-2 font-bold text-white mb-2">
            <Mail className="h-5 w-5 text-purple-400" /> Email
          </div>
          <p className="text-sm text-purple-300/70 mb-3">{SITE_CONFIG.email}</p>
          <EmailButton subject={SITE_CONFIG.mailto.generalSubject} body={SITE_CONFIG.whatsappMessages.general} label="Send Email" />
        </div>
      </div>

      <div className="rounded-2xl border border-purple-500/15 bg-[#0f041e]/90 p-6 border border-purple-500/15">
        <h2 className="text-xl font-bold text-white mb-2">Share Your Review</h2>
        <p className="text-sm text-purple-300/70 mb-4">
          If you have received our services, we would love to hear your feedback. Reviews are submitted for approval before being published.
        </p>
        {submitted ? (
          <div className="text-center py-6">
            <p className="font-bold text-white">Thank you for your review!</p>
            <p className="text-sm text-purple-300/70">It will be reviewed before being published.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" className="hidden" value={hp} onChange={(e) => setHp(e.target.value)} tabIndex={-1} autoComplete="off" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-purple-500/15 text-sm focus:outline-none focus:border-[#6366F1]"
              />
              <input
                placeholder="Business name (optional)"
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-purple-500/15 text-sm focus:outline-none focus:border-[#6366F1]"
              />
            </div>
            <input
              placeholder="Service received"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-purple-500/15 text-sm focus:outline-none focus:border-[#6366F1]"
            />
            <select
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-purple-500/15 text-sm focus:outline-none focus:border-[#6366F1]"
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>{r} star{r > 1 ? 's' : ''}</option>
              ))}
            </select>
            <textarea
              required
              rows={4}
              placeholder="Your review"
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-purple-500/15 text-sm focus:outline-none focus:border-[#6366F1] resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-bold text-white hover:bg-purple-500 transition-colors"
            >
              <Send className="h-4 w-4" /> Submit Review
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
