import React from 'react';
import { PortfolioProject } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Sparkles,
  CheckCircle2,
  Clock,
  Star,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenInquiry: (service: string, projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenInquiry,
}) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 transform-gpu"
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
            {/* Modal Top Bar */}
            <div className="sticky top-0 z-30 px-5 py-3.5 bg-purple-950/40 backdrop-blur-xl border-b border-purple-500/15 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-purple-500/20 border border-purple-400/30 text-purple-300 text-[10px] font-bold uppercase tracking-wider">
                  {project.service === 'video-editing'
                    ? '🎬 Video Editing'
                    : '💻 Website Redesign'}
                </span>
                <span className="text-xs text-purple-300/70 font-medium">
                  {project.client}
                </span>
              </div>

              <button
                id="close-project-modal-btn"
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/10 border border-white/15 text-purple-200 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto px-5 py-4 space-y-5 hide-scrollbar">
              {/* Hero Media Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/15 bg-black">
                {project.videoUrl && project.service === 'video-editing' ? (
                  <video
                    src={project.videoUrl}
                    poster={project.coverImage}
                    controls
                    autoPlay
                    playsInline
                    className="w-full max-h-[300px] object-cover"
                  />
                ) : project.service === 'website-redesign' && project.afterImage ? (
                  <div className="relative">
                    <img
                      src={project.afterImage}
                      alt="Redesigned UI"
                      width="1600"
                      height="900"
                      className="w-full max-h-[300px] object-cover"
                    />
                    <span className="absolute bottom-2 right-2 px-2.5 py-0.5 rounded bg-purple-950/80 border border-purple-400/30 text-[9px] font-bold text-white uppercase">
                      Final Redesign
                    </span>
                  </div>
                ) : (
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    width="1600"
                    height="900"
                    className="w-full max-h-[260px] object-cover"
                  />
                )}
              </div>

              {/* Title & Tagline */}
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-purple-200/70 leading-relaxed font-medium">
                  {project.tagline}
                </p>
              </div>

              {/* Only show detailed case study if not a website redesign */}
              {project.service !== 'website-redesign' && (
                <>
                  {/* Key Metrics / Proof */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {project.metrics.map((st, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-center"
                        >
                          <div className="text-base sm:text-lg font-black text-purple-200">
                            {st.value}
                          </div>
                          <div className="text-[10px] text-purple-300/70 uppercase tracking-wider font-semibold">
                            {st.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Problem & Transformation */}
                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/15 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300">
                        <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                        <span>The Challenge & Transformation</span>
                      </div>
                      <p className="text-xs text-purple-100/90 leading-relaxed">
                        {project.summary || project.solution}
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* Project Deliverables Breakdown */}
              {project.deliverables && (
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-purple-300/70 uppercase tracking-wider block">
                    Deliverables & Assets
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.deliverables.map((del, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/10 flex items-center gap-2 text-xs text-purple-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack / Tools */}
              {project.tools && (
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-purple-300/70 uppercase tracking-wider block">
                    Production & Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-purple-950/40 border border-purple-500/20 text-[11px] font-medium text-purple-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Client Testimonial */}
              {(project.clientReview || (project as any).testimonial) && (
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-950/60 to-[#1b0733] border border-purple-500/20 space-y-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array((project.clientReview || (project as any).testimonial)?.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-purple-100 italic leading-relaxed">
                    "{(project.clientReview || (project as any).testimonial)?.quote}"
                  </p>
                  <div className="text-[11px] font-bold text-white pt-1">
                    {(project.clientReview || (project as any).testimonial)?.author} &mdash;{' '}
                    <span className="text-purple-300 font-normal">
                      {(project.clientReview || (project as any).testimonial)?.role} ({(project.clientReview || (project as any).testimonial)?.company})
                    </span>
                  </div>
                </div>
              )}

              {/* Turnaround & Guarantee */}
              {project.turnaroundTime && (
                <div className="flex items-center justify-between text-xs text-purple-300/70 py-2 border-t border-purple-500/15">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    <span>Turnaround: <strong className="text-white">{project.turnaroundTime}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>100% Satisfaction SLA</span>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer / Direct CTA */}
            <div className="p-4 bg-purple-950/60 border-t border-purple-500/20 flex items-center justify-between gap-3">
              <div className="hidden sm:block">
                <span className="text-[10px] text-purple-300/70 uppercase tracking-wider block font-semibold">
                  {project.websiteUrl ? 'View Project Live' : 'Ready for similar impact?'}
                </span>
                <span className="text-xs font-bold text-white">
                  {project.websiteUrl ? 'Launch Project Website' : 'Limited Sprint Availability'}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span>Visit Website</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => {
                    onClose();
                    onOpenInquiry(project.service, project.title);
                  }}
                  className={`w-full sm:w-auto py-2.5 px-5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 ${project.websiteUrl ? 'bg-purple-950/60 border border-purple-500/30 text-white' : 'bg-white text-purple-950 hover:bg-purple-50'}`}
                >
                  <span>Request Sprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
