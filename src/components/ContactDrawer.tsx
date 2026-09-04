import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  Send,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
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
  flowType?: 'free-design' | 'basic-plan' | 'standard-plan' | 'premium-plan' | 'generic';
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({
  isOpen,
  onClose,
  initialService = 'video-editing',
  initialProjectTitle,
  initialEstimate,
  flowType = 'generic',
}) => {
  const [currentStep, setCurrentStep] = useState(1);
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

  const getStepsForFlow = () => {
    switch (flowType) {
      case 'free-design':
        return [
          { id: 1, title: 'Choose Free Service' },
          { id: 2, title: 'Your Info' },
          { id: 3, title: 'Project Details' },
        ];
      case 'basic-plan':
        return [
          { id: 1, title: 'Your Info' },
          { id: 2, title: 'Service' },
          { id: 3, title: 'Details' },
        ];
      case 'standard-plan':
      case 'premium-plan':
        return [
          { id: 1, title: 'Your Info' },
          { id: 2, title: 'Service & Budget' },
          { id: 3, title: 'Business Goals' },
          { id: 4, title: 'Project Details' },
        ];
      default:
        return [
          { id: 1, title: 'Instant Reservation' },
        ];
    }
  };

  const steps = getStepsForFlow();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 800);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    onClose();
  };

  const renderStep = () => {
    const step = steps[currentStep - 1];
    
    switch (step.title) {
      case 'Inquiry Type':
        return (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-lg font-bold text-white mb-4">
              {flowType === 'generic' ? 'What brings you here?' : `Set up your ${flowType.replace('-', ' ')}`}
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { id: 'audit', label: 'Free Strategy Audit', icon: Sparkles },
                { id: 'call', label: '15-Min Discovery Call', icon: Sparkles },
                { id: 'quote', label: 'Custom Project Quote', icon: Sparkles },
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => { setInquiryType(type.id as any); setCurrentStep(currentStep + 1); }}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                    inquiryType === type.id
                      ? 'bg-purple-600/30 border-purple-400 text-white shadow-md'
                      : 'bg-purple-950/20 border-purple-500/15 text-purple-200 hover:border-purple-500/30'
                  }`}
                >
                  <span className="font-semibold text-sm">{type.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              ))}
            </div>
          </div>
        );
      case 'Choose Free Service':
        return (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-lg font-bold text-white mb-2">What free service do you want?</h3>
            <p className="text-xs text-purple-200/70 mb-4">Select whether you'd like a free high-retention video edit or a free website redesign concept.</p>
            <div className="grid grid-cols-1 gap-3">
              {[
                { id: 'video-editing', label: 'Free Video Editing', desc: 'High-retention shorts, reels & hooks' },
                { id: 'website-redesign', label: 'Free Website Redesign', desc: 'Conversion-focused landing page UI/UX' },
              ].map((srv) => (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, service: srv.id as any });
                    setCurrentStep(currentStep + 1);
                  }}
                  className={`flex flex-col text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                    formData.service === srv.id
                      ? 'bg-purple-600/30 border-purple-400 text-white shadow-md'
                      : 'bg-purple-950/20 border-purple-500/15 text-purple-200 hover:border-purple-500/30'
                  }`}
                >
                  <span className="font-bold text-sm text-white">{srv.label}</span>
                  <span className="text-xs text-purple-200/70 mt-1">{srv.desc}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 'Instant Reservation':
        return (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-lg font-bold text-white mb-2">Reserve Your Spot</h3>
            <p className="text-xs text-purple-200/70 mb-4">Submit your details to reserve instantly. No questionnaires required.</p>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-purple-200 mb-1 block">Your Name</label>
                <input type="text" required placeholder="Alex Rivera" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-white text-sm focus:border-purple-400 focus:outline-none" />
              </div>
              <div>
                <label className="text-xs text-purple-200 mb-1 block">Work Email</label>
                <input type="email" required placeholder="alex@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-white text-sm focus:border-purple-400 focus:outline-none" />
              </div>
            </div>
          </div>
        );
      case 'Your Info':
        return (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-lg font-bold text-white mb-4">Let's get to know you</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-purple-200 mb-1 block">Your Name</label>
                <input type="text" required placeholder="Alex Rivera" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-white text-sm focus:border-purple-400 focus:outline-none" />
              </div>
              <div>
                <label className="text-xs text-purple-200 mb-1 block">Work Email</label>
                <input type="email" required placeholder="alex@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-white text-sm focus:border-purple-400 focus:outline-none" />
              </div>
            </div>
          </div>
        );
      case 'Service':
      case 'Service & Budget':
        return (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-lg font-bold text-white mb-4">Service & Budget</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-purple-200 mb-1 block">Service</label>
                <div className="grid grid-cols-2 gap-2">
                  {['video-editing', 'website-redesign'].map((s) => (
                    <button key={s} type="button" onClick={() => setFormData({...formData, service: s as any})} className={`p-3 rounded-xl border text-xs font-bold capitalize ${formData.service === s ? 'bg-purple-600/30 border-purple-400 text-white' : 'bg-purple-950/20 border-purple-500/15 text-purple-300'}`}>{s.replace('-', ' ')}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs text-purple-200 mb-1 block">Estimated Budget</label>
                <select value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-[#140628] border border-purple-500/20 text-white text-sm focus:border-purple-400">
                  <option value="Under $1,500">Under $1,500</option>
                  <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                  <option value="$3,000 - $6,000">$3,000 - $6,000</option>
                  <option value="$6,000+">$6,000+</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 'Business Goals':
        return (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-lg font-bold text-white mb-4">Tell us your goals</h3>
             <textarea
              rows={4}
              required
              placeholder="What are the main business goals for this project?"
              value={formData.projectDetails}
              onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-white text-sm placeholder:text-purple-300/30 focus:border-purple-400 focus:outline-none resize-none"
            />
          </div>
        );
      case 'Project Details':
      case 'Details':
        return (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-lg font-bold text-white mb-4">Project Details</h3>
            <textarea
              rows={4}
              required
              placeholder="Tell us about your project, goals, or share a link..."
              value={formData.projectDetails}
              onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-white text-sm placeholder:text-purple-300/30 focus:border-purple-400 focus:outline-none resize-none"
            />
          </div>
        );
      default:
        return null;
    }
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
            <div className="sticky top-0 z-30 px-5 py-4 bg-purple-950/40 backdrop-blur-xl border-b border-purple-500/15 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">
                    {flowType === 'free-design' ? 'Get Your Free Edit' : 
                     flowType === 'basic-plan' ? 'Get Started: Basic Plan' :
                     flowType === 'standard-plan' ? 'Get Started: Standard Plan' :
                     flowType === 'premium-plan' ? 'Get Started: Premium Plan' :
                     'Instant Reservation'}
                  </h2>
                  <div className="flex gap-1 mt-0.5">
                    {steps.map((step) => (
                      <div key={step.id} className={`h-1 rounded-full ${step.id <= currentStep ? 'bg-purple-400' : 'bg-purple-900'} flex-1`} style={{width: '20px'}} />
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/10 border border-white/15 text-purple-200 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-6 flex-1">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-950/50">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Project Brief Received!</h3>
                  <p className="text-xs text-purple-200/70">Thank you, {formData.name}. We'll reply within 4 hours.</p>
                  <button onClick={handleReset} className="w-full py-3 rounded-xl bg-white text-purple-950 font-bold text-xs">Back to Portfolio</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="h-full flex flex-col">
                  <div className="flex-1">{renderStep()}</div>
                  <div className="flex gap-3 pt-6">
                    {currentStep > 1 && (
                      <button type="button" onClick={handleBack} className="flex-1 py-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-200 font-bold text-sm">Back</button>
                    )}
                    <button type="submit" className="flex-1 py-3 rounded-xl bg-white text-purple-950 font-bold text-sm shadow-md flex items-center justify-center gap-2">
                      {currentStep === steps.length ? (isSubmitting ? 'Submitting...' : 'Send Inquiry') : 'Continue'}
                      {currentStep !== steps.length && <ChevronRight className="w-4 h-4" />}
                    </button>
                  </div>
                </form>
              )}
            </div>
            {!isSubmitted && (
                <div className="px-5 pb-6 flex items-center justify-center gap-2 text-[10px] text-purple-300/60 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>Confidential NDA • Response guaranteed within 4 hours</span>
                </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
