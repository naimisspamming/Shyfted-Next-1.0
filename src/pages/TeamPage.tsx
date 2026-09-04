import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TEAM_MEMBERS } from '../data/portfolioData';
import { TeamMember } from '../types';
import { BlurReveal } from '../components/BlurReveal';
import { Linkedin } from 'lucide-react';

export function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <BlurReveal blurAmount={20} yOffset={24} duration={0.8}>
            <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
                <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Our Team</h1>
            </div>
        </BlurReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TEAM_MEMBERS.map((member) => (
                <BlurReveal key={member.id} blurAmount={20} yOffset={24} duration={0.8}>
                        <div 
                        className="p-6 sm:p-8 rounded-3xl bg-[#0f041e]/90 border border-purple-500/15 shadow-xl shadow-purple-950/30 cursor-pointer hover:border-purple-500/30 transition-all flex flex-col items-center"
                        onClick={() => member.id === 'naimur-rahman' ? navigate('/naimur') : (member.id === 'mohaddes-ali-tuhin' ? navigate('/mohaddes') : (member.id === 'raiyan-karim' ? navigate('/raiyan') : (member.id === 'abdullah-al-noman' ? navigate('/noman') : (member.id === 'syed-rabby-hasan' ? navigate('/rabby') : setSelectedMember(member)))))}
                    >
                        <img src={member.avatar} alt={member.name} width="128" height="128" loading="lazy" className="w-28 sm:w-32 h-28 sm:h-32 rounded-full mb-4 sm:mb-6 border-4 border-purple-500/20 object-cover" />
                        <h2 className="text-lg sm:text-xl font-bold text-white text-center">{member.name}</h2>
                        <p className="text-purple-400 font-semibold mb-4 sm:mb-6 text-sm sm:text-base">{member.role}</p>
                    </div>
                </BlurReveal>
            ))}
        </div>
        {selectedMember && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-purple-950/90 backdrop-blur-md" onClick={() => setSelectedMember(null)}>
                <div className="bg-[#0f041e] border border-purple-500/20 p-6 sm:p-10 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
                    <img src={selectedMember.avatar} alt={selectedMember.name} width="160" height="160" loading="lazy" className="w-28 sm:w-40 h-28 sm:h-40 rounded-full mx-auto mb-6 sm:mb-8 border-4 border-purple-500/20 object-cover" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">{selectedMember.name}</h2>
                    <p className="text-purple-400 text-center font-semibold mb-4 sm:mb-6 text-base sm:text-lg">{selectedMember.role}</p>
                    <p className="text-purple-200 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">{selectedMember.bio}</p>
                    {selectedMember.socials?.linkedin && (
                        <a href={selectedMember.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-white bg-blue-600 px-5 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold hover:bg-blue-700 transition-colors">
                            <Linkedin size={18} />
                            Connect on LinkedIn
                        </a>
                    )}
                </div>
            </div>
        )}
    </div>
  );
}
