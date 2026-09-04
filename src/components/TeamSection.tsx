import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/portfolioData';
import { TeamMember } from '../types';
import { BlurReveal } from './BlurReveal';
import { Linkedin } from 'lucide-react';

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="space-y-8 scroll-mt-24">
      <BlurReveal blurAmount={20} yOffset={24} duration={0.8}>
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Our Leadership</h2>
          <p className="text-purple-300/60 max-w-lg mx-auto">Meet the visionaries driving our creative excellence.</p>
        </div>
      </BlurReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM_MEMBERS.map((member) => (
          <BlurReveal key={member.id} blurAmount={20} yOffset={24} duration={0.8}>
            <div 
              className="p-6 rounded-2xl bg-[#0f041e]/90 border border-purple-500/15 shadow-xl shadow-purple-950/30 cursor-pointer hover:border-purple-500/30 transition-all"
              onClick={() => setSelectedMember(member)}
            >
              <img src={member.avatar} alt={member.name} width="80" height="80" loading="lazy" className="w-20 h-20 rounded-full mx-auto mb-4 border border-purple-500/20 object-cover" />
              <h3 className="text-lg font-bold text-white text-center">{member.name}</h3>
              <p className="text-purple-300 text-sm text-center mb-4">{member.role}</p>
            </div>
          </BlurReveal>
        ))}
      </div>

      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-purple-950/80 backdrop-blur-sm" onClick={() => setSelectedMember(null)}>
          <div className="bg-[#0f041e] border border-purple-500/20 p-5 sm:p-8 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
            <img src={selectedMember.avatar} alt={selectedMember.name} width="128" height="128" loading="lazy" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 border-4 border-purple-500/20 object-cover" />
            <h2 className="text-xl sm:text-2xl font-bold text-white text-center">{selectedMember.name}</h2>
            <p className="text-purple-400 text-center mb-3 sm:mb-4 text-sm">{selectedMember.role}</p>
            <p className="text-purple-200 text-xs sm:text-sm leading-relaxed mb-6">{selectedMember.bio}</p>
            {selectedMember.socials?.linkedin && (
              <a href={selectedMember.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-white bg-blue-600 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold hover:bg-blue-700 transition-colors">
                <Linkedin size={16} />
                Connect on LinkedIn
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
