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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <BlurReveal blurAmount={20} yOffset={24} duration={0.8}>
            <div className="text-center space-y-4 mb-16">
                <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Our Leadership Team</h1>
                <p className="text-purple-300/60 max-w-lg mx-auto">Meet the visionaries driving our creative excellence.</p>
            </div>
        </BlurReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
                <BlurReveal key={member.id} blurAmount={20} yOffset={24} duration={0.8}>
                    <div 
                        className="p-8 rounded-3xl bg-[#0f041e]/90 border border-purple-500/15 shadow-xl shadow-purple-950/30 cursor-pointer hover:border-purple-500/30 transition-all flex flex-col items-center"
                        onClick={() => member.id === 'naimur-rahman' ? navigate('/naimur') : setSelectedMember(member)}
                    >
                        <img src={member.avatar} alt={member.name} className="w-32 h-32 rounded-full mb-6 border-4 border-purple-500/20" />
                        <h3 className="text-xl font-bold text-white text-center">{member.name}</h3>
                        <p className="text-purple-400 font-semibold mb-6">{member.role}</p>
                        <p className="text-purple-200/70 text-sm leading-relaxed text-center flex-grow">{member.bio.substring(0, 100)}...</p>
                        <button className="mt-4 text-purple-300 font-medium hover:text-white transition-colors">
                            {member.id === 'naimur-rahman' ? 'View Bio' : 'Read More'}
                        </button>
                    </div>
                </BlurReveal>
            ))}
        </div>
        
        {/* Footer Link Section */}
        <div className="mt-20 pt-10 border-t border-purple-500/10 text-center">
            <button onClick={() => navigate('/naimur')} className="text-purple-300 hover:text-white transition-colors font-medium">
                Visit Naimur Rahman's Portfolio Bio Page
            </button>
        </div>

        {selectedMember && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/90 backdrop-blur-md" onClick={() => setSelectedMember(null)}>
                <div className="bg-[#0f041e] border border-purple-500/20 p-10 rounded-3xl max-w-lg w-full shadow-2xl" onClick={e => e.stopPropagation()}>
                    <img src={selectedMember.avatar} alt={selectedMember.name} className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-purple-500/20" />
                    <h2 className="text-3xl font-bold text-white text-center mb-2">{selectedMember.name}</h2>
                    <p className="text-purple-400 text-center font-semibold mb-6 text-lg">{selectedMember.role}</p>
                    <p className="text-purple-200 leading-relaxed mb-8">{selectedMember.bio}</p>
                    {selectedMember.socials?.linkedin && (
                        <a href={selectedMember.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-white bg-blue-600 px-6 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-colors">
                            <Linkedin size={20} />
                            Connect on LinkedIn
                        </a>
                    )}
                </div>
            </div>
        )}
    </div>
  );
}
