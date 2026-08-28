import React from 'react';
import { BlurReveal } from '../components/BlurReveal';
import { Linkedin, Mail } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/portfolioData';

export function RabbyBioPage() {
  const rabby = TEAM_MEMBERS.find(m => m.id === 'syed-rabby-hasan');

  if (!rabby) {
    return <div className="text-white text-center py-20">Bio not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <BlurReveal blurAmount={20} yOffset={24} duration={0.8}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Profile Card */}
          <div className="bg-[#0f041e]/50 border border-purple-500/10 rounded-3xl p-8 flex flex-col items-center justify-center space-y-4">
            <img src={rabby.avatar} alt={rabby.name} className="w-32 h-32 rounded-full border-4 border-purple-500/20" />
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white">{rabby.name}</h1>
              <p className="text-purple-400 font-semibold text-lg">{rabby.role}</p>
              <p className="text-purple-300/80 text-sm">Shyfted Next</p>
            </div>
          </div>

          {/* Links Card */}
          <div className="bg-[#0f041e]/50 border border-purple-500/10 rounded-3xl p-8 flex flex-col justify-center gap-4">
            {rabby.socials?.linkedin && (
              <a href={rabby.socials.linkedin} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-4 text-white bg-purple-950/30 border border-purple-500/10 hover:border-purple-500/30 px-6 py-4 rounded-2xl font-semibold transition-all">
                <Linkedin size={20} className="text-purple-300" />
                Connect on LinkedIn
              </a>
            )}
            <a href={`mailto:${rabby.email}`} 
               className="flex items-center gap-4 text-white bg-purple-950/30 border border-purple-500/10 hover:border-purple-500/30 px-6 py-4 rounded-2xl font-semibold transition-all">
              <Mail size={20} className="text-purple-300" />
              Email Me
            </a>
          </div>

          {/* Ventures Card */}
          {rabby.ventures && rabby.ventures.length > 0 && (
            <div className="bg-[#0f041e]/50 border border-purple-500/10 rounded-3xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">Ventures</h2>
              <div className="space-y-4">
                {rabby.ventures.map((venture, i) => (
                  <div key={i} className="p-4 bg-purple-950/20 rounded-xl border border-purple-500/5">
                    <div className="font-semibold text-white">{venture.name}</div>
                    <div className="text-sm text-purple-300/70">{venture.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Institutions Card */}
          {rabby.institutions && rabby.institutions.length > 0 && (
            <div className="bg-[#0f041e]/50 border border-purple-500/10 rounded-3xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">Institutions</h2>
              <div className="space-y-4">
                {rabby.institutions.map((inst, i) => (
                  <div key={i} className="p-4 bg-purple-950/20 rounded-xl border border-purple-500/5">
                    <div className="font-semibold text-white">{inst.name}</div>
                    <div className="text-sm text-purple-300/70">{inst.description}</div>
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
