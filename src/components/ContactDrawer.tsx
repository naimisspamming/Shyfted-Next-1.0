import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  Send,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InquiryFormData } from '../types';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialProjectTitle?: string;
  initialEstimate?: {
    totalPrice: number;
    timeline: string;
    summary: string;
  };
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({
  isOpen,
  onClose,
  initialService = 'video-editing',
  initialProjectTitle,
  initialEstimate,
}) => {
  const [inquiryType, setInquiryType] = useState<'audit' | 'call' | 'quote'>('audit');
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    service: (initialService as any) || 'video-editing',
    budget: '$2,000 - $5,000',
    projectDetails: initialProjectTitle ? `Inquiry regarding: ${initialProjectTitle}` : '',
    timeline: initialEstimate?.timeline || 'Within 2 Weeks',
    sourceFilesUrl: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        service: (initialService as any) || 'video-editing',
        projectDetails: initialProjectTitle
          ? `Inquiry regarding: ${initialProjectTitle}`
          : initialEstimate
          ? `Locked Estimate: ${initialEstimate.summary} ($${initialEstimate.totalPrice.toLocaleString()})`
          : prev.projectDetails,
      }));
    }
  }, [initialService, initialProjectTitle, initialEstimate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/85 transform-gpu"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 15 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg max-h-[92vh] flex flex-col bg-[#0f041e]/95 border-t sm:border border-purple-500/20 rounded-t-3xl sm:rounded-[32px] shadow-2xl backdrop-blur-xl overflow-hidden transform-gpu"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="sticky top-0 z-30 px-5 py-4 bg-purple-950/40 backdrop-blur-xl border-b border-purple-500/15 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">
                    Partner with Shyfted Next
                  </h2>
                  <p className="text-[11px] text-purple-300/70">
                    Guaranteed response within 4 hours
                  </p>
                </div>
              </div>

              <button
                id="close-contact-drawer-btn"
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/10 border border-white/15 text-purple-200 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="overflow-y-auto px-5 py-4 hide-scrollbar">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-950/50">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Project Brief Received!
                    </h3>
                    <p className="text-xs text-purple-200/70 mt-1 max-w-xs mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our team is reviewing your brief and will reply to <span className="text-purple-300">{formData.email}</span> within 4 hours with tailored concepts and sprint availability.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/20 text-left text-xs text-purple-100 space-y-1.5 backdrop-blur-md">
                    <div className="flex justify-between">
                      <span className="text-purple-300/70">Selected Service:</span>
                      <span className="font-bold text-white capitalize">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-300/70">Target Timeline:</span>
                      <span className="font-bold text-white">{formData.timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-300/70">Response SLA:</span>
                      <span className="font-bold text-emerald-400">&lt; 4 Hours</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full py-3 rounded-xl bg-white text-purple-950 hover:bg-purple-50 text-xs font-bold transition-all shadow-lg"
                  >
                    Back to Portfolio
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Inquiry Category Pills */}
                  <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-purple-950/40 backdrop-blur-md border border-purple-500/20">
                    <button
                      type="button"
                      onClick={() => setInquiryType('audit')}
                      className={`py-2 px-1 rounded-xl text-[10px] font-bold transition-all ${
                        inquiryType === 'audit'
                          ? 'bg-white text-purple-950 shadow-md'
                          : 'text-purple-300 hover:text-white'
                      }`}
                    >
                      Free Audit
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType('call')}
                      className={`py-2 px-1 rounded-xl text-[10px] font-bold transition-all ${
                        inquiryType === 'call'
                          ? 'bg-white text-purple-950 shadow-md'
                          : 'text-purple-300 hover:text-white'
                      }`}
                    >
                      15-Min Call
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType('quote')}
                      className={`py-2 px-1 rounded-xl text-[10px] font-bold transition-all ${
                        inquiryType === 'quote'
                          ? 'bg-white text-purple-950 shadow-md'
                          : 'text-purple-300 hover:text-white'
                      }`}
                    >
                      Custom Quote
                    </button>
                  </div>

                  {/* Contact Name & Email */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-purple-200">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Rivera"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-white text-xs placeholder:text-purple-300/30 focus:outline-none focus:border-purple-400 backdrop-blur-md"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-purple-200">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-white text-xs placeholder:text-purple-300/30 focus:outline-none focus:border-purple-400 backdrop-blur-md"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-medium text-purple-200">Service Required *</label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { id: 'video-editing', label: 'Video Editing' },
                        { id: 'website-redesign', label: 'Website Redesigning' },
                        { id: 'all-inclusive', label: 'Both / Full Growth' },
                      ].map((srv) => (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: srv.id as any })}
                          className={`py-2 px-1.5 rounded-xl border text-[10.5px] font-bold transition-all text-center ${
                            formData.service === srv.id
                              ? 'bg-purple-600/30 border-purple-400 text-white shadow-sm'
                              : 'bg-purple-950/20 border-purple-500/15 text-purple-300 hover:border-purple-500/30'
                          }`}
                        >
                          {srv.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div className="space-y-1.5">
                    <label htmlFor="budget-select" className="text-[11px] font-medium text-purple-200">Estimated Budget Range</label>
                    <select
                      id="budget-select"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#140628] border border-purple-500/20 text-white text-xs focus:outline-none focus:border-purple-400"
                    >
                      <option value="Under $1,500">Under $1,500 (Single Project)</option>
                      <option value="$1,500 - $3,000">$1,500 &ndash; $3,000 (Growth Sprint)</option>
                      <option value="$3,000 - $6,000">$3,000 &ndash; $6,000 (Full Creative Overhaul)</option>
                      <option value="$6,000+">$6,000+ (Monthly Studio Retainer)</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-purple-200">Project Goals or Current Links</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Share your current website link, raw footage links, target audience, or references..."
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-white text-xs placeholder:text-purple-300/30 focus:outline-none focus:border-purple-400 backdrop-blur-md resize-none"
                    />
                  </div>

                  <button
                    id="submit-inquiry-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-xl bg-white text-purple-950 hover:bg-purple-50 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-purple-950/30 border-t-purple-950 rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-purple-950" />
                        <span>Request Sprint Window & Proposal</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-purple-300/60 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>Confidential NDA • Response guaranteed within 4 hours</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
