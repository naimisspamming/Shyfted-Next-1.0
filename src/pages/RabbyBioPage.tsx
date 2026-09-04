import React from 'react';
import { BlurReveal } from '../components/BlurReveal';
import { Linkedin, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TEAM_MEMBERS } from '../data/portfolioData';

export function RabbyBioPage() {
  const rabby = TEAM_MEMBERS.find(m => m.id === 'syed-rabby-hasan');

  if (!rabby) {
    return <div className="text-white text-center py-20">Bio not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="mb-6">
        <Link to="/team" className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-white transition-colors px-3.5 py-2 rounded-xl bg-purple-950/40 border border-purple-500/20 hover:border-purple-500/40">
          <ArrowLeft size={14} /> Back to Team
        </Link>
      </div>
      <BlurReveal blurAmount={20} yOffset={24} duration={0.8}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Profile Card */}
          <div className="bg-[#0f041e]/50 border border-purple-500/10 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center space-y-4">
            <img src={rabby.avatar} alt={rabby.name} className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-purple-500/20 object-cover" />
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">{rabby.name}</h1>
              <p className="text-purple-400 font-semibold text-base sm:text-lg">{rabby.role}</p>
              <p className="text-purple-300/80 text-xs sm:text-sm">Shyfted Next</p>
            </div>
          </div>

          {/* Links Card */}
          <div className="bg-[#0f041e]/50 border border-purple-500/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-center gap-3 sm:gap-4">
            {rabby.socials?.linkedin && (
              <a href={rabby.socials.linkedin} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 sm:gap-4 text-white bg-purple-950/30 border border-purple-500/10 hover:border-purple-500/30 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl text-xs sm:text-base font-semibold transition-all">
                <Linkedin size={20} className="text-purple-300 shrink-0" />
                Connect on LinkedIn
              </a>
            )}
            <a href={`mailto:${rabby.email}`} 
               className="flex items-center gap-3 sm:gap-4 text-white bg-purple-950/30 border border-purple-500/10 hover:border-purple-500/30 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl text-xs sm:text-base font-semibold transition-all">
              <Mail size={20} className="text-purple-300 shrink-0" />
              Email Me
            </a>
          </div>

          {/* Ventures Card */}
          {rabby.ventures && rabby.ventures.length > 0 && (
            <div className="bg-[#0f041e]/50 border border-purple-500/10 rounded-3xl p-6 sm:p-8">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Ventures</h2>
              <div className="space-y-3 sm:space-y-4">
                {rabby.ventures.map((venture, i) => (
                  <div key={i} className="p-3.5 sm:p-4 bg-purple-950/20 rounded-xl border border-purple-500/5">
                    <div className="font-semibold text-white text-sm sm:text-base">{venture.name}</div>
                    <div className="text-xs sm:text-sm text-purple-300/70">{venture.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Institutions Card */}
          {rabby.institutions && rabby.institutions.length > 0 && (
            <div className="bg-[#0f041e]/50 border border-purple-500/10 rounded-3xl p-6 sm:p-8">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Institutions</h2>
              <div className="space-y-3 sm:space-y-4">
                {rabby.institutions.map((inst, i) => (
                  <div key={i} className="p-3.5 sm:p-4 bg-purple-950/20 rounded-xl border border-purple-500/5">
                    <div className="font-semibold text-white text-sm sm:text-base">{inst.name}</div>
                    <div className="text-xs sm:text-sm text-purple-300/70">{inst.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </BlurReveal>
    </div>
  );
}
