import React from 'react';
import { BlurReveal } from '../components/BlurReveal';
import { Linkedin, Mail } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/portfolioData';

export function NaimurBioPage() {
  const naimur = TEAM_MEMBERS.find(m => m.id === 'naimur-rahman');

  if (!naimur) {
    return <div className="text-white text-center py-20">Bio not found.</div>;
  }

  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <BlurReveal blurAmount={20} yOffset={24} duration={0.8}>
        <div className="flex flex-col items-center space-y-6">
          <img src={naimur.avatar} alt={naimur.name} className="w-32 h-32 rounded-full border-4 border-purple-500/20" />
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">{naimur.name}</h1>
            <p className="text-purple-400 font-semibold text-lg">{naimur.role}</p>
          </div>
          
          <div className="w-full space-y-4 pt-6">
            {naimur.socials?.linkedin && (
              <a href={naimur.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white bg-purple-950/50 border border-purple-500/20 hover:border-purple-500/50 px-6 py-4 rounded-xl font-semibold transition-all">
                <Linkedin size={20} className="text-purple-300" />
                Connect on LinkedIn
              </a>
            )}
            <a href="mailto:naimur@shyftednext.com" className="flex items-center gap-4 text-white bg-purple-950/50 border border-purple-500/20 hover:border-purple-500/50 px-6 py-4 rounded-xl font-semibold transition-all">
              <Mail size={20} className="text-purple-300" />
              Email Me
            </a>
          </div>
        </div>
      </BlurReveal>
    </div>
  );
}
